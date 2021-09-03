/**
 * Created by 王冬 on 2021/5/24.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import Vue from 'vue';
import Router from 'vue-router';

import Base from './component/demo_base';
import FormItemInput from './component/input';

Vue.use(Router);

const routes = [
    {
        path: '/demo/base',
        component: Base,
    },
    {
        path: '/formItem/input',
        component: FormItemInput,
    },
    {
        path: '*',
        redirect: '/demo/base',
    },
];

const router = new Router({
    routes,
    // mode: 'history',
});

export default router;
