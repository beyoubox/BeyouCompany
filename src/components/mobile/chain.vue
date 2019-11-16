<template>
  <article class="specification">
    <header class="header"></header>
    <section class="content_wrap">
      <div class="specification_tit">
        <div class="title">
          <p class="tit">公链价值</p>
        </div>
        <p class="tit_son">Public Chain Value</p>
        <p class="tit_text">公链在整个区块链领域是非常重要的——底层公链相当于区块链世界的基础设施，解决方案用来拓展底层公链的性能或为商业应用提供服务支撑。只有在底层公链扎实稳健高效运转的基础上，区块链商业应用才能发展和落地；所以，公链的发展决定着未来整个区块链行业的发展速度与质量；由于一些基于底层公链的应用严重受限于性能，所以在未来很长一段时间内，公链仍将会成为区块链行业中最受关注的一个版块
        </p>
      </div>
      <div class="build content">
        <div>
          <p>应用生态</p>
        </div>
        <div>
          <p>1、 娱乐：游戏、动漫、音乐、文学</p>
          <p>2、 实体：教育、跨境电商、旅游、酒店、地产</p>
        </div>
        <img class="build_img" src="../../assets/img/square1.png" alt="">
      </div>
      <div class="cooperation content">
        <div>
          <p>多链钱包</p>
        </div>
        <div>
          <p>1、数字资产：币币兑换、转账、加密存储、行情</p>
          <p>2、咨询：快讯、新闻、攻略</p>
          <p>3、社交：聊天、阅后即焚、发数字资产红包</p>
        </div>
        <img class="cooperation_img" src="../../assets/img/square2.png" alt="">
      </div>
      <div class="top_up content">
        <div>
          <p>金融生态</p>
        </div>
        <div>
          <p>Visa卡、POS机、交易所、精准投资</p>
        </div>
        <img class="top_up_img" src="../../assets/img/square3.jpg" alt="">
      </div>
      <div class="withdrawal content">
        <div>
          <p>稳定币</p>
        </div>
        <div>
          <p>基于自主公链的稳定币，usdb，用于与法币对等交易支付</p>
        </div>
        <img class="withdrawal_img" src="../../assets/img/square4.png" alt="">
      </div>
    </section>
    <section class="process">
      <div class="title">
        <p class="tit">生态闭环</p>
      </div>
      <p class="tit_son">The circulation route</p>
      <img style="margin-left: 25px" src="../../assets/img/closedloop.png" alt="">
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
    export default {
        name:"Chain"
    }
</script>

<style scoped>
  .specification{
    width: 100vw;
  }
  .header{
    width: 100%;
    height: 7rem;
    background: url("../../assets/mobileImg/chain.png") no-repeat;
    background-size: 100% 100%;
  }
  .specification_tit{
    margin-top: 1rem;
  }
  .title{
    display: flex;
    justify-content:center;
  }
  .tit{
    position: relative;
    font-size: 0.3rem;
    color: #222222;
    line-height: 0.3rem;
    height: 0.3rem;
    font-weight: bold;
    /* display: flex;
    align-items:center; */
  }
  .tit::before{
    content: "";
    position: absolute;
    width: 0.2rem;
    height: 0.04rem;
    background: #222222;
    left: -0.4rem;
    top:50%;
    margin-top: -0.02rem;
  }
  .tit::after{
    content: "";
    position: absolute;
    width: 0.2rem;
    height: 0.04rem;
    background: #222222;
    right: -0.4rem;
    top:50%;
    margin-top: -0.02rem;
  }
  .tit_son{
    margin-top: 0.2rem;
    color: #999999;
    font-size: 0.18rem;
    text-align: center;
  }
  .tit_text{
    font-size: 0.24rem;
    color: #333333;
    /* text-align: center; */
    line-height: 0.36rem;
    width: 6.71rem;
    margin: 0.52rem auto 0;
  }
  .content{
    padding: 1.46rem 0.34rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content div:nth-child(1) p{
    font-size: 0.28rem;
    /* text-align: center; */
    font-weight: 500;
    color: #333333;
  }
  .content div:nth-child(2){
    margin-top: 0.34rem;
  }
  .content div:nth-child(2) p{
    font-size: 0.24rem;
    color: #999999;
    line-height: 0.42rem;
  }
  .content img{
    margin-top: 0.92rem;
    vertical-align: top;
  }
  .build_img{
    width: 4.31rem;
  }
  .cooperation_img{
    width: 3.40rem;
  }
  .top_up_img{
    width: 3.52rem;
  }
  .withdrawal_img{
    width: 4.51rem;
  }
  .process{
    width: 100%;
    box-sizing: border-box;
    padding: 1.5rem 0.3rem 1.5rem;
  }
  .process img{
    margin-top: 1rem;
    width: 6.91rem;
    height: 3.60rem;
    vertical-align: top;
  }
  .footer{
    width: 7.50rem;
    height: 8.13rem;
    background: url("../../assets/mobileImg/dibubj.png") no-repeat;
    background-size: 100% 100%;
    padding: 0.79rem 0.3rem 0.8rem;
    box-sizing: border-box;
  }
  .footer_tit p:nth-child(1){
    font-size: 0.3rem;
    color: #FFFFFF;
    font-weight: 500;
    margin-bottom: 0.29rem;
  }
  .footer_tit p:nth-child(2){
    font-size: 0.26rem;
    color: #FFFFFF;
    margin-bottom: 0.8rem;
    /* font-weight: lighter; */
  }
  .footer_content{
    display: flex;
    justify-content: space-between;
  }
  .footer_content ul{
    width: 2.8rem;
  }
  .footer_content ul li{
    margin-top: 0.59rem;
  }
  .footer_content ul li:nth-child(1){
    margin-top: 0;
  }
  .footer_content ul li p:nth-child(1){
    font-size: 0.24rem;
    color: #FFFFFF;
    font-weight: 500;
    margin-bottom: 0.24rem;
  }
  .footer_content ul li p:nth-child(2){
    font-size: 0.22rem;
    color: #FFFFFF;
  }
  .code{
    width: 3.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .code img{
    width: 2.3rem;
    height: 2.3rem;
  }
  .code p:nth-child(2), .code p:nth-child(3){
    font-size: 0.22rem;
    color: #FFFFFF;
  }
  .code p:nth-child(2){
    margin: 0.38rem 0 0.19rem;
  }
  .address{
    font-size: 0.22rem;
    color: #FFFFFF;
    margin-top: 0.87rem;
  }
  .address p{
    padding-left: 0.3rem;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0.22rem;
  }
  .address p:nth-child(2){
    margin-bottom: 0;
  }
  .address p::after{
    content: "";
    position: absolute;
    left: 0;
    width: 0.2rem;
    height: 0.2rem;
    background: url("../../assets/mobileImg/dizhi.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
