// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RankListIndexView from '../views/ranklist/RankListView'
import RecordIndexView from '../views/record/RecordIndexView'
import RecordContentView from '../views/record/RecordContentView'
import UserBotIndexView from '../views/user/bots/UserBotIndexView'
import NotFound from '../views/error/NotFound'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView'
import UserAccountAcWingWebReceiveCodeView from '../views/user/account/UserAccountAcWingWebReceiveCodeView'
import store from '../store/index'

const routes = [
    {
        path: "/",
        name: "home",
        redirect: "/pk/",
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/pk/",
        name: "pk_index",
        component: PkIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/record/",
        name: "record_index",
        component: RecordIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/record/:recordId/",
        name: "record_content",
        component: RecordContentView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/ranklist/",
        name: "ranklist_index",
        component: RankListIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/user/bot/",
        name: "user_bot_index",
        component: UserBotIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/user/account/login/",
        name: "user_account_login",
        component: UserAccountLoginView,
        meta: {
            requestAuth: false,
        }
    },
    {
        path: "/user/account/register/",
        name: "user_account_register",
        component: UserAccountRegisterView,
        meta: {
            requestAuth: false,
        }
    },
    {
        path: "/user/account/acwing/web/receive_code/",
        name: "user_account_acwing_web_receive_code",
        component: UserAccountAcWingWebReceiveCodeView,
        meta: {
            requestAuth: false,
        }
    },
    {
        path: "/404/",
        name: "404",
        component: NotFound,
        meta: {
            requestAuth: false,
        }
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/404/",
    }
]

const router = createRouter({
//   history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

// to: 跳转到哪个页面, from: 从哪个页面跳转过去, next: 是否执行操作
router.beforeEach((to, from, next) => {
    if(to.meta.requestAuth && !store.state.user.is_login) {
        next({name: "user_account_login"});
    } else {
        next();
    }
})

export default router
