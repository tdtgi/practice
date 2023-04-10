<template>
  <div class="txt">
  <p><span>版权所有©2008-2023</span>
  <span>中国铁道科学研究院集团有限公司</span>
  <span>技术支持：铁旅科技有限公司</span>
  </p>
  <p>
  <img src="../../assets/imgs/gongan.png" alt="">
  <span>京公网安备 11010802038392号</span>
  <span>|</span>
  <span>京ICP备05020493号-4</span>
  <span>|</span>
  <span>ICP证：京B2-20202537</span>
  </p>
  <div class="bt">
  <img src="../../assets/imgs/footer-slh.jpg" alt="" class="slh">
  </div>
  </div>
</template>

<script>
export default {
name:'footertxt'
}
</script>

<style lang='less'>
.txt{
    position: relative;
    width: 100%;
    height: 60px;
    padding: 10px 0;
    background-color: #666666;
    p{
        display: block;
        width: 100%;
        height: 30px;
        font-size: 14px;
        color: #C1C1C1;
        margin: 0;
        padding: 0;
        text-align: center;
        img{
            height: 13px;
            width: 13px;
        }
        span{
            margin-right: 10px;
        }

    }
    .bt{
        position: absolute;
        top:17px ;
        left: 50%;
        margin-left: 465px;
        display: inline;

    .slh{
        //display: block;
        //position: relative;
        width: 130px;
        height: 46px;
        //right:-1200px;
        //margin-right: 465px;
    }
    }
    
}

</style>