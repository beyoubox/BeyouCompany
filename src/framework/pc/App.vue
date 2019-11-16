<template>
  <div id="app">
    <div class="wrap_box">
      <div class="wrap">
        <div class="logo">
          <img src="../../assets/img/logo.png" alt="">
        </div>
        <div class="nav_box">
          <ul class="header_nav">
            <router-link tag="li" to="/" exact>首页</router-link>
            <router-link tag="li" to="/chain">公链生态</router-link>
            <router-link tag="li" to="/specification">链改直通车</router-link>
            <router-link tag="li" to="/roots" ref="pro">产品说明书
              <!-- <div class="instructions">
                <router-link tag="p" to="/specification">无感支付</router-link>
                <router-link tag="p" to="/roots">溯源应用</router-link>
              </div> -->
            </router-link>
            <router-link tag="li" to="/about">关于我们</router-link>
            <li class="popup" ref="popup">加入我们
              <div class="popup_window">
                <p class="one">敬请期待</p>
              </div>
            </li>
            <li class="pop" ref="pop">联系我们
              <div class="popup_window" style="width: 150px;left: -0.6rem">
                <p>bd@merchain.cn</p>
              </div>
            </li>
            <li @click="language" ref="language_box">
              <span ref="language">简体中文</span>
              <div class="language" ref="choose">
                <p @click="Ch">简体中文</p>
                <p @click="En">English</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
<!--    <div v-show="shows" class="popup_window">-->
<!--      <div @click="shows=!shows" class="shadow"></div>-->
<!--      <div class="popup_window_content">-->
<!--        <p>请联系我们</p>-->
<!--        <p>邮箱：lixin@merchain.cn</p>-->
<!--      </div>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                show: false,
                // shows:false,
                nav: ""
            }
        },
        mounted() {
            // if(this.$route.path == "/specification" || this.$route.path == "/roots"){
            //     this.$refs.pro.classList.add("active");
            // }else{
            //     this.$refs.pro.classList.remove("active");
            // }
            document.querySelector(".popup").onmouseover = function () {
                document.querySelectorAll(".popup_window")[0].style.display = "block";
            }
            document.querySelector(".popup").onmouseout = function () {
                document.querySelectorAll(".popup_window")[0].style.display = "none";
            }
            document.querySelector(".pop").onmouseover = function () {
                document.querySelectorAll(".popup_window")[1].style.display = "block";
            }
            document.querySelector(".pop").onmouseout = function () {
                document.querySelectorAll(".popup_window")[1].style.display = "none";
            }
        },
        methods: {
            language() {
                this.show = !this.show;
                if (this.show == true) {
                    this.$refs.language_box.classList.add("sanjiao");
                    this.$refs.choose.style.height = "0.56rem";
                } else {
                    this.$refs.language_box.classList.remove("sanjiao");
                    this.$refs.choose.style.height = "0rem";
                }

            },
            Ch() {
                this.$refs.language.innerText = "简体中文";
            },
            En() {
                this.$refs.language.innerText = "English";
            }
        },
        created() {

        }
        // watch: {
        //   $route(to, from) {
        //     if(this.$route.path == "/specification" || this.$route.path == "/roots"){
        //       this.$refs.pro.classList.add("active");
        //     }else{
        //       this.$refs.pro.classList.remove("active");
        //     }
        //   }
        // }
    }
</script>

<style scoped>
  #app {
    width: 100%;
    min-width: 14rem;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
  }

  .wrap_box {
    width: 100%;
    position: absolute;
    z-index: 10000;

  }

  .wrap {
    margin: 0 auto;
    width: 14rem;
    height: 1.48rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    height: 0.72rem;
    padding-top: 0.20rem;
    margin-left: 0.31rem;
    vertical-align: top;
    display: inline-block;
  }

  .nav_box {
    /* min-width: 6.80rem; */
    width: 9.1rem;
    position: relative;
    /* padding:60px 0; */
  }

  .header_nav {
    display: flex;
    justify-content: space-between;
    height: 0.28rem;
    align-items: center;
  }

  .header_nav li {
    font-size: 0.18rem;
    /* float: left; */
    cursor: pointer;
    line-height: 0.28rem;
    color: white;
    position: relative;
    transition: 0.2s all linear;
  }

  .header_nav li::before {
    content: "";
    position: absolute;
    top: 0.02rem;
    left: 0;
    width: 0;
    height: 100%;
    border-bottom: 2px solid white;
    transition: 0.26s all linear;
  }

  /* 设置下划线颜色 */
  .header_nav li:hover::before {
    width: 100%;
    /* top: 5px; */
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color: #FFFFFF;
  }

  .header_nav li:hover ~ .header_nav li::before {
    left: 100%;
  }

  .header_nav .active::before {
    content: "";
    position: absolute;
    top: 0.02rem;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #FFFFFF;
  }

  /* .header_nav .instructions .active::before{
    content: "";
    display: none;
    width: 0%;
    height: 0%;
  } */

  .header_nav li:nth-last-child(1)::before {
    border: none;
  }


  .header_nav li:nth-last-child(1) {
    padding: 0.06rem 0.19rem 0.06rem 0.08rem;
    height: 0.3rem;
    line-height: 0.18rem;
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    border-radius: 0.1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header_nav li:nth-last-child(1)::after {
    content: "";
    position: absolute;
    width: 0.06rem;
    height: 0.06rem;
    background: url("../../assets/img/sanjiao.png") no-repeat center;
    background-size: 100% 100%;
    right: 0.08rem;
    /* transform: rotate(-180deg); */
    transition: all 0.2s linear;
  }

  .language {
    width: 100%;
    height: 0;
    position: absolute;
    top: 120%;
    /* right: 0; */
    background: rgba(255, 255, 255, 1);
    color: black;
    border-radius: 0.03rem;
    overflow: hidden;
    transition: all 0.2s linear;
  }

  .language p {
    text-align: center;
    padding: 0.05rem;
  }

  .sanjiao::after {
    transform: rotate(-180deg);
    transform-origin: center center;
    transition: 0.2s all linear;
  }

  .header_nav li:nth-child(4) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header_nav li:nth-child(4):hover .instructions {
    height: 0.56rem;
    transition: all 0.2s linear;
  }

  .instructions {
    width: 100%;
    position: absolute;
    top: 110%;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.03rem;
    height: 0px;
    overflow: hidden;
    transition: all 0.2s linear;
  }

  .instructions p {
    text-align: center;
    color: #000;
    line-height: 0.28rem;
  }


  .popup_window {
    display: none;
    position: absolute;
    width: 78px;
    height: 40px;
    background: url("../../assets/img/tancuang.png") no-repeat;
    background-size: 100% 100%;
    color: #333333;
    left: -0.16rem;
  }

  .popup_window p {
    font-size: 16px;
    text-align: center;
    /* position: absolute;
    left: 0;top: 0;right: 0;bottom: 0;
    margin: auto; */
    padding-top: 16px;
  }

</style>
