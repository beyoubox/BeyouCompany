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
              <p class="technology">{{lang.home.project1[$store.getters.langKey]}}</p>
            </div>
            <div class="btn">{{ lang.home.projectDetail[$store.getters.langKey] }}</div>
          </li>
          <li>
            <div class="grid">
              <div class="image">
                <img src="../../assets/img/rengong.png" alt="">
              </div>
              <p class="technology">{{lang.home.project2[$store.getters.langKey]}}</p>
            </div>
            <div class="btn">{{ lang.home.projectDetail[$store.getters.langKey] }}</div>
          </li>
          <li>
            <div class="grid">
              <div class="image">
                <img src="../../assets/img/zhihuiyil.png" alt="">
              </div>
              <p class="technology">{{lang.home.project3[$store.getters.langKey]}}</p>
            </div>
            <div class="btn">{{ lang.home.projectDetail[$store.getters.langKey] }}</div>
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
                <p>{{lang.home.project1[$store.getters.langKey]}}</p>
                <a>{{lang.home.enter[$store.getters.langKey]}}</a>
              </div>
              <ul class="liangai_text animated fadeInRight" style="visibility: hidden;animation-name: none;">
                <li>
                  <p>{{lang.home.publicChainWallet[$store.getters.langKey]}}</p>
                  <p>{{lang.home.publicChainWalletDetail[$store.getters.langKey]}}</p>
                </li>
                <li>
                  <p>{{lang.home.publicChainValue[$store.getters.langKey]}}</p>
                  <p>{{lang.home.publicChainValueDetail[$store.getters.langKey]}}</p>
                </li>
                <li>
                  <p>{{lang.home.publicChainLayout[$store.getters.langKey]}}</p>
                  <p>{{lang.home.publicChainLayoutDetail[$store.getters.langKey]}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="qukuai">
            <div class="qukuai_content">
              <p class="qukuai_tit">{{lang.home.blockchainEmpowersEconomy[$store.getters.langKey]}}</p>
              <p class="qukuai_text">{{lang.home.blockchainEmpowersEconomyDetail[$store.getters.langKey]}}</p>
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
                  <p>{{lang.home.projectInspectionPackaging[$store.getters.langKey]}}</p>
                  <p>{{lang.home.projectDevelopmentCompliance[$store.getters.langKey]}}</p>
                  <p>{{lang.home.projectAnnouncementFinancing[$store.getters.langKey]}}</p>
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
                <p>{{lang.home.project2[$store.getters.langKey]}}</p>
                <a>{{lang.home.enter[$store.getters.langKey]}}</a>
              </div>
              <ul class="liangai_text animated fadeInRight" style="visibility: hidden;animation-name: none;">
                <li>
                  <p>{{lang.home.mediaAnnouncement[$store.getters.langKey]}}</p>
                  <p>{{lang.home.mediaAnnouncementDetail[$store.getters.langKey]}}</p>
                </li>
                <li>
                  <p>{{lang.home.technologyDevelopment[$store.getters.langKey]}}</p>
                  <p>{{lang.home.technologyDevelopmentDetail[$store.getters.langKey]}}</p>
                </li>
                <li>
                  <p>{{lang.home.communityDocking[$store.getters.langKey]}}</p>
                  <p>{{lang.home.communityDockingDetail[$store.getters.langKey]}}</p>
                </li>
                <li>
                  <p>{{lang.home.projectOversea[$store.getters.langKey]}}</p>
                  <p>{{lang.home.projectOverseaDetail[$store.getters.langKey]}}</p>
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
                <p class="dapps_tit">{{lang.home.app1[$store.getters.langKey]}}</p>
                <p class="dapps_text">{{lang.home.app1Detail[$store.getters.langKey]}}</p>
                <div class="dapps_state_box">
                  <router-link tag="a" to="/specification" class="dapps_state" href="javascript:void(0)">
                    {{lang.home.appDoc[$store.getters.langKey]}}
                  </router-link>
                </div>
              </li>
              <li>
                <div class="dapps_img">
                  <img src="../../assets/img/suyuan.png" alt="">
                </div>
                <p class="dapps_tit">{{lang.home.app2[$store.getters.langKey]}}</p>
                <p class="dapps_text">{{lang.home.app2Detail[$store.getters.langKey]}}</p>
                <div class="dapps_state_box">
                  <router-link tag="a" to="/roots" class="dapps_state" href="javascript:void(0)">
                    {{lang.home.appDoc[$store.getters.langKey]}}
                  </router-link>
                </div>
              </li>
              <li>
                <div class="dapps_img">
                  <img src="../../assets/img/youxi.png" alt="">
                </div>
                <p class="dapps_tit">{{lang.home.app3[$store.getters.langKey]}}</p>
                <p class="dapps_text">{{lang.home.app3Detail[$store.getters.langKey]}}</p>
                <div class="dapps_state_box"><a class="dapps_state" href="javascript:void(0)">{{lang.home.appDoc[$store.getters.langKey]}}</a>
                </div>
              </li>
              <li>
                <div class="dapps_img">
                  <img src="../../assets/img/qiye.png" alt="">
                </div>
                <p class="dapps_tit">{{lang.home.app4[$store.getters.langKey]}}</p>
                <p class="dapps_text">{{lang.home.app4Detail[$store.getters.langKey]}}</p>
                <div class="dapps_state_box"><a class="dapps_state" href="javascript:void(0)">{{lang.home.appDoc[$store.getters.langKey]}}</a>
                </div>
              </li>
              <li>
                <div class="dapps_img">
                  <img src="../../assets/img/ipfs.png" alt="">
                </div>
                <p class="dapps_tit">{{lang.home.app5[$store.getters.langKey]}}</p>
                <p class="dapps_text">{{lang.home.app5Detail[$store.getters.langKey]}}</p>
                <div class="dapps_state_box"><a class="dapps_state" href="javascript:void(0)">{{lang.home.appDoc[$store.getters.langKey]}}</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <!-- <section class="course">-->
        <!--          <div class="title">-->
        <!--            <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain Course</p>-->
        <!--          </div>-->
        <!--          <div class="course_content animated zoomIn" style="visibility: hidden;animation-name: none;">-->
        <!--            <div class="course_wrap_top">-->
        <!--              <div></div>-->
        <!--              <div>-->
        <!--                <p class="course_time">2018.9</p>-->
        <!--                <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>-->
        <!--              </div>-->
        <!--              <div></div>-->
        <!--              <div>-->
        <!--                <p class="course_time">2018.9</p>-->
        <!--                <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>-->
        <!--              </div>-->
        <!--              <div></div>-->
        <!--            </div>-->
        <!--            <img class="course_img" src="../../assets/img/licheng.png" alt="">-->
        <!--            <div class="course_wrap_bottom">-->
        <!--              <div>-->
        <!--                <p class="course_time">2018.9</p>-->
        <!--                <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>-->
        <!--              </div>-->
        <!--              <div></div>-->
        <!--              <div>-->
        <!--                <p class="course_time">2018.9</p>-->
        <!--                <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>-->
        <!--              </div>-->
        <!--              <div></div>-->
        <!--              <div>-->
        <!--                <p class="course_time">2018.9</p>-->
        <!--                <p class="course_text">Merchain(莫嗔科技)以创造价值为目标，以“</p>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </section>-->

        <section class="merchain_news">
          <div class="title">
            <p class="tit animated flipInX" style="visibility: hidden;animation-name: none;">Merchain News</p>
          </div>
          <div class="news_swiper">
            <swiper :options="swiperNews">
              <swiper-slide>
                <div class="swiper_content">
                  <img class="slide_img" src="../../assets/img/shiyans.png" alt="">
                  <p class="slide_tit">{{lang.home.news1[$store.getters.langKey]}}</p>
                  <p class="slide_text">
                    {{lang.home.news1Detail[$store.getters.langKey]}}</p>
                  <div class="slide_state_box"><a class="slide_state" href="javascript:void(0)">{{lang.home.projectDetail[$store.getters.langKey]}}</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper_content">
                  <img class="slide_img" src="../../assets/img/qukliant.png" alt="">
                  <p class="slide_tit">{{lang.home.news2[$store.getters.langKey]}}</p>
                  <p class="slide_text">
                    {{lang.home.news2Detail[$store.getters.langKey]}}</p>
                  <div class="slide_state_box"><a class="slide_state" href="javascript:void(0)">{{lang.home.projectDetail[$store.getters.langKey]}}</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper_content">
                  <img class="slide_img" src="../../assets/img/zhihuics.png" alt="">
                  <p class="slide_tit">{{lang.home.news3[$store.getters.langKey]}}</p>
                  <p class="slide_text">
                    {{lang.home.news3Detail[$store.getters.langKey]}}</p>
                  <div class="slide_state_box"><a class="slide_state" href="javascript:void(0)">{{lang.home.projectDetail[$store.getters.langKey]}}</a>
                  </div>
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
            <p class="footer_tit">{{lang.footer.contactUs[$store.getters.langKey]}}</p>
            <p class="footer_text">{{lang.footer.contactUsText[$store.getters.langKey]}}</p>
            <ul class="details">
              <li>
                <p>{{lang.footer.phone[$store.getters.langKey]}}</p>
              </li>
              <li>
                <p>{{lang.footer.businessEmail[$store.getters.langKey]}}</p>
                <p>{{lang.footer.recruitmentEmail[$store.getters.langKey]}}</p>
              </li>
              <li>
                <p>{{lang.footer.address[$store.getters.langKey]}}</p>
                <p>{{lang.footer.branchAddress[$store.getters.langKey]}}</p>
              </li>
            </ul>
          </div>
          <div class="footer_content_right">
            <img src="../../assets/img/code.png" alt="">
            <p>{{lang.footer.scan[$store.getters.langKey]}}</p>
            <p>{{lang.footer.weChat[$store.getters.langKey]}}</p>
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
    import {Lang} from "../../../static/i18n";

    export default {
        name: "Home",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                lang: Lang,
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
