<template>
  <article>
    <section class="header_box">
      <div class="header">
        <img src="../../assets/img/chain.png" alt="">
      </div>
    </section>
    <section class="specification">
      <div class="title">
        <p class="tit">{{lang.chain.chainValue[$store.getters.langKey]}}</p>
      </div>
      <p class="tit_son">{{lang.chain.chainValueSub[$store.getters.langKey]}}</p>
      <p class="tit_text">{{lang.chain.chainValueDetail[$store.getters.langKey]}}</p>
    </section>
    <section class="content">
      <div class="build">
        <div class="build_text">
          <p>{{lang.chain.feature1[$store.getters.langKey]}}</p>
          <p>{{lang.chain.feature1Detail1[$store.getters.langKey]}}</p>
          <p>{{lang.chain.feature1Detail2[$store.getters.langKey]}}</p>
        </div>
        <div class="build_img">
          <img src="../../assets/img/square1.png" alt="">
        </div>
      </div>
      <div class="cooperation">
        <img src="../../assets/img/square2.png" alt="">
        <div class="cooperation_text">
          <p>{{lang.chain.feature2[$store.getters.langKey]}}</p>
          <p>{{lang.chain.feature2Detail1[$store.getters.langKey]}}</p>
          <p>{{lang.chain.feature2Detail2[$store.getters.langKey]}}</p>
          <p>{{lang.chain.feature2Detail3[$store.getters.langKey]}}</p>
        </div>
      </div>
      <div class="top_up">
        <div class="top_up_text">
          <p>{{lang.chain.financialEcology[$store.getters.langKey]}}</p>
          <p>{{lang.chain.financialEcologyDetail[$store.getters.langKey]}}</p>
        </div>
        <img src="../../assets/img/square3.jpg" alt="">
      </div>
      <div class="withdrawal">
        <img src="../../assets/img/square4.png" alt="">
        <div class="withdrawal_text">
          <p>{{lang.chain.stablecoin[$store.getters.langKey]}}</p>
          <p>{{lang.chain.stablecoinDetail[$store.getters.langKey]}}</p>
        </div>
      </div>
      <div class="process">
        <div class="title">
          <p class="tit">{{lang.chain.circulationRoute[$store.getters.langKey]}}</p>
        </div>
        <p class="tit_son">{{lang.chain.circulationRouteSub[$store.getters.langKey]}}</p>
        <img style="margin-left: 70px" src="../../assets/img/closedloop.png" alt="">
      </div>
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
  </article>
</template>
<script>
    import {Lang} from "../../../static/i18n";

    export default {
        name: "Chain",
        data() {
            return {
                lang: Lang
            }
        }
    }
</script>
<style scoped>
  .header_box {
    width: 100%;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .header img {
    width: 19.2rem;
    height: 6.80rem;
    vertical-align: top;
  }

  .specification {
    width: 14rem;
    margin: 0.6rem auto 0;
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
    /* display: flex;
    align-items:center; */
  }

  .tit::before {
    content: "";
    position: absolute;
    width: 0.2rem;
    height: 0.04rem;
    background: #222222;
    left: -0.4rem;
    top: 50%;
    margin-top: -0.02rem;
  }

  .tit::after {
    content: "";
    position: absolute;
    width: 0.2rem;
    height: 0.04rem;
    background: #222222;
    right: -0.4rem;
    top: 50%;
    margin-top: -0.02rem;
  }

  .tit_son {
    margin-top: 0.2rem;
    color: #999999;
    font-size: 0.18rem;
    text-align: center;
  }

  .tit_text {
    font-size: 0.24rem;
    color: #333333;
    text-align: center;
    line-height: 0.36rem;
    width: 7.67rem;
    margin: 0.74rem auto 0;
  }

  .content {
    width: 14rem;
    margin: 1.88rem auto 0;
  }

  .build, .cooperation, .top_up, .withdrawal {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .top_up {
    margin-top: 0.72rem;
  }

  .withdrawal {
    margin-top: 2.04rem;
    margin-bottom: 1.46rem;
  }

  .build_text {
    padding-top: 0.82rem;
    width: 5.69rem;
    /* padding-left: 6%; */
  }

  .cooperation_text {
    padding-top: 1.4rem;
    width: 5.69rem;
  }

  .top_up_text {
    padding-top: 0.82rem;
    width: 5.69rem;
    /* padding-left: 5%; */
  }

  .withdrawal_text {
    padding-top: 0.74rem;
    width: 5.69rem;
  }


  .build_text p:nth-child(1), .cooperation_text p:nth-child(1), .top_up_text p:nth-child(1), .withdrawal_text p:nth-child(1) {
    font-size: 0.18rem;
    line-height: 0.30rem;
    color: #333333;
    font-weight: Bold;
    margin-bottom: 0.10rem;
  }

  .build_text p:nth-child(2), .build_text p:nth-child(3), .build_text p:nth-child(4), .cooperation_text p:nth-child(2), .cooperation_text p:nth-child(3), .cooperation_text p:nth-child(4), .top_up_text p:nth-child(2), .top_up_text p:nth-child(3), .top_up_text p:nth-child(4), .top_up_text p:nth-child(5), .top_up_text p:nth-child(6), .top_up_text p:nth-child(7), .withdrawal_text p:nth-child(2), .withdrawal_text p:nth-child(3), .withdrawal_text p:nth-child(4), .withdrawal_text p:nth-child(5), .withdrawal_text p:nth-child(6), .withdrawal_text p:nth-child(7) {
    font-size: 0.16rem;
    line-height: 0.30rem;
    color: #999999;
  }

  .build_img {
    width: 4.31rem;
    height: 2.91rem;
    padding: 0 0.52rem 0 0;
  }

  .cooperation_img {
    width: 3.62rem;
    height: 4.04rem;
    padding: 0 0 0 0.52rem;
  }

  .top_up_img {
    width: 3.82rem;
    height: 3.74rem;
    padding: 0 0.52rem 0 0;
  }

  .withdrawal_img {
    width: 3.2rem;
    height: 4.06rem;
    padding: 0 0 0 0.52rem;
  }

  .build_img img, .cooperation_img img, .top_up_img img, .withdrawal_img img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .process {
    width: 13.21rem;
    margin: 0.61rem auto 0.47rem;
  }

  .process img {
    width: 100%;
    height: 6.88rem;
    margin-top: 4.85%;
    vertical-align: top;
  }

  .footer {
    width: 100%;
    background: url("../../assets/img/footer.png") no-repeat;
    background-size: 100% 100%;
    /* margin-top: -0.88rem; */
  }

  .footer_content {
    width: 14rem;
    margin: 0 auto;
    padding: 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
  }

  .footer_tit {
    font-size: 0.24rem;
    font-weight: Bold;
  }

  .footer_text {
    font-size: 0.24rem;
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
