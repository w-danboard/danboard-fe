import Vue from 'vue'
import Router from 'vue-router'
// import { setLocal } from '@/lib/local';

Vue.use(Router);

// 验证是否登录过
//  const validate = async () => {
//    console.log('===>', this)
//   let res = await this.$request({
//     url: '/api/user/validate',
//     method: 'GET'
//   })
//   if (res.code === 0) {
//     setLocal('token', res.token);
//   };
//   return res.code === 0; // 返回用户是否失效
//  }


 // 登录
 const login = () => 
 import('@/views/login/index.vue')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        name: '登录'
      }
    }
  ]
})


export default router