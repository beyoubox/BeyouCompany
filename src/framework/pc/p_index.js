// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/pc/index'
import '../../assets/css/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper);
import "jquery"
import store from "../../store";

Vue.config.productionTip = false


//  alert('PC端') 
var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值  
var wH = window.innerHeight; // 当前窗口的高度      
var wW = window.innerWidth; // 当前窗口的宽度       
var rem
if (wW <= 1024) {
  rem = 1024 * whdef;
} else {
  rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值      
}
$('html').css('font-size', rem + "px");
$(window).resize(function () {  // 绑定到窗口的这个事件中 
  var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值              
  var wH = window.innerHeight; // 当前窗口的高度              
  var wW = window.innerWidth; // 当前窗口的宽度              
  if (wW <= 1024) {
    rem = 1024 * whdef;
  } else {
    rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值      
  }
  $('html').css('font-size', rem + "px");
  // var H = document.documentElement.scrollHeight;           
  // $('html').height(H); 
  console.log(1)
});


/* eslint-disable */
router.afterEach((to, from, next) => {
  //console.log(to,from,next);
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: {App},
  template: '<App/>'
})
