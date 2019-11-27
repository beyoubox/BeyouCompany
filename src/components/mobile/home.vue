<template>
  <article class="home">
    <header class="header">
      <!-- <div class="header_text">
          <p>Start Your BusinessWith Our Services</p>
          <p>This should be used to tell us your story and let us know a little more about your demands.  How can we benefit you ?</p>
          <div>CALL TO ACTION</div>
      </div>
      <div class="header_img">
          <img src="../../assets/mobileImg/Vector.png" alt="">
      </div> -->
      <swiper :options="swiperOption">
        <swiper-slide class="photo">
          <!-- <img class="photo_img" src='../../assets/mobileImg/bannerbj.png'> -->
          <div class="photo_content">
            <div class="header_text">
              <p>Start Your BusinessWith Our Services</p>
              <p>This should be used to tell us your story and let us know a little more about your demands. How can we
                benefit you ?</p>
              <div>CALL TO ACTION</div>
            </div>
            <div class="header_img">
              <img src="../../assets/mobileImg/Vector.png" alt="banner">
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </header>
    <section class="project_show">
      <div class="project_tit">
        <div class="title">
          <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain Products</p>
        </div>
      </div>
      <ul class="project">
        <li>
          <div class="grid">
            <div class="image">
              <img src="../../assets/img/yiliao.png" alt="">
            </div>
            <p class="technology">生态公链</p>
          </div>
          <div class="btn">项目详情</div>
        </li>
        <li>
          <div class="grid">
            <div class="image">
              <img src="../../assets/img/rengong.png" alt="">
            </div>
            <p class="technology">链改吧</p>
          </div>
          <div class="btn">项目详情</div>
        </li>
        <li>
          <div class="grid">
            <div class="image">
              <img src="../../assets/img/zhihuiyil.png" alt="">
            </div>
            <p class="technology">企业服务</p>
          </div>
          <div class="btn">项目详情</div>
        </li>
      </ul>
    </section>
    <section class="business">
      <div class="title">
        <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain Business</p>
      </div>
      <div class="liangai">
        <div class="liangai_tit">
          <p>生态公链</p>
          <a href="javascript:;">点击进入</a>
        </div>
        <ul class="liangai_text animated" style="visibility: hidden;animation-name: none;">
          <li>
            <p>公链钱包</p>
            <p>Merchain(莫嗔科技)以强大的技术团队不断进行底层公链的研发和功能的优化，将不断提高公链的各方面能力，不受其他任何链的限制，营造一个自由平等的链世界。</p>
          </li>
          <li>
            <p>公链价值</p>
            <p>公链在整个区块链领域是非常重要的——底层公链相当于区块链世界的基础设施，解决方案用来拓展底层公链的性能或为商业应用提供服务支撑。只有在底层公链扎实稳健高效运转的基础上，区块链商业应用才能发展和落地。</p>
          </li>
          <li>
            <p>公链布局</p>
            <p>Merchain(莫嗔科技)从应用生态、多链钱包、金融生态、稳定币四个部分出发，基于自己的底层公链不断研发完善高层服务，提高公链价值，同时开放各领域的接入接口，从各方面MC生态。</p>
          </li>
        </ul>
        <div class="liangai_img animated" style="visibility: hidden;animation-name: none;">
          <img src="../../assets/img/liangai.png" alt="">
        </div>
      </div>
      <div class="qukuai">
        <p class="qukuai_text">
          Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
        <div class="qukuai_process_box animated" style="visibility: hidden;animation-name: none;">
          <div class="qukuai_process">
            <div class="qukuai_process_subclass">
              <div class="qukuai_process_img">
                <img src="../../assets/img/kaoca.png" alt="">
              </div>
            </div>
            <div class="qukuai_process_right">
              <img src="../../assets/img/qukuai_right.png" alt="">
            </div>
            <div class="qukuai_process_subclass">
              <div class="qukuai_process_img">
                <img src="../../assets/img/kaifa.png" alt="">
              </div>
            </div>
            <div class="qukuai_process_right">
              <img src="../../assets/img/qukuai_right.png" alt="">
            </div>
            <div class="qukuai_process_subclass">
              <div class="qukuai_process_img">
                <img src="../../assets/img/xuanfa.png" alt="">
              </div>
            </div>
          </div>
          <div class="qukuai_process_tit">
            <p>项目考察<br>项目包装</p>
            <p>项目开发<br>项目合规</p>
            <p>项目宣发<br>项目融资</p>
          </div>
        </div>
        <div class="qukuai_img animated" style="visibility: hidden;animation-name: none;">
          <img src="../../assets/img/qukuai.png" alt="">
        </div>
      </div>
      <div class="liangai">
        <div class="liangai_tit">
          <p>链改吧形成品牌效应</p>
          <a href="javascript:;">点击进入</a>
        </div>
        <ul class="liangai_text animated" style="visibility: hidden;animation-name: none;">
          <li>
            <p>媒体宣发</p>
            <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
          </li>
          <li>
            <p>技术开发</p>
            <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
          </li>
          <li>
            <p>社群对接</p>
            <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
          </li>
          <li>
            <p>项目出海</p>
            <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
          </li>
        </ul>
        <div class="liangai_img animated" style="visibility: hidden;animation-name: none;">
          <img src="../../assets/img/liangai.png" alt="">
        </div>
      </div>
    </section>
    <section class="dapps">
      <div class="title">
        <p class="tit animated" style="visibility: hidden;animation-name: none;">Merchain Dapps</p>
      </div>
      <div class="dapps_box">
        <ul class="dapps_content animated slideInRight" style="visibility: hidden;animation-name: none;">
          <li>
            <div class="dapps_img">
              <img src="../../assets/img/zhifu.png" alt="">
            </div>
            <p class="dapps_tit">支付应用</p>
            <p class="dapps_text">研发智能无感支付技术，操作简便，可通过SAAS、SDK、API等三种方式灵活接入商家，为合作伙伴提供安全稳定的数字货币流通渠道。</p>
            <div class="dapps_state_box">
              <router-link tag="a" to="/specification" class="dapps_state" href="javascript:void(0)">产品说明书</router-link>
            </div>
          </li>
          <li>
            <div class="dapps_img">
              <img src="../../assets/img/suyuan.png" alt="">
            </div>
            <p class="dapps_tit">溯源应用</p>
            <p class="dapps_text">研发供应链全流程解决方案，部署5G硬件感应系统，建立物联网实时数据库，区块云联商家，一物一码识别，提高生产效率，提升品牌价值。</p>
            <div class="dapps_state_box">
              <router-link tag="a" to="/roots" class="dapps_state" href="javascript:void(0)">产品说明书</router-link>
            </div>
          </li>
          <li>
            <div class="dapps_img">
              <img src="../../assets/img/youxi.png" alt="">
            </div>
            <p class="dapps_tit">游戏应用</p>
            <p class="dapps_text">研发游戏人物、游戏道具版权确权系统，基于以太坊、EOS、TRON开发DAPP，已获得加拿大牌照，为合作伙伴提供定制化SDK解决方案。</p>
            <div class="dapps_state_box"><a class="dapps_state" href="javascript:void(0)">产品说明书</a></div>
          </li>
          <li>
            <div class="dapps_img">
              <img src="../../assets/img/qiye.png" alt="">
            </div>
            <p class="dapps_tit">企业应用</p>
            <p class="dapps_text">根据企业需求，结合区块链技术等创新科技，解决企业痛点问题。如身份认证、数据存证、信息加密脱敏处理、电子票据分布式存储等。</p>
            <div class="dapps_state_box"><a class="dapps_state" href="javascript:void(0)">产品说明书</a></div>
          </li>
          <li>
            <div class="dapps_img">
              <img src="../../assets/img/ipfs.png" alt="">
            </div>
            <p class="dapps_tit">IPFS应用</p>
            <p class="dapps_text">研发分布式存储系统，构筑资源管理防火墙。搭建硬盘挖矿ERP系统，根据产币量的真实数据分配矿池收益，为社区节点提供安全技术保障。</p>
            <div class="dapps_state_box"><a class="dapps_state" href="javascript:void(0)">产品说明书</a></div>
          </li>
        </ul>
      </div>
    </section>
    <section class="course">
      <div class="title">
        <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain Course</p>
      </div>
      <div class="course_content animated" style="visibility: hidden;animation-name: none;">
        <div class="course_box">
          <div class="course_wrap_top">
            <div></div>
            <div>
              <p class="course_time">2018.9</p>
              <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>
            </div>
            <div></div>
            <div>
              <p class="course_time">2018.9</p>
              <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>
            </div>
            <div></div>
          </div>
          <img class="course_img" src="../../assets/img/licheng.png" alt="">
          <div class="course_wrap_bottom">
            <div>
              <p class="course_time">2018.9</p>
              <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>
            </div>
            <div></div>
            <div>
              <p class="course_time">2018.9</p>
              <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>
            </div>
            <div></div>
            <div>
              <p class="course_time">2018.9</p>
              <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="news_box">
      <div class="title">
        <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain News</p>
      </div>
      <ul class="news">
        <li>
          <div class="news_img">
            <img src="../../assets/img/shiyans.png" alt="">
          </div>
          <div class="news_text">
            <p>区块链的未来已来，加入我们使它分布得更均匀</p>
            <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动</p>
            <a href="javascript:;">查看详情</a>
          </div>
        </li>
        <li>
          <div class="news_img">
            <img src="../../assets/img/qukliant.png" alt="">
          </div>
          <div class="news_text">
            <p>区块链的未来已来，加入我们使它分布得更均匀</p>
            <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动</p>
            <a href="javascript:;">查看详情</a>
          </div>
        </li>
        <li>
          <div class="news_img">
            <img src="../../assets/img/zhihuics.png" alt="">
          </div>
          <div class="news_text">
            <p>区块链的未来已来，加入我们使它分布得更均匀</p>
            <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动</p>
            <a href="javascript:;">查看详情</a>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <div class="footer_tit">
        <p>联系我们</p>
        <p>共筑区块链发展基石，共建区块链命运共同体</p>
      </div>
      <div class="footer_content">
        <ul>
          <li>
            <p>联系电话</p>
            <p>18018592068</p>
          </li>
          <li>
            <p>商务邮箱</p>
            <p>bd@merchain.cn</p>
          </li>
          <li>
            <p>招聘邮箱</p>
            <p>hr@merchain.cn</p>
          </li>
        </ul>
        <div class="code">
          <img src="../../assets/img/code.png" alt="">
          <p>扫一扫关注莫嗔科技旗下品牌</p>
          <p>【链改吧】官方微信公众号</p>
        </div>
      </div>
      <div class="address">
        <p>总公司地址：上海市杨浦区铁岭路123号</p>
        <p>加拿大分部：450 Southwest Marine Drive Vancouver BC V5X 4V2</p>
      </div>
    </footer>
  </article>
</template>

<script>
    import animate from 'animate.css'
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "Home",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'custom',
                        //自定义分页器样式
                        renderCustom: function (swiper, current, total) {
                            const activeColor = '#FFFFFF'
                            const normalColor = 'rgba(255,255,255,0.5)'
                            let color = ''
                            let paginationStyle = ''
                            let html = ''
                            for (let i = 1; i <= total; i++) {
                                if (i === current) {
                                    color = activeColor
                                } else {
                                    color = normalColor
                                }
                                paginationStyle = `background:${color};opacity:1;margin-right:0.08rem;margin-bottom:0.4rem;width:0.3rem;height:0.06rem;border-radius:0;`
                                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
                            }
                            return html
                        }
                    },
                    // mousewheel: true,
                    grabCursor: true,
                    // autoplay:{
                    //     delay:8000,
                    //     disableOnInteraction: false
                    // },
                    on: {
                        init: function (swiper) {
                            this.slide = this.slides.eq(0);
                            // console.log(this.slide)
                            this.slide.addClass('ani-slide');
                        },
                        transitionStart: function () {
                            for (let i = 0; i < this.slides.length; i++) {
                                this.slide = this.slides.eq(i);
                                this.slide.removeClass('ani-slide');
                            }
                        },
                        transitionEnd: function () {
                            this.slide = this.slides.eq(this.activeIndex);
                            this.slide.addClass('ani-slide');
                        },
                    },
                    loop: true
                }
            }
        },
        methods: {
            showIcon() {
                let animated = document.querySelectorAll(".animated");
                let t = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset; //获取滚动距离

                for (let i = 0; i < animated.length; i++) {
                    if (t >= animated[i].offsetTop - Number(`${document.documentElement.clientHeight}`) && t <= animated[i].offsetTop + animated[i].offsetHeight) {
                        animated[i].style = "visibility: visible;animation-duration: 1.4s; animation-delay: 0.2s;"
                    }
                }
            }
        },
        mounted() {
            let animated = document.querySelectorAll(".animated");
            let s = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;

            for (let i = 0; i < animated.length; i++) {
                if (s >= animated[i].offsetTop - Number(`${document.documentElement.clientHeight}`) && s <= animated[i].offsetTop + animated[i].offsetHeight) {
                    animated[i].style = "visibility: visible;animation-duration: 1.4s; animation-delay: 0.2s;"
                }
            }
            window.addEventListener("scroll", this.showIcon);
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.showIcon);
        }
    }
</script>

<style scoped>
  .home {
    width: 100vw;
    min-height: 100vh;
  }

  .header {
    /* padding: 2.11rem 0.3rem 1.25rem; */
    width: 100%;
    height: 13.34rem;
    /* background: url("../../assets/mobileImg/bannerbj.png") no-repeat; */
    /* background-size: 100% 100%; */
    /* box-sizing: border-box; */
    color: white;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; */
  }

  .photo {
    width: 100%;
    height: 13.34rem;
    background: url("../../assets/mobileImg/bannerbj.png") no-repeat;
    background-size: 100% 100%;
    padding: 2.11rem 0.3rem 1.25rem;
    box-sizing: border-box;
  }

  .photo_content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .header_text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header_text p:nth-child(1) {
    font-size: 0.36rem;
    line-height: 0.38rem;
    text-align: center;
    font-weight: 500;
  }

  .header_text p:nth-child(2) {
    font-size: 0.32rem;
    text-align: center;
    margin-top: 0.59rem;
  }

  .header_text div:nth-child(3) {
    width: 2.86rem;
    height: 0.66rem;
    line-height: 0.66rem;
    text-align: center;
    color: white;
    font-size: 0.24rem;
    background: linear-gradient(45deg, rgba(93, 22, 216, 1), rgba(48, 235, 242, 1));
    margin-top: 0.65rem;
  }

  .header_img {
    width: 6.15rem;
    height: 5.50rem;
  }

  .header_img img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .header_img img {
    transform: translateX(2rem);
    opacity: 0;
  }

  .header_text {
    transform: translateX(-2rem);
    opacity: 0;
  }

  .ani-slide .header_text {
    transform: translate(0);
    opacity: 1;
    transition: 2.4s all cubic-bezier(.12, .24, .28, 1.01) 0.1s;
  }

  .ani-slide .header_img img {
    transform: translateX(0);
    opacity: 1;
    transition: 2.4s all cubic-bezier(.12, .24, .28, 1.01) 0.1s;
    animation: myfirst 6s linear 2.4s infinite alternate;
  }

  @keyframes myfirst {
    0% {
      transform: translateX(0px);
      transform: translateY(0px);
    }
    25% {
      transform: translateX(-10px);
      transform: translateY(10px);
    }
    50% {
      transform: translateX(-10px);
      transform: translateY(-10px);
    }
    75% {
      transform: translateX(10px);
      transform: translateY(10px);
    }
    100% {
      transform: translateX(10px);
      transform: translateY(-10px);
    }
  }


  .project_show {
    padding-top: 1rem;
  }

  .title {
    display: flex;
    justify-content: center;
  }

  .tit {
    position: relative;
    font-size: 0.3rem;
    color: #222222;
    line-height: 0.3rem;
    height: 0.3rem;
    font-weight: bold;
    /* display: flex; */
    /* align-items:center; */
  }

  .tit::before {
    content: "";
    position: absolute;
    width: 0.2rem;
    height: 0.04rem;
    background: #222222;
    left: -0.49rem;
    top: 50%;
    margin-top: -0.02rem;
  }

  .tit::after {
    content: "";
    position: absolute;
    width: 0.2rem;
    height: 0.04rem;
    background: #222222;
    right: -0.49rem;
    top: 50%;
    margin-top: -0.02rem;
  }

  .project {
    display: flex;
    padding-top: 0.76rem;
  }

  .project li {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex-grow: 1;
  }

  .project li .grid {
    height: 2rem;
    /* border-right: 1px solid #E0E0E0; */
  }

  /* .project li:nth-last-child(1) .grid{
      border-right: none;
  } */
  .image {
    width: 100%;
    height: 0.94rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image img {
    height: 0.60rem;
    /* width: 0.60rem; */
  }

  .technology {
    color: #333333;
    font-weight: Bold;
    font-size: 0.26rem;
    margin: 0.29rem 0 0.25rem;
  }

  .use {
    color: #999999;
    font-size: 0.22rem;
  }

  .btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.04rem 0.14rem;
    /* width: 1.2rem;
    height: 0.36rem; */
    /* text-align: center; */
    /* line-height: 0.36rem; */
    box-sizing: border-box;
    margin: 0.37rem auto 0.3rem;
    /* color: #190E5D; */
    color: #BCBCBC;
    box-sizing: border-box;
    border: 1px solid #BCBCBC;
    border-radius: 0.17rem;
    font-size: 0.22rem;
    line-height: 0.26rem;
  }

  .business {
    padding: 1.20rem 0.38rem 0;
  }

  .qukuai {
    padding-top: 0.78rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .qukuai_text {
    color: #999999;
    font-size: 0.18rem;
    line-height: 0.32rem;
  }

  .qukuai_process_box {
    padding-top: 0.65rem;
    width: 100%;
  }

  .qukuai_process {
    display: flex;
    justify-content: space-between;
  }

  .qukuai_process_subclass {
    flex-grow: 1;
  }

  .qukuai_process_img {
    height: 0.48rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .qukuai_process_img img {
    height: 100%;
    vertical-align: top;
  }

  .qukuai_process_right {
    display: flex;
    align-items: center;
  }

  .qukuai_process_tit {
    display: flex;
  }

  .qukuai_process_tit p {
    font-size: 0.17rem;
    line-height: 0.36rem;
    color: #333333;
    text-align: center;
    flex-grow: 1;
    margin-top: 0.21rem;
  }

  .qukuai_img {
    width: 4.07rem;
    height: 4.30rem;
    margin-top: 1.14rem;
  }

  .qukuai_img img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .liangai {
    padding-top: 1.50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .liangai_tit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .liangai_tit p:nth-child(1) {
    font-size: 0.3rem;
    color: #222222;
    font-weight: bold;
  }

  .liangai_tit a:nth-child(2) {
    margin-top: 0.59rem;
    display: flex;
    align-items: center;
    color: #190E5D;
    font-size: 0.24rem;
    padding-right: 0.20rem;
    position: relative;
  }

  .liangai_tit a:nth-child(2)::after {
    content: "";
    position: absolute;
    width: 0.1rem;
    height: 0.2rem;
    background: url("../../assets/img/lanjiantou.png") no-repeat;
    background-size: 100% 100%;
    right: 0;
  }

  .liangai_text {
    width: 100%;
    margin-top: 0.89rem;
    overflow: hidden;
    overflow-x: auto;
    font-size: 0;
    white-space: nowrap;
  }

  .business .liangai_text li {
    display: inline-block;
    width: 2.72rem;
    overflow: hidden;
    margin-right: 0.6rem;
    vertical-align: top;
  }

  .liangai_text li p:nth-child(1) {
    font-weight: Bold;
    font-size: 0.26rem;
    line-height: 0.28rem;
    color: #333333;
    margin-bottom: 0.37rem;
    text-align: center;
    white-space: nowrap
  }

  .liangai_text li p:nth-child(2) {
    /* height: 2.75rem; */
    font-size: 0.24rem;
    color: #999999;
    line-height: 0.36rem;
    white-space: initial;
    word-break: break-all;
  }

  .liangai_img {
    width: 4.32rem;
    height: 4.36rem;
    margin-top: 1rem;
  }

  .liangai_img img {
    width: 4.32rem;
    height: 4.36rem;
    vertical-align: top;
  }

  .dapps {
    padding-top: 1.5rem;
    overflow: hidden;
  }

  .dapps_content {
    position: relative;
    width: 100%;
    margin-top: 0.8rem;
    overflow: hidden;
    overflow-x: auto;
    font-size: 0;
    white-space: nowrap;
  }

  .dapps_content li {
    width: 2.84rem;
    height: 100%;
    padding: 0.3rem 0.32rem 1rem;
    box-sizing: border-box;
    background-color: #FFFFFF;
    box-shadow: 0px 23px 40px 0px rgba(34, 34, 34, 0.05);
    border-radius: 0.10rem;
    position: relative;
    /* top:0; */
    /* transition:0.2s all linear; */
    display: inline-block;
    overflow: hidden;
    margin: 0 0.2rem 0.4rem;
    vertical-align: top;
  }

  .dapps_content li:nth-child(1) {
    margin-left: 0.4rem;
  }

  .dapps_content li:nth-last-child(1) {
    margin-right: 0.4rem;
  }

  /* .dapps_content li:hover{
      box-shadow:0px 0.45rem 40px 0px rgba(34,34,34,0.1);
      top: -0.22rem;
      transition:0.2s all linear;
  } */
  .dapps_img {
    display: flex;
    justify-content: center;
    margin-bottom: 0.29rem;
  }

  .dapps_img img {
    vertical-align: top;
    width: 0.72rem;
    height: 0.72rem;
  }

  .dapps_tit {
    text-align: center;
    font-weight: Bold;
    color: #333333;
    font-size: 0.26rem;
    line-height: 0.28rem;
    margin-bottom: 0.34rem;
  }

  .dapps_text {
    color: #999999;
    line-height: 0.36rem;
    font-size: 0.24rem;
    /* white-space: initial;
    white-space:normal;
    word-break:break-all; */
    /* word-break:break-all; */
    /* white-space:pre-wrap; */
    word-wrap: break-word;
    white-space: normal;
    word-break: break-all;
  }

  .dapps_state_box {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.24rem 0 0.3rem;
  }

  .dapps_state_box a {
    color: #333333;
    font-size: 0.24rem;
    padding-right: 0.16rem;
    position: relative;
    display: flex;
    align-items: center;
    color: #190E5D;
  }

  .dapps_state_box a::after {
    content: "";
    position: absolute;
    width: 0.06rem;
    height: 0.12rem;
    background: url("../../assets/img/lanjiantou.png") no-repeat;
    background-size: 100%;
    right: 0px;
  }

  .course {
    padding-top: 1.5rem;
  }

  .course_content {
    margin-top: 0.8rem;
    overflow: hidden;
    overflow-x: auto;
  }

  .course_box {
    width: 14.04rem;
  }

  .course_img {
    width: 14.04rem;
    height: 2.75rem;
    /* vertical-align: top; */
  }

  .course_wrap_top, .course_wrap_bottom {
    display: flex;
    justify-content: space-around;
  }

  .course_wrap_top {
    margin-bottom: 0.3rem;
  }

  .course_wrap_bottom {
    margin-top: -1.18rem;
  }

  .course_wrap_top div, .course_wrap_bottom div {
    width: 1.58rem;
  }

  .course_time {
    font-size: 0.18rem;
    line-height: 0.24rem;
    font-weight: bold;
    color: #333333;
  }

  .course_text {
    font-size: 0.16rem;
    color: #999999;
    line-height: 0.3rem;
    margin-top: 0.23rem;
  }

  .news_box {
    width: 100%;
    margin-top: 1.50rem;
  }

  .news {
    display: flex;
    flex-direction: column;
    margin-top: 0.52rem;
  }

  .news li {
    display: flex;
    justify-content: space-around;
    padding: 0.3rem 0.2rem 0.4rem;
    box-sizing: border-box;
    border-bottom: 1px solid #F5F5F5;
  }

  .news li:nth-last-child(1) {
    border-bottom: 0;
  }

  .news li .news_img {
    width: 3.40rem;
    height: 2.06rem;
    border-radius: 0.1rem;
    overflow: hidden;
    display: inline-block;
  }

  .news li .news_img img {
    width: 100%;
    height: 100%;
  }

  .news li .news_text {
    width: 3.13rem;
    /* margin-left: 0.28rem; */
    display: inline-block;
  }

  .news li .news_text p:nth-child(1) {
    font-size: 0.26rem;
    font-weight: Bold;
    color: #333333;
    line-height: 0.36rem;
  }

  .news li .news_text p:nth-child(2) {
    font-size: 0.24rem;
    line-height: 0.36rem;
    margin-top: 0.1rem;
    margin-bottom: 0.3rem;
    color: #999999;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .news li .news_text a:nth-child(3) {
    /* display: block; */
    width: 1rem;
    font-size: 0.22rem;
    line-height: 0.24rem;
    color: #190E5D;
    padding-right: 0.16rem;
    position: relative;
    display: flex;
    align-items: center;
  }

  .news li .news_text a:nth-child(3)::after {
    content: "";
    width: 0.08rem;
    height: 0.16rem;
    position: absolute;
    background: url("../../assets/img/lanjiantou.png") no-repeat;
    background-size: 100% 100%;
    right: 0;
  }

  .footer {
    width: 7.50rem;
    height: 8.13rem;
    background: url("../../assets/mobileImg/dibubj.png") no-repeat;
    background-size: 100% 100%;
    padding: 0.79rem 0.3rem 0.8rem;
    box-sizing: border-box;
  }

  .footer_tit p:nth-child(1) {
    font-size: 0.3rem;
    color: #FFFFFF;
    font-weight: 500;
    margin-bottom: 0.29rem;
  }

  .footer_tit p:nth-child(2) {
    font-size: 0.26rem;
    color: #FFFFFF;
    margin-bottom: 0.8rem;
    /* font-weight: lighter; */
  }

  .footer_content {
    display: flex;
    justify-content: space-between;
  }

  .footer_content ul {
    width: 2.8rem;
  }

  .footer_content ul li {
    margin-top: 0.59rem;
  }

  .footer_content ul li:nth-child(1) {
    margin-top: 0;
  }

  .footer_content ul li p:nth-child(1) {
    font-size: 0.24rem;
    color: #FFFFFF;
    font-weight: 500;
    margin-bottom: 0.24rem;
  }

  .footer_content ul li p:nth-child(2) {
    font-size: 0.22rem;
    color: #FFFFFF;
  }

  .code {
    width: 3.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .code img {
    width: 2.3rem;
    height: 2.3rem;
  }

  .code p:nth-child(2), .code p:nth-child(3) {
    font-size: 0.22rem;
    color: #FFFFFF;
  }

  .code p:nth-child(2) {
    margin: 0.38rem 0 0.19rem;
  }

  .address {
    font-size: 0.22rem;
    color: #FFFFFF;
    margin-top: 0.87rem;
  }

  .address p {
    padding-left: 0.3rem;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0.22rem;
  }

  .address p:nth-child(2) {
    margin-bottom: 0;
  }

  .address p::after {
    content: "";
    position: absolute;
    left: 0;
    width: 0.2rem;
    height: 0.2rem;
    background: url("../../assets/mobileImg/dizhi.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
