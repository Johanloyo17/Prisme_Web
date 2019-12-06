import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Element from 'element-ui';
import firebase from 'firebase'
Vue.use(Element, { size: 'medium', zIndex: 3000 });

Vue.config.productionTip = false
// firebase.auth.onAuthStateChanged( )
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
  let isUser = firebase.auth().currentUser;
  let needAuth = to.matched.some(record => record.meta.needAuth)
  
  if (needAuth && !isUser) {
    next('login')
    // console.log('necesitas credenciales')
  }
  else if (!needAuth && isUser ){
    next()
    // console.log('no necesitas credeciales pero las tienes, adelante')
  }
  else if (!needAuth && !isUser ){
    next()
    // console.log('no necesitas credeciales y lo las tienes, crea una cuenta o ingresa a una')
  }
  else{
    // console.log('adelante')
    next()
  }
  // console.log(needAuth)
  console.log(isUser)
})
