//route 访问路径，路由
//router 路由管理者
import { createRouter, createWebHashHistory } from 'vue-router';// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//创建路由 route

import index  from  "@/views/index.vue"
import login  from  "@/views/login.vue"
import register  from  "@/views/register.vue"
import user  from  "@/views/users/index.vue"
import forgot  from  "@/views/users/forgot.vue"
import Header  from  "@/components/Header.vue"
import {getToken, setToken} from "@/utils/auth";
const routes = [
   { path: '/', name:"index",component: index },
   { path: '/login', name:"login",component: login },
   { path: '/register',name:"register", component: register },
   { path: '/user', name:"user",component: user },
   { path: '/forgot', name:"forgot",component: forgot },
   { path: '/header', name:"header",component: Header },
]
//创建路由管理 router
const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,}
  );

//路由全局守卫
router.beforeEach((to, from, next) => {

    //  1重点获取token pinia
    //  2判断token是否存在
    //  3跳转到相应页面
    const token=getToken();
    // console.log('..............................token................');
    //
    // console.log(token);
    // console.log('..............................to...............');
    //
    // console.log(to);
    // console.log('..............................from...............');
    //
    // console.log(from);
    if (token) {
        next();
    } else {
        // 用户未登录判断
        if (to.path === '/login' || to.path === '/index'||to.name==="index"|| to.path === '/register'||to.name==="forgot") {
            next();
        } else {
            next({ path: '/login' });
        }
    }

})

 //导出路由
export default router