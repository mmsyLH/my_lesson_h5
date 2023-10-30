import {defineStore} from 'pinia';
import {login, register} from '@/js/user';
import {getToken, setToken, setUser} from "@/utils/auth";
// import { getToken, setToken, removeToken } from '@/utils/auth';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            // token: getToken(),
            "state": 1,
            "id": 0,
            "userName": "",
            "userType": "",
            "token": getToken(),
            "binding": 0,
            "createTime": "",
            "updateTime": "",
        }
    }),

    getters: {
        // 定义需要的 getters
    },

    mutations: {
        //设置
        SET_TOKEN(token) {
            this.user.token = token;
        },
        SET_ID(state, id) {
            this.user.id = id;
        },
        SET_USER_NAME(state, name) {
            this.user.name = name;
        },
        // 定义其他需要的 mutations
    },

    actions: {
        setUser(userinfo) {
            this.user = userinfo
        },
        // 登录
        login(loginForm) {
            const data = {
                userName: loginForm.userName,
                password: loginForm.password
            };
            try {
                return new Promise((resolve, reject) => {
                    login(data)
                        .then(res => {
                            setToken(res.data.userinfo.token)//存在cookies
                            //把这个res.data.userinfo转成Json对象  命名为userjson
                            // console.log("userjson", JSON.parse(JSON.stringify(res.data.userinfo)))
                            // setUser(getToken(),JSON.parse(JSON.stringify(res.data.userinfo)))
                            resolve(res);
                        })
                        .catch(error => {
                            reject(error);
                        });
                });
            } catch (error) {
                return Promise.reject(error);
            }
        },


        //注册
        register(registerForm) {
            console.log("进入了user.js的register()参数为", registerForm);
            const data = {
                userName: registerForm.userName.trim(),
                password: registerForm.password
            };
            try {
                const res = register(data);
                console.log(res)
                return Promise.resolve(res);
            } catch (error) {
                return Promise.reject(error);
            }
        },
        //其他方法
    },

});
