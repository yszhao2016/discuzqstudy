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
use App\Commands\Users\RegisterPhoneUser;
use App\Common\AuthUtils;
use App\Common\ResponseCode;
use App\Events\Users\Logind;
use App\Models\SessionToken;
use App\Models\User;
use App\Repositories\UserRepository;
use Discuz\Base\DzqLog;
use Discuz\Contracts\Setting\SettingsRepository;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Contracts\Events\Dispatcher as Events;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Support\Arr;

class SmsLoginController extends AuthBaseController
{
    public $bus;
    public $settings;
    public $events;
    public $connection;

    public function __construct(
        Dispatcher          $bus,
        SettingsRepository  $settings,
        Events              $events,
        ConnectionInterface $connection
    ) {
        $this->bus          = $bus;
        $this->settings     = $settings;
        $this->events       = $events;
        $this->connection   = $connection;
    }

    protected function checkRequestPermissions(UserRepository $userRepo)
    {
        return true;
    }

    public function main()
    {
        $this->info('begin_sms_login_register_process');
        $this->connection->beginTransaction();
        try {
            $type       = $this->inPut('type');
            $mobileCode = $this->getMobileCode('login');
            $inviteCode = $this->inPut('inviteCode');
            $ip         = ip($this->request->getServerParams());
            $port       = Arr::get($this->request->getServerParams(), 'REMOTE_PORT', 0);

            $paramData = [
                'mobile'        => $this->inPut('mobile'),
                'code'          => $this->inPut('code'),
                'type'          => $this->inPut('type'),
                'inviteCode'    => $this->inPut('inviteCode')
            ];

            //register new user
            if (is_null($mobileCode->user)) {
                if (!(bool)$this->settings->get('register_close')) {
                    $this->connection->rollback();
                    $this->outPut(ResponseCode::REGISTER_CLOSE);
                }

                $exits = User::query()->where('mobile', $mobileCode->mobile)->lockForUpdate()->exists();
                if ($exits) {
                    $this->connection->rollback();
                    $this->outPut(ResponseCode::TRY_LOGIN_AGAIN);
                }

                $data['register_ip']        = $ip;
                $data['register_port']      = $port;
                $data['mobile']             = $mobileCode->mobile;
                $data['code']               = $inviteCode;
                $data['register_reason']    = trans('user.register_by_sms');
                $user = $this->bus->dispatch(
                    new RegisterPhoneUser($this->user, $data)
                );
                $mobileCode->setRelation('user', $user);

                $this->updateUserBindType($mobileCode->user, AuthUtils::PHONE);
                $this->info('auto_registered_and_updated', [
                    'input'      => [
                        'data'         => $data
                    ],
                    'output'      => [
                        'user'         => $user,
                        'mobileCode'   => $mobileCode
                    ]
                ]);
            }

            //??????????????????????????????????????????????????????
            if ($mobileCode->user->status != User::STATUS_MOD) {
                $this->events->dispatch(
                    new Logind($mobileCode->user)
                );
            }

            $accessToken = $this->getAccessToken($mobileCode->user);

            $this->info('generate_accessToken',[
                'user'          =>  $mobileCode->user,
                'accessToken'   =>  $accessToken
            ]);

            $result = $this->camelData(collect($accessToken));
            $result = $this->addUserInfo($mobileCode->user, $result);

            if ($type == 'mobilebrowser_sms_login') {
                $wechat     = (bool)$this->settings->get('offiaccount_close', 'wx_offiaccount');
                $miniWechat = (bool)$this->settings->get('miniprogram_close', 'wx_miniprogram');
                $sms        = (bool)$this->settings->get('qcloud_sms', 'qcloud');
                //???????????????????????????????????????
                if (! $sms && !$wechat && !$miniWechat) {
                    $this->connection->commit();
                    $this->outPut(ResponseCode::SUCCESS, '', $result);
                }

                //????????????????????????????????????????????????
                $token = SessionToken::generate(
                    SessionToken::WECHAT_MOBILE_BIND,
                    $accessToken,
                    $mobileCode->user->id
                );
                $token->save();
                $this->info('generate_token', [
                    'token' => $token,
                    'user'  => $mobileCode->user
                ]);
                if ($wechat || $miniWechat) { //???????????????
                    //???????????????
                    $bindTypeArr = AuthUtils::getBindTypeArrByCombinationBindType($mobileCode->user->bind_type);
                    if (!in_array(AuthUtils::WECHAT, $bindTypeArr)) {
                        //????????????????????????????????????????????????
                        $nickname = !empty($mobileCode->user->nickname) ? $mobileCode->user->nickname : $mobileCode->user->mobile;
                        $data = [
                            'sessionToken'  => $token->token,
                            'nickname'      => $nickname,
                            'uid'           => !empty($mobileCode->user->id) ? $mobileCode->user->id : 0
                        ];
                        $this->connection->commit();
                        return $this->outPut(ResponseCode::NEED_BIND_WECHAT, '', $data);
                    }
                }
            }
            $this->connection->commit();
            $this->outPut(ResponseCode::SUCCESS, '', $result);
        } catch (\Exception $e) {
            DzqLog::error('???????????????-??????????????????', $paramData, $e->getMessage());
            $this->connection->rollback();
            $this->outPut(ResponseCode::INTERNAL_ERROR, '???????????????-??????????????????');
        }
    }
}
