<template>
  <article class="home">
    <div>
      <section class="home_swiper">
        <swiper :options="swiperOption">
          <swiper-slide class="photo" v-for="(item,index) in swiperSlides" :key="index">
            <img class="photo_img" :src='item.background'>
            <div class="photo_content">
              <div class="photo_left">
                <p>{{ item.title }}</p>
                <p>{{ item.text }}</p>
                <div>{{ item.button }}</div>
              </div>
              <div class="photo_right">
                <img :src="item.img" alt="banner">
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <section class="project_show">
        <div class="title">
          <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain Products</p>
        </div>
        <ul class="project">
          <li>
            <div class="grid">
              <div class="image">
                <img src="../../assets/img/yiliao.png" alt="">
              </div>
              <p class="technology">生态公链</p>
              <p class="use">以科创板为目标，潜心技术应用</p>
            </div>
            <div class="btn">项目详情</div>
          </li>
          <li>
            <div class="grid">
              <div class="image">
                <img src="../../assets/img/rengong.png" alt="">
              </div>
              <p class="technology">链改吧</p>
              <p class="use">媒体宣发通道，公众号&论坛</p>
            </div>
            <div class="btn">项目详情</div>
          </li>
          <li>
            <div class="grid">
              <div class="image">
                <img src="../../assets/img/zhihuiyil.png" alt="">
              </div>
              <p class="technology">企业服务</p>
              <p class="use">赋能实体经济</p>
            </div>
            <div class="btn">项目详情</div>
          </li>
        </ul>
      </section>
      <section class="content_box">
        <section class="business">
          <div class="title">
            <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain Business</p>
          </div>
          <div class="liangai">
            <div class="liangai_img animated fadeInDown" style="visibility: hidden;animation-name: none;">
              <img src="../../assets/img/liangai.png" alt="">
            </div>
            <div class="liangai_content">
              <div class="liangai_tit">
                <p>生态公链</p>
                <a>点击进入</a>
              </div>
              <ul class="liangai_text animated fadeInRight" style="visibility: hidden;animation-name: none;">
                <li>
                  <p>公链价值</p>
                  <p>公链在整个区块链领域是非常重要的——底层公链相当于区块链世界的基础设施，解决方案用来拓展底层公链的性能或为商业应用提供服务支撑。只有在底层公链扎实稳健高效运转的基础上，区块链商业应用才能发展和落地。</p>
                </li>
                <li>
                  <p>自主公链</p>
                  <p>Merchain(莫嗔科技)以强大的技术团队不断进行底层公链的研发和功能的优化，将不断提高公链的各方面能力，不受其他任何链的限制，营造一个自由平等的链世界。</p>
                </li>
                <li>
                  <p>生态布局</p>
                  <p>Merchain(莫嗔科技)从应用生态、多链钱包、金融生态、稳定币四个部分出发，基于自己的底层公链不断研发完善高层服务，提高公链价值，同时开放各领域的接入接口，从各方面MC生态。</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="qukuai">
            <div class="qukuai_content">
              <p class="qukuai_tit">区块链赋能实体经济</p>
              <p class="qukuai_text">
                Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
              <div class="qukuai_process_box animated fadeInLeft" style="visibility: hidden;animation-name: none;">
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
                  <p>项目考察、项目包装</p>
                  <p>项目开发、项目合规</p>
                  <p>项目宣发、项目融资</p>
                </div>
              </div>
            </div>
            <div class="qukuai_img animated fadeInDown" style="visibility: hidden;animation-name: none;">
              <img src="../../assets/img/qukuai.png" alt="">
            </div>
          </div>
          <div class="liangai">
            <div class="liangai_img animated fadeInDown" style="visibility: hidden;animation-name: none;">
              <img src="../../assets/img/liangai.png" alt="">
            </div>
            <div class="liangai_content">
              <div class="liangai_tit">
                <p>链改吧形成品牌效应</p>
                <a>点击进入</a>
              </div>
              <ul class="liangai_text animated fadeInRight" style="visibility: hidden;animation-name: none;">
                <li>
                  <p>项目出海</p>
                  <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
                </li>
                <li>
                  <p>STO对接</p>
                  <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
                </li>
                <li>
                  <p>区块链高校社区群</p>
                  <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
                </li>
                <li>
                  <p>链改吧公众号+论坛</p>
                  <p>Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="dapps">
          <div class="title">
            <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain Dapps</p>
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
                  <router-link tag="a" to="/specification" class="dapps_state" href="javascript:void(0)">产品说明书
                  </router-link>
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
          <div class="course_content animated zoomIn" style="visibility: hidden;animation-name: none;">
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
        </section>
        <section class="merchain_news">
          <div class="title">
            <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain News</p>
          </div>
          <div class="news_swiper">
            <swiper :options="swiperNews">
              <swiper-slide>
                <div class="swiper_content">
                  <img class="slide_img" src="../../assets/img/shiyans.png" alt="">
                  <p class="slide_tit">区块链的未来已来，加入我们使它分布得更均匀</p>
                  <p class="slide_text">
                    Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
                  <div class="slide_state_box"><a class="slide_state" href="javascript:void(0)">查看详情</a></div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper_content">
                  <img class="slide_img" src="../../assets/img/qukliant.png" alt="">
                  <p class="slide_tit">区块链的未来已来，加入我们使它分布得更均匀</p>
                  <p class="slide_text">
                    Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
                  <div class="slide_state_box"><a class="slide_state" href="javascript:void(0)">查看详情</a></div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper_content">
                  <img class="slide_img" src="../../assets/img/zhihuics.png" alt="">
                  <p class="slide_tit">区块链的未来已来，加入我们使它分布得更均匀</p>
                  <p class="slide_text">
                    Merchain(莫嗔科技)以创造价值为目标，以“产-学-研”结合赋能实体经济为愿景，提供活动策划、商务咨询、技术服务，让区块链技术落地各垂直领域，回归科技创新服务实体经济的本质。</p>
                  <div class="slide_state_box"><a class="slide_state" href="javascript:void(0)">查看详情</a></div>
                </div>
              </swiper-slide>
              <div class="swiper-newspage" style="display:flex;justify-content:center;" slot="pagination"></div>
            </swiper>
          </div>
        </section>
      </section>
      <footer class="footer">
        <div class="footer_content">
          <div class="footer_content_left">
            <p class="footer_tit">联系我们</p>
            <p class="footer_text">共筑区块链发展基石，共建区块链命运共同体</p>
            <ul class="details">
              <li>
                <p>联系电话：18018592068</p>
              </li>
              <li>
                <p>商务邮箱：bd@merchain.cn</p>
                <p>招聘邮箱：hr@merchain.cn</p>
              </li>
              <li>
                <p>总公司地址：上海市杨浦区铁岭路123号</p>
                <p>加拿大分部：450 Southwest Marine Drive Vancouver BC V5X 4V2</p>
              </li>
            </ul>
          </div>
          <div class="footer_content_right">
            <img src="../../assets/img/code.png" alt="">
            <p>扫一扫关注莫嗔科技旗下品牌</p>
            <p>【链改吧】官方微信公众号</p>
          </div>
        </div>
      </footer>
    </div>
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
                slide: "",
                swiperSlides: [
                    {
                        title: "Start Your Business With Our Services",
                        text: "This should be used to tell us your story and let us know a little more about your demands.  How can we benefit you ?",
                        button: "CALL TO ACTION",
                        img: require('../../assets/img/banner_one.png'),
                        background: require('../../assets/img/banner_ba.png')
                    }, {
                        title: "Start Your Business With Our Services",
                        text: "This should be used to tell us your story and let us know a little more about your demands.  How can we benefit you ?",
                        button: "CALL TO ACTION",
                        img: require('../../assets/img/banner_one.png'),
                        background: require('../../assets/img/banner_ba.png')
                    }
                ],
                // swiperSlides:[require('../../assets/img/banner_ba.png'),require('../../assets/img/banner_ba.png'),require('../../assets/img/banner.png')],
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
                                paginationStyle = `background:${color};opacity:1;margin-right:0.08rem;margin-bottom:1.12rem;width:0.3rem;height:0.06rem;border-radius:0;`
                                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
                            }
                            return html
                        }
                    },
                    // mousewheel: true,
                    grabCursor: true,
                    autoplay: {
                        delay: 8000,
                        disableOnInteraction: false
                    },
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
                },
                swiperNews: {
                    pagination: {
                        el: '.swiper-newspage',
                        clickable: true,
                        type: 'custom',
                        //自定义分页器样式
                        renderCustom: function (swiper, current, total) {
                            const activeColor = '#241976'
                            const normalColor = 'rgba(36,25,118,0.5);'
                            let color = ''
                            let paginationStyle = ''
                            let html = ''
                            for (let i = 1; i <= total; i++) {
                                if (i === current) {
                                    color = activeColor
                                } else {
                                    color = normalColor
                                }
                                paginationStyle = `background:${color};opacity:1;margin-right:0.08rem;margin-bottom:1.5%;width:0.3rem;height:0.06rem;border-radius:0;`
                                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
                            }
                            return html
                        }
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    loop: true,
                    slidesPerView: 3,
                    // freeMode: true,
                }
            }
        },
        methods: {
            showIcon() {
                let animated = document.querySelectorAll(".animated");
                let a = document.querySelector('.project_show').offsetTop;
                let b = document.querySelector('.merchain_news').offsetTop;
                // console.log(document.documentElement.scrollTop)
                window.onscroll = function () { //绑定scroll事件
                    let t = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset; //获取滚动距离

                    if (t >= a + animated[0].offsetTop - Number(`${document.documentElement.clientHeight}`) && t <= a + animated[0].offsetTop + animated[0].offsetHeight) {
                        animated[0].style = "visibility: visible;animation-duration: 1.4s; animation-delay: 0.2s;"
                    }
                    for (let i = 1; i < animated.length - 1; i++) {
                        if (t >= animated[i].offsetTop - Number(`${document.documentElement.clientHeight}`) && t <= animated[i].offsetTop + animated[i].offsetHeight) {
                            animated[i].style = "visibility: visible;animation-duration: 1.4s; animation-delay: 0.2s;"
                        }
                    }
                    if (t >= b + animated[10].offsetTop - Number(`${document.documentElement.clientHeight}`) && t <= b + animated[10].offsetTop + animated[10].offsetHeight) {
                        animated[10].style = "visibility: visible;animation-duration: 1.4s; animation-delay: 0.2s;"
                    }
                }
            }
        },
        mounted() {
            let animated = document.querySelectorAll(".animated");

            let s = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            let a = document.querySelector('.project_show').offsetTop;
            let b = document.querySelector('.merchain_news').offsetTop;
            if (s >= a + animated[0].offsetTop - Number(`${document.documentElement.clientHeight}`) && s <= a + animated[0].offsetTop + animated[0].offsetHeight) {
                animated[0].style = "visibility: visible;animation-duration: 1.4s; animation-delay: 0.2s;"
            }
            for (let i = 1; i < animated.length - 1; i++) {
                if (s >= animated[i].offsetTop - Number(`${document.documentElement.clientHeight}`) && s <= animated[i].offsetTop + animated[i].offsetHeight) {
                    animated[i].style = "visibility: visible;animation-duration: 1.4s; animation-delay: 0.2s;"
                }
            }
            if (s >= b + animated[10].offsetTop - Number(`${document.documentElement.clientHeight}`) && s <= b + animated[10].offsetTop + animated[10].offsetHeight) {
                animated[10].style = "visibility: visible;animation-duration: 1.4s; animation-delay: 0.2s;"
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
    width: 100%;
  }

  .home_swiper {
    width: 100%;
  }

  .home_swiper img {
    vertical-align: top;
  }

  .photo {
    position: relative;
  }

  .photo_img {
    width: 19.2rem;
    height: 10rem;
  }

  .photo_content {
    width: 14rem;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 2.51rem auto 0;
    display: flex;
    justify-content: space-around;
    color: #FFFFFF;
  }

  .photo_left {
    width: 4.82rem;
    /* padding-left: 5.8%; */
    padding-top: 1.07rem;
  }

  .photo_left p:nth-child(1) {
    font-size: 0.5rem;
    font-weight: Bold;
    line-height: 0.65rem;
  }

  .photo_left p:nth-child(2) {
    font-size: 0.16rem;
    line-height: 0.30rem;
    margin: 0.3rem 0 0.66rem;
  }

  .photo_left div:nth-child(3) {
    /* outline: none; */
    padding: 0;
    text-align: center;
    border: 0;
    width: 2.8rem;
    height: 0.7rem;
    line-height: 0.7rem;
    /* font-weight: Bold; */
    font-size: 0.2rem;
    color: #FFFFFF;
    margin: 0;
    background: linear-gradient(45deg, rgba(93, 22, 216, 1), rgba(48, 235, 242, 1));
    border-radius: 0.03rem;
  }

  .photo_right {
    width: 5.68rem;
    /* padding-right: 5.8%; */
  }

  .photo_right img {
    width: 100%;
    vertical-align: top;
  }

  .photo_right img {
    transform: translateX(2rem);
    opacity: 0;
  }

  .photo_left {
    transform: translateX(-2rem);
    opacity: 0;
  }

  .ani-slide .photo_left {
    transform: translateX(0);
    opacity: 1;
    transition: 2.4s all cubic-bezier(.12, .24, .28, 1.01) 0.1s;
  }

  .ani-slide .photo_right img {
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
    background: #FFFFFF;
    width: 14rem;
    position: relative;
    z-index: 10;
    padding-top: 0.6rem;
    margin: -1.2rem auto 0;
    box-shadow: 0px 23px 40px 0px rgba(34, 34, 34, 0.05);
    border-radius: 0.04rem;
  }

  .title {
    display: flex;
    justify-content: center;
    /* padding-bottom: 3.08%; */
  }

  .tit {
    position: relative;
    font-size: 0.3rem;
    line-height: 0.3rem;
    height: 0.3rem;
    font-weight: bold;
    /* display: flex;
    align-items:center; */
  }

  .tit::before {
    content: "";
    position: absolute;
    width: 0.20rem;
    height: 0.04rem;
    background: #222222;
    left: -0.4rem;
    top: 50%;
    margin-top: -0.02rem;
  }

  .tit::after {
    content: "";
    position: absolute;
    width: 0.20rem;
    height: 0.04rem;
    background: #222222;
    right: -0.4rem;
    top: 50%;
    margin-top: -0.02rem;
  }

  .project {
    display: flex;
    padding-top: 0.43rem;
  }

  .project li {
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .project li .grid {
    height: 2rem;
    border-right: 1px solid #E0E0E0;
  }

  .project li:nth-last-child(1) .grid {
    border-right: none;
  }

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
    font-size: 0.20rem;
    margin: 0.23rem 0 0.21rem;
  }

  .use {
    color: #999999;
    font-size: 0.16rem;
  }

  .btn {
    cursor: pointer;
    display: flex;
    padding: 0.04rem 0.16rem;
    /* width:1rem;
    height:0.30rem; */
    /* text-align: center; */
    /* line-height: 0.26rem; */
    margin: 0.54rem auto 0.3rem;
    /* color: #190E5D; */
    line-height: 0.20rem;
    color: #BCBCBC;
    box-sizing: border-box;
    border: 1px solid #BCBCBC;
    border-radius: 0.16rem;
    font-size: 0.16rem;
    justify-content: center;
    align-items: center;
  }

  .content_box {
    width: 100%;
    overflow: hidden;
  }

  .dapps, .business, .course {
    width: 14rem;
    padding: 1.5rem 0 0;
    margin: 0 auto;
  }

  .qukuai {
    display: flex;
    justify-content: space-between;
    padding-top: 0.43rem;
  }

  .qukuai_content {
    padding: 0 0 0 0.45rem;
    width: 6.2rem;
  }

  .qukuai_tit {
    font-size: 0.32rem;
    font-weight: Bold;
    line-height: 0.32rem;
    margin: 0.77rem 0 0.31rem;
    color: #333333;
  }

  .qukuai_img {
    width: 4.07rem;
    height: 4.30rem;
  }

  .qukuai_img img {
    width: 100%;
    height: 100%;
    /* min-height: 430.11px; */
    vertical-align: top;
  }

  .qukuai_text {
    color: #999999;
    font-size: 0.18rem;
    line-height: 0.32rem;
  }

  .qukuai_process_box {
    padding-top: 0.65rem;
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
    color: #999999;
    text-align: center;
    flex-grow: 1;
    margin-top: 0.3rem;
  }

  .liangai {
    display: flex;
    margin-top: 1.63rem;
  }

  .liangai_content {
    width: 8.54rem;
    margin-left: 0.65rem;
    padding-top: 0.2rem;
    /* overflow: hidden; */
  }

  .liangai_text {
    display: flex;
    justify-content: space-between;
    margin-top: 0.67rem;
  }

  .liangai_text li {
    width: 1.8rem;
  }

  .liangai_text li p:nth-child(1) {
    font-weight: Bold;
    font-size: 0.18rem;
    line-height: 0.24rem;
    color: #333333;
    margin-bottom: 0.37rem;
    white-space: nowrap
  }

  .liangai_text li p:nth-child(2) {
    font-size: 0.18rem;
    color: #999999;
    line-height: 0.32rem;
  }

  .liangai_img {
    width: 4.32rem;
    height: 4.36rem;
  }

  .liangai_img img {
    width: 4.32rem;
    height: 4.36rem;
    /* min-height: 436.03px; */
    vertical-align: top;
  }

  .liangai_tit {
    display: flex;
    align-items: center;
  }

  .liangai_tit p:nth-child(1) {
    font-size: 0.3rem;
    font-weight: Bold;
    color: #222222;
    line-height: 0.3rem;
  }

  .liangai_tit a:nth-child(2) {
    font-size: 0.16rem;
    font-weight: Bold;
    color: #333333;
    margin-left: 0.56rem;
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 0.16rem;
    cursor: pointer;
  }

  .liangai_tit a:nth-child(2):hover, .dapps_state_box a:hover {
    color: #190E5D;
  }

  .liangai_tit a:nth-child(2)::after, .dapps_state_box a::after {
    content: "";
    position: absolute;
    width: 0.06rem;
    height: 0.12rem;
    background: url("../../assets/img/qukuai_right.png") no-repeat;
    background-size: 100%;
    right: 0px;
  }

  .liangai_tit a:nth-child(2):hover::after, .dapps_state_box a:hover::after {
    background: url("../../assets/img/lanjiantou.png") no-repeat;
    background-size: 100%;
  }

  .dapps_box {
    /* overflow: hidden; */
  }

  .dapps_content {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    position: relative;
  }

  .dapps_content li {
    width: 2.36rem;
    padding: 0.21rem 0.46rem 0.76rem;
    box-sizing: border-box;
    background-color: #FFFFFF;
    box-shadow: 0px 23px 40px 0px rgba(34, 34, 34, 0.05);
    /* box-shadow:0px 65px 40px 0px rgba(34,34,34,0.05); */
    border-radius: 0.10rem;
    position: relative;
    top: 0;
    transition: 0.2s all linear;
  }

  .dapps_content li:hover {
    box-shadow: 0px 0.45rem 40px 0px rgba(34, 34, 34, 0.1);
    top: -0.22rem;
    transition: 0.2s all linear;
  }

  /* .dapps_content li:nth-child(1){
      box-shadow:0px 65px 40px 0px rgba(34,34,34,0.1);
  } */
  .dapps_img {
    /* padding: 9.81% 0; */
    display: flex;
    justify-content: center;
    margin-bottom: 0.24rem;
  }

  .dapps_img img {
    vertical-align: top;
    width: 0.8rem;
    height: 0.8rem;
  }

  .dapps_tit {
    text-align: center;
    font-weight: Bold;
    color: #333333;
    font-size: 0.18rem;
    margin-bottom: 0.2rem;
  }

  .dapps_text {
    color: #999999;
    font-size: 0.16rem;
    line-height: 0.3rem;
    word-break: break-all;
    /* white-space:pre-wrap;  */
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
    padding: 0.24rem 0 0.29rem;
  }

  .dapps_state_box a {
    color: #333333;
    font-size: 0.16rem;
    padding-right: 0.17rem;
    position: relative;
    display: flex;
    align-items: center;
  }

  .course_content {
    padding-top: 1.2rem;
  }

  .course_img {
    width: 100%;
    height: 2.7rem;
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

  .merchain_news {
    background: #FFFFFF;
    width: 14rem;
    position: relative;
    z-index: 10;
    padding-top: 0.6rem;
    margin: 1.51rem auto 0;
    box-shadow: 0px -2px 40px 0px rgba(34, 34, 34, 0.05);
    border-radius: 0.04rem;
  }

  .news_swiper {
    margin-top: 0.58rem;
  }

  .swiper_content {
    width: 3.4rem;
    height: 100%;
    margin: 0 auto;
  }

  .slide_img {
    width: 3.4rem;
    height: 2.06rem;
    /* min-height: 206.39px; */
    vertical-align: top;
  }

  .slide_tit {
    width: 2.07rem;
    font-size: 0.16rem;
    line-height: 0.24rem;
    margin-top: 0.27rem;
    margin-left: 0.2rem;
    font-weight: Bold;
  }

  .slide_text {
    width: 2.9rem;
    color: #999999;
    font-size: 0.14rem;
    margin-left: 0.2rem;
    line-height: 0.24rem;
    margin-top: 0.09rem;
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden; */
  }

  .slide_state_box {
    height: 1rem;
    position: relative;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
  }

  .slide_state_box a {
    font-size: 0.16rem;
    line-height: 0.24rem;
    color: #190E5D;
    padding-right: 0.16rem;
    position: relative;
    display: flex;
    align-items: center;
  }

  .slide_state_box a::after {
    content: "";
    position: absolute;
    width: 0.06rem;
    height: 0.12rem;
    background: url("../../assets/img/lanjiantou.png") no-repeat;
    background-size: 100%;
    right: 0px;
  }

  .footer {
    width: 100%;
    background: url("../../assets/img/footer.png") no-repeat;
    background-size: 100% 100%;
    margin-top: -0.88rem;
  }

  .footer_content {
    width: 14rem;
    margin: 0 auto;
    padding: 1.83rem 0 1rem;
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
  }

  .footer_tit {
    font-size: 0.24rem;
    line-height: 0.26rem;
    font-weight: Bold;
  }

  .footer_text {
    font-size: 0.24rem;
    line-height: 0.26rem;
    margin-top: 0.25rem;
    font-weight: lighter;
  }

  .details {
    margin-top: 0.6rem;
    /* padding: 0 0 20px; */
  }

  .details li {
    margin-bottom: 0.29rem;
    min-height: 0.32rem;
    padding-left: 0.52rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: lighter;
  }

  .details li p {
    font-size: 0.16rem;
    line-height: 0.24rem;
    white-space: nowrap;
  }

  .details li:nth-last-child(1) {
    margin: 0;
  }

  .details li:nth-child(1)::before {
    content: "";
    width: 0.32rem;
    height: 0.32rem;
    background: url("../../assets/img/phone.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
  }

  .details li:nth-child(2)::before {
    content: "";
    width: 0.32rem;
    height: 0.32rem;
    background: url("../../assets/img/email.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
  }

  .details li:nth-child(3)::before {
    content: "";
    width: 0.32rem;
    height: 0.32rem;
    background: url("../../assets/img/address.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
  }

  .footer_content_right {
    padding-top: 0.37rem;
    font-weight: lighter;
  }

  .footer_content_right img:nth-child(1) {
    vertical-align: top;
    width: 1.88rem;
    height: 1.88rem;
  }

  .footer_content_right p:nth-child(2) {
    font-size: 0.16rem;
    line-height: 0.24rem;
    margin: 0.2rem 0 0.09rem;
  }

  .footer_content_right p:nth-child(3) {
    font-size: 0.16rem;
    line-height: 0.24rem;
  }


</style>
