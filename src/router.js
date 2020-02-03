import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import LogIn from './views/LogIn.vue'
import Panel from './views/Panel.vue'
//import firebase from 'firebase/auth'
Vue.use(Router);

export default   new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    //home
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/LogIn',
      name : 'LogIn',
      component : LogIn
    },

    {
      path: '/register',
      name : 'register',
      component : Register
    },
    
    {
      path: '/panel',
      name: 'panel',
      component: Panel,
      meta: { 
        needAuth:true
      }
    }
  ]
})




