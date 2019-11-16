<template>
  <div id="app">
    <div class="m_nav_box">
      <div class="m_nav">
        <img class="m_logo" src="../../assets/mobileImg/logo.png" alt="">
        <div class="burger">
          <div class="burger-content" @click="menu">
            <div class="wrap bar" ref="bar">
              <div class="barTop" ref="top"></div>
              <div class="barBtm" ref="btm"></div>
            </div>
          </div>
          <ul class="menu" v-show="nav">
            <li @click="down"><router-link to="/" class="navbar-toggle" href="javascript:;">首页</router-link></li>
            <li @click="down"><router-link to="/chain" class="navbar-toggle" href="javascript:;">公链生态</router-link></li>
            <li @click="down"><router-link to="/specification" class="navbar-toggle" href="javascript:;">链改直通车</router-link></li>
            <li @click="down">
              <router-link to="/roots" class="navbar-toggle" href="javascript:;">产品说明书</router-link>
              <!-- <ul v-show="navigation">
                <li @click="down"><router-link to="/specification" href="javascript:;">无感支付</router-link></li>
                <li @click="down"><router-link to="/roots" href="javascript:;">溯源应用</router-link></li>
              </ul> -->
            </li>
            <li @click="down"><router-link to="/about" class="navbar-toggle" href="javascript:;">关于我们</router-link></li>
            <li>
              <a class="navbar-toggle" @click="show = !show" href="javascript:;">加入我们</a>
              <ul v-show="show">
                <li @click="down"><a>敬请期待</a></li>
              </ul>
            </li>
            <li>
              <a class="navbar-toggle" @click="shows = !shows" href="javascript:;">联系我们</a>
              <ul v-show="shows">
                <li @click="down"><a>bd@merchain.cn</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div v-show="show" class="popup_window">
      <div @click="show=!show" class="shadow"></div>
      <div class="popup_window_content">
        <p>请联系我们</p>
        <p>邮箱：lixin@merchain.cn</p>
      </div>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      nav:false,
      // navigation:false,
      show:false,
      shows:false
    }
  },
  methods:{
    menu(){
      this.nav = !this.nav;
      if(this.nav==false){
        this.$refs.bar.classList.add("bar");
        this.$refs.bar.classList.remove("bar_wrap");
        this.$refs.top.classList.add("barTop");
        this.$refs.top.classList.remove("m_top");
        this.$refs.btm.classList.add("barBtm");
        this.$refs.btm.classList.remove("m_btm");
      }else{
        this.$refs.bar.classList.add("bar_wrap");
        this.$refs.bar.classList.remove("bar");
        this.$refs.top.classList.add("m_top");
        this.$refs.top.classList.remove("barTop");
        this.$refs.btm.classList.add("m_btm");
        this.$refs.btm.classList.remove("barBtm");
      }
    },
    down(){
      this.nav=false;
      // this.navigation=false;
      this.show = false;
      this.shows = false;
      this.$refs.bar.classList.add("bar");
      this.$refs.bar.classList.remove("bar_wrap");
      this.$refs.top.classList.add("barTop");
      this.$refs.top.classList.remove("m_top");
      this.$refs.btm.classList.add("barBtm");
      this.$refs.btm.classList.remove("m_btm");
    }
  },
  mounted(){

  }
}
</script>

<style scoped>
  #app {
      width: 100vw;
      min-height: 100vh;
      position: relative;
  }
  .m_nav_box{
    position: absolute;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 0.3rem;
    top: 0;
    z-index: 1000;
    /* background: red; */
  }
  .m_nav{
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .m_nav img{
    width: 2.70rem;
    height: 0.8rem;
    vertical-align: top;
  }
  .burger{
    position: relative;
  }
  .burger-content{
    width: 0.80rem;
    height: 0.8rem;
    position: relative;
    cursor: pointer;
  }
  .wrap{
    width: 0.48rem;
    height: 0.28rem;
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    margin: auto;
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  }
  .bar{
    transform: rotate(0);
  }
  .bar_wrap{
    transform: rotate(90deg);
  }
  .wrap div:nth-child(1){
    position: absolute;
    top: 0;
    width: 0.48rem;
    height: 0.06rem;
    background: #FFFFFF;
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition-delay: 0s;
  }
  .barTop{
    transform: translateY(0px) rotate(0deg);
  }
  .m_top{
    transform: translateY(0.05rem) rotate(45deg);
  }
  .wrap div:nth-child(2){
    bottom: 0;
    right: 0;
    position: absolute;
    height: 0.06rem;
    background: #FFFFFF;
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition-delay: 0s;
  }
  .barBtm{
    transform: translateY(0px) rotate(0deg);
    width: 0.36rem;
  }
  .m_btm{
    width: 0.48rem;
    transform: translateY(0.04rem) rotate(-45deg);
    top: 0;
  }
  .menu{
    width: 2.6rem;
    position: absolute;
    right: 0;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 0.08rem;
    box-shadow:0px 15px 20px 0px rgba(0, 0, 0, 0.05);
  }
  .menu>li{
    width: 100%;
    box-sizing: border-box;
  }
  .menu li .navbar-toggle{
    text-align: center;
    border-bottom: 1px solid #F5F5F5;
    display: block;
    font-size: 0.32rem;
    line-height: 0.32rem;
    color: #333333;
    box-sizing: border-box;
    padding: 0.3rem 0;
  }
  .menu li:nth-last-child(1) .navbar-toggle{
    border-bottom: 0;
  }
  .menu li>ul>li>a{
    display: block;
    font-size: 0.28rem;
    text-align: center;
    padding: 0.2rem 0;
    color: #999999;
  }
  .menu li>ul>li:nth-last-child(1)>a{
    border-bottom: 1px solid #F5F5F5;
  }


</style>
