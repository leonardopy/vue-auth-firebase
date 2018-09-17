import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Hello from '@/components/Hello'
import firebase from 'firebase'
import AddToCalendar from 'vue-add-to-calendar'

Vue.use(AddToCalendar);

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Hello,
      meta:{
        requiresAuth:true
      }
    },

  ]
})

let fb= firebase;
router.beforeEach((to, from, next) => {
    let currentUser = fb.auth().currentUser;
    //debugger
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    //debugger
    if(requiresAuth && !currentUser) {
      
      next(login)
    } else if (!requiresAuth && currentUser) {
      next()
    }
    else {
      next()
    }
  })

  export default router
