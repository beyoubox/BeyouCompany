// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/mobile/index'

import '../../assets/css/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import "jquery"
import store from "../../store";

Vue.config.productionTip = false


var abc = document.documentElement.clientWidth;        
var bl = abc/750;//设计稿的宽度        
var fontSize = 100*bl;  
document.documentElement.style.fontSize = fontSize + "px";

/* eslint-disable */
router.afterEach((to,from,next) => {
  //console.log(to,from,next);
  window.scrollTo(0,0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
