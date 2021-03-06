<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Api\Controller\UsersV3;


use App\Commands\Users\GenJwtToken;
use App\Common\AuthUtils;
use App\Common\ResponseCode;
use App\Events\Users\Logind;
use App\Events\Users\TransitionBind;
use App\Models\SessionToken;
use App\Passport\Repositories\UserRepository;
use App\Settings\SettingsRepository;
use Discuz\Auth\Exception\PermissionDeniedException;
use Discuz\Base\DzqLog;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Contracts\Events\Dispatcher as Events;
use Illuminate\Validation\Factory as Validator;
use Discuz\Foundation\Application;

class LoginController extends AuthBaseController
{
    public $bus;
    public $app;
    public $events;
    public $type;
    public $validator;
    public $setting;

    public function __construct(
        Dispatcher          $bus,
        Application         $app,
        Events              $events,
        Validator           $validator,
        SettingsRepository  $settingsRepository
    ){
        $this->bus          = $bus;
        $this->app          = $app;
        $this->events       = $events;
        $this->validator    = $validator;
        $this->setting      = $settingsRepository;
    }

    protected function checkRequestPermissions(\App\Repositories\UserRepository $userRepo)
    {
        return true;
    }

    public function main()
    {
        $this->info('begin_username_login_process');
        $paramData = [
            'username'      => $this->inPut('username'),
            'password'      => $this->inPut('password'),
            'type'          => $this->inPut('type'),
            'sessionToken'  => $this->inPut('sessionToken'),
        ];

        try {
            $this->validator->make($paramData, [
                'username' => 'required',
                'password' => 'required',
            ])->validate();

            $type = $this->inPut('type');
            $response = $this->genJwtToken($paramData);
            if($response->getStatusCode() != 200) {
                $this->outPut(ResponseCode::LOGIN_FAILED, '????????????');
            }
            $accessToken = json_decode($response->getBody(), true);

            $user = $this->app->make(UserRepository::class)->getUser();

            $this->events->dispatch(new Logind($user));

            $wechat = (bool)$this->setting->get('offiaccount_close', 'wx_offiaccount');
            $miniWechat = (bool)$this->setting->get('miniprogram_close', 'wx_miniprogram');
            $sms = (bool)$this->setting->get('qcloud_sms', 'qcloud');
            $this->info('login_user', [
                'user'          =>  $user,
                'accessToken'   =>  $accessToken,
                'sms'           =>  $sms,
                'wechat'        =>  $wechat,
                'miniWechat'    =>  $miniWechat
            ]);
            //???????????????????????????????????????
            if(! $sms && !$wechat && !$miniWechat ) {
                $this->outPut(ResponseCode::SUCCESS, '', $this->addUserInfo($user,$this->camelData($accessToken)));
            }

            //??????????????????????????????????????????????????????
            $sessionToken = $this->inPut('sessionToken');
            if($sessionToken && strlen($sessionToken) != 0 && (bool)$this->setting->get('is_need_transition')) {
                $this->info('begin_transition_process',[
                    'user'          => $user,
                    'sessionToken'  => $sessionToken
                ]);
                $this->events->dispatch(new TransitionBind($user, ['sessionToken' => $sessionToken]));
                $this->outPut(ResponseCode::SUCCESS, '', $this->addUserInfo($user,$this->camelData($accessToken)));
            }

            if($type == 'mobilebrowser_username_login') {
                //????????????????????????????????????????????????
                $token = SessionToken::generate(SessionToken::WECHAT_MOBILE_BIND, $accessToken , $user->id);
                $token->save();
                $data = [
                    'sessionToken'  => $token->token,
                    'nickname'      => $user->nickname
                ];
                $this->info('mobilebrowser_username_login',[
                    'token' => $token,
                    'data'  => $data,
                    'user'  => $user
                ]);
                if($wechat || $miniWechat) { //???????????????
                    //???????????????
                    $bindTypeArr = AuthUtils::getBindTypeArrByCombinationBindType($user->bind_type);
                    if(!in_array(AuthUtils::WECHAT, $bindTypeArr)) {
                        $data['uid'] = !empty($user->id) ? $user->id : 0;
                        $this->outPut(ResponseCode::NEED_BIND_WECHAT, '', $data);
                    }
                }
                if(! $wechat && ! $miniWechat && $sms && !$user->mobile) {//????????????????????????????????????
                    $this->outPut(ResponseCode::NEED_BIND_PHONE, '', $data);
                }
                $this->outPut(ResponseCode::SUCCESS, '', $this->addUserInfo($user,$this->camelData($accessToken)));
            }
            $this->outPut(ResponseCode::SUCCESS, '', $this->addUserInfo($user,$this->camelData($accessToken)));
        } catch (\Exception $e) {
            DzqLog::error('???????????????????????????', $paramData, $e->getMessage());
            $this->outPut(ResponseCode::INTERNAL_ERROR, '???????????????????????????');
        }

    }
}
