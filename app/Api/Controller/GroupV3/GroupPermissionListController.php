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

namespace App\Api\Controller\GroupV3;

use App\Models\Category;
use App\Models\Permission;
use App\Common\ResponseCode;
use App\Repositories\UserRepository;
use Discuz\Base\DzqController;

class GroupPermissionListController extends DzqController
{
    protected function checkRequestPermissions(UserRepository $userRepo)
    {
        if ($this->user->isGuest()) {
            $this->outPut(ResponseCode::JUMP_TO_LOGIN);
        }
        return true;
    }

    public function main()
    {
        $userGroup = $this->user->groups;
        $groupId = $userGroup[0]['id'];
        
        $groupPermissons = Permission::query()
            ->where('group_id', $groupId)
            ->pluck('permission')->toArray();
        $groupPermissons = array_flip($groupPermissons);

        $categories = Category::query()->get()->toArray();
        $categoryIds = array_column($categories, 'id');

        $allPermissons = $this->getAllPermissons($categoryIds, $groupPermissons);
        $result = array(
            'myGroup' => array(
                'nickname' => $this->user->nickname,
                'avatar' => $this->user->avatar,
                'groupName' => $userGroup[0]['name'],
                'createdAt' => $this->user->created_at,
            ),
            'myPermissons' => $allPermissons
        );
        return $this->outPut(ResponseCode::SUCCESS, '', $result);
    }

    public function getAllPermissons($categoryIds = [], $groupPermissons = [])
    {
        $allPermissons = array(
            'general' => array(
                'thread.sticky'     => isset($groupPermissons['thread.sticky']),     // ??????
                'thread.favorite'   => isset($groupPermissons['thread.favorite']),   // ??????
                'thread.likePosts'  => isset($groupPermissons['thread.likePosts']),  // ??????
                'user.view'         => isset($groupPermissons['user.view']),         // ????????????
                'userFollow.create' => isset($groupPermissons['userFollow.create']), // ????????????
                'dialog.create'     => isset($groupPermissons['dialog.create']),     // ????????????
                'other.canInviteUserScale' => isset($groupPermissons['other.canInviteUserScale']), // ????????????(????????????)
                'createThreadWithCaptcha'  => isset($groupPermissons['createThreadWithCaptcha']),  // ????????????????????????
                'publishNeedBindPhone'     => isset($groupPermissons['publishNeedBindPhone']),     // ???????????????????????????
                'cash.create'     => isset($groupPermissons['cash.create']),    // ????????????
                'order.create'    => isset($groupPermissons['order.create']),   // ????????????
                'trade.pay.order' => isset($groupPermissons['trade.pay.order']) // ????????????
            )
        );
        foreach ($categoryIds as $key => $value) {
            if (isset($groupPermissons['thread.insertImage']) || isset($groupPermissons['category' . $value . '.thread.insertImage'])) {
                $allPermissons['thread.insertImage'][$value] = true;
            } else {
                $allPermissons['thread.insertImage'][$value] = false;
            }

            if (isset($groupPermissons['thread.insertVideo']) || isset($groupPermissons['category' . $value . '.thread.insertVideo'])) {
                $allPermissons['thread.insertVideo'][$value] = true;
            } else {
                $allPermissons['thread.insertVideo'][$value] = false;
            }
            
            if (isset($groupPermissons['thread.insertAudio']) || isset($groupPermissons['category' . $value . '.thread.insertAudio'])) {
                $allPermissons['thread.insertAudio'][$value] = true;
            } else {
                $allPermissons['thread.insertAudio'][$value] = false;
            }

            if (isset($groupPermissons['thread.insertAttachment']) || isset($groupPermissons['category' . $value . '.thread.insertAttachment'])) {
                $allPermissons['thread.insertAttachment'][$value] = true;
            } else {
                $allPermissons['thread.insertAttachment'][$value] = false;
            }

            if (isset($groupPermissons['thread.insertGoods']) || isset($groupPermissons['category' . $value . '.thread.insertGoods'])) {
                $allPermissons['thread.insertGoods'][$value] = true;
            } else {
                $allPermissons['thread.insertGoods'][$value] = false;
            }

            if (isset($groupPermissons['thread.insertPay']) || isset($groupPermissons['category' . $value . '.thread.insertPay'])) {
                $allPermissons['thread.insertPay'][$value] = true;
            } else {
                $allPermissons['thread.insertPay'][$value] = false;
            }

            if (isset($groupPermissons['thread.insertReward']) || isset($groupPermissons['category' . $value . '.thread.insertReward'])) {
                $allPermissons['thread.insertReward'][$value] = true;
            } else {
                $allPermissons['thread.insertReward'][$value] = false;
            }

            if (isset($groupPermissons['thread.insertRedPacket']) || isset($groupPermissons['category' . $value . '.thread.insertRedPacket'])) {
                $allPermissons['thread.insertRedPacket'][$value] = true;
            } else {
                $allPermissons['thread.insertRedPacket'][$value] = false;
            }

            if (isset($groupPermissons['thread.insertPosition']) || isset($groupPermissons['category' . $value . '.thread.insertPosition'])) {
                $allPermissons['thread.insertPosition'][$value] = true;
            } else {
                $allPermissons['thread.insertPosition'][$value] = false;
            }

            if (isset($groupPermissons['thread.allowAnonymous']) || isset($groupPermissons['category' . $value . '.thread.allowAnonymous'])) {
                $allPermissons['thread.allowAnonymous'][$value] = true;
            } else {
                $allPermissons['thread.allowAnonymous'][$value] = false;
            }

            // ????????????
            if (isset($groupPermissons['thread.viewThreads']) || isset($groupPermissons['category' . $value . '.thread.viewThreads'])) {
                $allPermissons['thread.viewThreads'][$value] = true;
            } else {
                $allPermissons['thread.viewThreads'][$value] = false;
            }

            // ??????????????????
            if (isset($groupPermissons['thread.viewPosts']) || isset($groupPermissons['category' . $value . '.thread.viewPosts'])) {
                $allPermissons['thread.viewPosts'][$value] = true;
            } else {
                $allPermissons['thread.viewPosts'][$value] = false;
            }

            // ????????????????????????
            if (isset($groupPermissons['thread.freeViewPosts']) || isset($groupPermissons['category' . $value . '.thread.freeViewPosts'])) {
                $allPermissons['thread.freeViewPosts'][$value] = true;
            } else {
                $allPermissons['thread.freeViewPosts'][$value] = false;
            }

            // ????????????
            if (isset($groupPermissons['thread.reply']) || isset($groupPermissons['category' . $value . '.thread.reply'])) {
                $allPermissons['thread.reply'][$value] = true;
            } else {
                $allPermissons['thread.reply'][$value] = false;
            }

            // ??????
            if (isset($groupPermissons['thread.essence']) || isset($groupPermissons['category' . $value . '.thread.essence'])) {
                $allPermissons['thread.essence'][$value] = true;
            } else {
                $allPermissons['thread.essence'][$value] = false;
            }

            // ????????????
            if (isset($groupPermissons['thread.edit']) || isset($groupPermissons['category' . $value . '.thread.edit'])) {
                $allPermissons['thread.edit'][$value] = true;
            } else {
                $allPermissons['thread.edit'][$value] = false;
            }

            // ????????????
            if (isset($groupPermissons['thread.hide']) || isset($groupPermissons['category' . $value . '.thread.hide'])) {
                $allPermissons['thread.hide'][$value] = true;
            } else {
                $allPermissons['thread.hide'][$value] = false;
            }

            // ????????????
            if (isset($groupPermissons['thread.hidePosts']) || isset($groupPermissons['category' . $value . '.thread.hidePosts'])) {
                $allPermissons['thread.hidePosts'][$value] = true;
            } else {
                $allPermissons['thread.hidePosts'][$value] = false;
            }

            // ?????????????????????
            if (isset($groupPermissons['thread.editOwnThread']) || isset($groupPermissons['category' . $value . '.thread.editOwnThread'])) {
                $allPermissons['thread.editOwnThread'][$value] = true;
            } else {
                $allPermissons['thread.editOwnThread'][$value] = false;
            }

            // ??????????????????????????????
            if (isset($groupPermissons['thread.hideOwnThreadOrPost']) || isset($groupPermissons['category' . $value . '.thread.hideOwnThreadOrPost'])) {
                $allPermissons['thread.hideOwnThreadOrPost'][$value] = true;
            } else {
                $allPermissons['thread.hideOwnThreadOrPost'][$value] = false;
            }
        }

        //????????????????????????????????????
        if ($this->user->isAdmin()) {
            foreach ($allPermissons as $key=>$val) {
                if (is_array($val)) {
                    foreach ($val as $k=>$v){
                        $allPermissons[$key][$k] = true;
                    }
                }
            }
        }

        return $allPermissons;
    }
}
