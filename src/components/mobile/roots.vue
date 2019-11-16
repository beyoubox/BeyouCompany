<template>
    <article class="roots">
        <header class="header"></header>
        <section class="content_wrap">
            <div class="roots_tit">
                <div class="title">
                    <p class="tit">MERCHAIN-IOT区块云联溯源产品说明书</p>
                </div>
                <p class="tit_son">Merchain-IOT Manual of blockchain traceability products</p>
                <p class="tit_text">研发供应链全流程解决方案，部署5G硬件感应系统，建立物联网实时数据库，区块云联商家，一物一码识别，提高生产效率，提升品牌价值。</p>
            </div>
            <div class="traceability_process content">
                <p>溯源过程</p>
                <p>运用区块链技术，可以为物联网的世界提供一个引人入胜的可能性，当产品最终完成组装时，可以由制造商注册到通用的区块链里面标示着它生命周期的开始，一旦该产品售出，经销商可以把它注册到一个区域性的区块链上（社区、城市或国家），通过创建有形资产和匹配供给和需求，物联网将会创造一个新的市场。</p>
                <img class="traceability_process_img" src="../../assets/img/guocheng.png" alt="">
            </div>
            <div class="equipment content">
                <p>溯源设备</p>
                <p>目前有各种的物联网和智能系统的区块链应用，当应用于物联网时，区块链的概念开辟了创新的无限可能性，区块链技术可以被使用于追踪设备的使用历史，它可以协调处理设备与设备之间的交易，该技术将通过提供设备与设备之间，设备与人之间进行数据交易而使物联网设备独立。</p>
                <img class="equipment_img" src="../../assets/img/shebei.png" alt="">
            </div>
            <div class="build content">
                <p>溯源应用</p>
                <p>研发供应链全流程解决方案，部署5G硬件感应系统，建立物联网实时数据库，区块云联商家，一物一码识别，提高生产效率，提升品牌价值。</p>
                <img class="build_img" src="../../assets/mobileImg/suyuanyy.png" alt="">
            </div>
            <div class="cooperation content">
                <p>削减成本</p>
                <p>区块链可在多个利益相关方之间创建集中可信的共享数据集，从而取代中间商。去中介以及整个价值链交易自动化无疑将带来成本效益的提升。例如，在供应链中实现清关流程自动化，可以降低（甚至消除）对报关行的依赖。可以联合商家共享服务品牌。记录从  生产到最后出售的过程会生成一个唯一的二维码方面用户追踪。</p>
                <img class="cooperation_img" src="../../assets/mobileImg/xiaojiancb.png" alt="">
            </div>
            <div class="top_up content">
                <p>提升收入</p>
                <p>现有企业可利用区块链与物联网技术结合来尽可能减少收入损失（例如通过遏制假冒商品销售）。区块链还可实现原本不可行或不可扩展的功能，从而充分释放物联网的价值。例如，在智能合约的使用中，实现跨设备自动交易和支付。我们预计，在服务型业务、机器与机器交互以及数据变现等领域，存在大量创收机会。</p>
                <img class="top_up_img" src="../../assets/mobileImg/tishensr.png" alt="">
            </div>
            <div class="withdrawal content">
                <p>优势三：降低风险</p>
                <p>在全球化和数字化背景下，企业将面临日益复杂的合规要求。区块链与物联网技术结合，可以帮助企业收集并维护必要的审计跟踪记录，从而满足监管要求。在降低风险方面，区块链与物联网结合应用还可确保产品在整个生命周期的质量和正品属性，帮助企业维护自身品牌和声誉。</p>
                <img class="withdrawal_img" src="../../assets/img/tibi.png" alt="">
            </div>
        </section>
        <section class="process">
            <div class="title">
                <p class="tit"> 流转路线</p>
            </div>
            <p class="tit_son">The circulation route</p>
            <img src="../../assets/img/suyuanluxian.png" alt="">
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
        name:"Roots"
    }
</script>

<style scoped>
    .roots{
        width: 100vw;
    }
    .header{
        width: 100%;
        height: 7rem;
        background: url("../../assets/mobileImg/smsbanner.png") no-repeat;
        background-size: 100% 100%;
    }
    .roots_tit{
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
        text-align: center;
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
    .content p:nth-child(1){
        font-size: 0.28rem;
        /* text-align: center; */
        font-weight: 500;
        color: #333333;
    }
    .content p:nth-child(2){
        font-size: 0.24rem;
        color: #999999;
        line-height: 0.42rem;
        margin-top: 0.34rem;
    }
    .content img{
        margin-top: 0.92rem;
        vertical-align: top;
    }
    .traceability_process_img{
        width: 2.32rem;
        height: 3.98rem;
    }
    .equipment_img{
        width: 3.43rem;
        height: 3.13rem;
    }
    .build_img{
        width: 3.50rem;
        height: 3.59rem;
    }
    .cooperation_img{
        width: 3.43rem;
        height: 4.05rem;
    }
    .top_up_img{
        width: 3.87rem;
        height: 3.20rem;
    }
    .withdrawal_img{
        width: 3.20rem;
        height: 4.06rem;
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