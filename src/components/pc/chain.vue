<template>
  <article>
    <section class="header_box">
      <div class="header">
        <img src="../../assets/img/chain.png" alt="">
      </div>
    </section>
    <section class="specification">
      <div class="title">
        <p class="tit">公链价值</p>
      </div>
      <p class="tit_son">Public Chain Value</p>
      <p class="tit_text">
        公链在整个区块链领域是非常重要的——底层公链相当于区块链世界的基础设施，解决方案用来拓展底层公链的性能或为商业应用提供服务支撑。只有在底层公链扎实稳健高效运转的基础上，区块链商业应用才能发展和落地；所以，公链的发展决定着未来整个区块链行业的发展速度与质量；由于一些基于底层公链的应用严重受限于性能，所以在未来很长一段时间内，公链仍将会成为区块链行业中最受关注的一个版块
      </p>
    </section>
    <section class="content">
      <div class="build">
        <div class="build_text">
          <p>应用生态：</p>
          <p>1、 娱乐：游戏、动漫、音乐、文学</p>
          <p>2、 实体：教育、跨境电商、旅游、酒店、地产</p>
        </div>
        <div class="build_img">
          <img src="../../assets/img/square1.png" alt="">
        </div>
      </div>
      <div class="cooperation">
        <img src="../../assets/img/square2.png" alt="">
        <div class="cooperation_text">
          <p>多链钱包：</p>
          <p>1、数字资产：币币兑换、转账、加密存储、行情</p>
          <p>2、咨询：快讯、新闻、攻略</p>
          <p>3、社交：聊天、阅后即焚、发数字资产红包</p>
        </div>
      </div>
      <div class="top_up">
        <div class="top_up_text">
          <p>金融生态：</p>
          <p>Visa卡、POS机、交易所、精准投资</p>
        </div>
        <img src="../../assets/img/square3.jpg" alt="">
      </div>
      <div class="withdrawal">
        <img src="../../assets/img/square4.png" alt="">
        <div class="withdrawal_text">
          <p>稳定币：</p>
          <p>基于自主公链的稳定币，usdb，用于与法币对等交易支付</p>
        </div>
      </div>
      <div class="process">
        <div class="title">
          <p class="tit">生态闭环</p>
        </div>
        <p class="tit_son">The circulation route</p>
        <img style="margin-left: 70px" src="../../assets/img/closedloop.png" alt="">
      </div>
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
            <li><p>总公司地址：上海市杨浦区铁岭路123号</p>
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
  </article>
</template>
<script>
    export default {
        name: "Chain"
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
