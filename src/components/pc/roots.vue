<template>
  <article>
    <section class="header_box">
      <div class="header">
        <img src="../../assets/img/shuobanner.png" alt="">
      </div>
    </section>
    <section class="specification">
      <div class="title">
        <p class="tit">{{lang.roots.doc[$store.getters.langKey]}}</p>
      </div>
      <p class="tit_son">{{lang.roots.docSub[$store.getters.langKey]}}</p>
      <p class="tit_text">{{lang.roots.docDetail[$store.getters.langKey]}}</p>
    </section>
    <section class="content">
      <div class="traceability_process">
        <div class="traceability_process_text">
          <p>{{lang.roots.feature1[$store.getters.langKey]}}</p>
          <p>{{lang.roots.feature1Detail[$store.getters.langKey]}}</p>
        </div>
        <div class="traceability_process_img">
          <img src="../../assets/img/guocheng.png" alt="">
        </div>
      </div>
      <div class="equipment">
        <div class="equipment_img">
          <img src="../../assets/img/shebei.png" alt="">
        </div>
        <div class="equipment_text">
          <p>{{lang.roots.feature2[$store.getters.langKey]}}</p>
          <p>{{lang.roots.feature2Detail[$store.getters.langKey]}}</p>
        </div>
      </div>
      <div class="build">
        <div class="build_text">
          <p>{{lang.roots.feature3[$store.getters.langKey]}}</p>
          <p>{{lang.roots.feature3Detail[$store.getters.langKey]}}</p>
        </div>
        <div class="build_img">
          <img src="../../assets/img/gongjian.png" alt="">
        </div>
      </div>
      <div class="cooperation">
        <div class="cooperation_img">
          <img src="../../assets/img/cooperation.png" alt="">
        </div>
        <div class="cooperation_text">
          <p>{{lang.roots.advantage1[$store.getters.langKey]}}</p>
          <p>{{lang.roots.advantage1Detail[$store.getters.langKey]}}</p>
        </div>
      </div>
      <div class="top_up">
        <div class="top_up_text">
          <p>{{lang.roots.advantage2[$store.getters.langKey]}}</p>
          <p>{{lang.roots.advantage2Detail[$store.getters.langKey]}}</p>
        </div>
        <div class="top_up_img">
          <img src="../../assets/img/chongbi.png" alt="">
        </div>
      </div>
      <div class="withdrawal">
        <div class="withdrawal_img">
          <img src="../../assets/img/tibi.png" alt="">
        </div>
        <div class="withdrawal_text">
          <p>{{lang.roots.advantage3[$store.getters.langKey]}}</p>
          <p>{{lang.roots.advantage3Detail[$store.getters.langKey]}}</p>
        </div>
      </div>
      <div class="process">
        <div class="title">
          <p class="tit">{{lang.roots.circulationRoute[$store.getters.langKey]}}</p>
        </div>
        <p class="tit_son">{{lang.roots.circulationRouteSub[$store.getters.langKey]}}</p>
        <img src="../../assets/img/suyuanluxian.png" alt="">
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
        name: "Roots",
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
    /* padding-bottom: 3.08%; */
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
    width: 7.75rem;
    margin: 0.74rem auto 0;
  }

  .content {
    width: 14rem;
    margin: 1.88rem auto 0;
  }

  .traceability_process, .equipment, .build, .cooperation, .top_up, .withdrawal {
    display: flex;
    justify-content: space-around;
  }

  .top_up {
    margin-top: 1.24rem;
  }

  .build, .equipment {
    margin-top: 1.2rem;
  }

  .withdrawal, .cooperation {
    margin-top: 0.34rem;
  }

  .traceability_process_text {
    padding-top: 1.2rem;
    width: 5.27rem;
  }

  .build_text {
    padding-top: 1.08rem;
    width: 5.28rem;
    /* padding-left: 6%; */
  }

  .equipment_text {
    padding-top: 0.52rem;
    width: 5.28rem;
  }

  .cooperation_text {
    padding-top: 1.3rem;
    width: 6.08rem;
  }

  .top_up_text {
    padding-top: 0.82rem;
    width: 5.60rem;
    /* padding-left: 5%; */
  }

  .withdrawal_text {
    padding-top: 1.2rem;
    width: 5.6rem;
  }

  .traceability_process_text p:nth-child(1), .equipment_text p:nth-child(1), .build_text p:nth-child(1), .cooperation_text p:nth-child(1), .top_up_text p:nth-child(1), .withdrawal_text p:nth-child(1) {
    font-size: 0.18rem;
    line-height: 0.3rem;
    color: #333333;
    font-weight: Bold;
    margin-bottom: 0.1rem;
  }

  .traceability_process_text p:nth-child(2), .equipment_text p:nth-child(2), .build_text p:nth-child(2), .cooperation_text p:nth-child(2), .top_up_text p:nth-child(2), .withdrawal_text p:nth-child(2) {
    font-size: 0.16rem;
    line-height: 0.3rem;
    color: #999999;
  }

  .traceability_process_img {
    width: 2.32rem;
    height: 3.98rem;
    padding: 0 0.52rem 0 0;
  }

  .build_img {
    width: 4.31rem;
    height: 2.91rem;
    padding: 0 0.52rem 0 0;
  }

  .equipment_img {
    width: 3.43rem;
    height: 3.13rem;
    padding: 0 0 0 0.52rem;
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

  .traceability_process_img img, .equipment_img img, .build_img img, .cooperation_img img, .top_up_img img, .withdrawal_img img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  /* .text{
      margin: 9.72% auto 0;
      width: 80%;
  } */
  .process {
    width: 13.54rem;
    margin: 1.1rem auto 0.84rem;
  }

  .process img {
    width: 100%;
    height: 6.38rem;
    margin-top: 4.85%;
    vertical-align: top;
  }

  .footer {
    width: 100%;
    background: url("../../assets/img/footer.png") no-repeat;
    background-size: 100% 100%;
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

