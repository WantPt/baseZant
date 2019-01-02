import Vue from 'vue'
import Router from 'vue-router'
import {
  resolve
} from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index.vue'], resolve),
      meta: { title: '首页'},
    },
    {
      path: '/accountBook',
      name: 'accountBook',
      component: resolve => require(['@/pages/accountBook/accountBook.vue'], resolve),
      meta: { title: '账单',goPath:-1},
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['@/pages/my/my.vue'], resolve),
      meta: { title: '我的',goPath:'index'},
    },
  ]
})
