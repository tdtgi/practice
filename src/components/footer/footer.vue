<template>
  <div class="footers">
  <div class="link">
  <div class="tit">友情链接</div>
  <div class="linkList">
  <ul>
    <li><a href="javascript:;"><img src="../../assets/imgs/link05.png" alt=""></a></li>
    <li><a href="javascript:;"><img src="../../assets/imgs/link04.png" alt=""></a></li>
    <li><a href="javascript:;"><img src="../../assets/imgs/link03.png" alt=""></a></li>
    <li><a href="javascript:;"><img src="../../assets/imgs/link02.png" alt=""></a></li>
  </ul>
  </div>
  </div>
  <div class="QR">
  <ul class="QRcode">
    <li style="width: 140px;"><div class="QRTOP spii" style="width: 140px;" id="spi" @click="sp">中国铁路官方微信</div><div><img src="../../assets/imgs/zgtlwb.png" alt="" ></div></li>
    <li style="width: 140px;"><div class="QRTOP" style="width: 140px;">中国铁路官方微博</div><div><img src="../../assets/imgs/zgtlwx.png" alt="" ></div></li>
    <li><div class="QRTOP">12306公众号</div><div><img src="../../assets/imgs/public.png" alt="" ></div></li>
    <li><div class="QRTOP">铁路12306</div><div><img src="../../assets/imgs/download.png" alt=""></div></li>
  </ul>
 </div>
   <div class="codeTip">
    官方APP下载，目前铁路未授权其他网站或APP开展类似服务内容，敬请广大用户注意。           
  </div>
  </div>
</template>

<script>
export default {
name:'bottomFooter',
methods: {
  sp(){
    var spi = document.querySelector("#spi");
    //var spin="@keyframes spin {100% { transform: rotate(360deg) }}";
    spi.style.animation="spin .5s linear infinite"
    
    //spi.style.animationDuration = ".2s";
  }
},
}
</script>

<style lang='less'>
.footers{
   //display: block;
    padding: 20px 0;
    width: 1200px;
    height: 154px;
    margin-top: 40px;
    margin-left: 206px;
    border: 1px solid red;
    background-color: #F8F8F8;
  .link{
   width: 420px;
   height: 154px;
   margin-left: 50px;
   display: inline-block;
    .tit{
      //display: block;
      width: 420px;
      height: 54px;
      line-height: 54px;
      font-size: 14px;
    }
    .linkList{
      width: 420px;
      height: 100px;
      ul{
        padding: 0;
        margin: 0;
        width: 420px;
        height: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        list-style:none;
        li,img{
        width: 200px;
        height: 34px;
        border: 0.5px solid rgb(224, 224, 224);

        }
      }
    }
  }
  .QR{
    vertical-align:middle;
    width: 440px;
    height: 134px;
    display: inline-block;
    border: 1px solid greenyellow;
    ul{
      width: 440px;
      height: 134px;
      margin: 0;
      padding: 0;
      display: flex;
      li{
        width: 110px;
        height: 134px;
        list-style: none;
        border: 1px solid red;
         text-align: center;
        .QRTOP{
          width: 110px;
          height: 54px;
          font-size: 14px;
          text-align: center;
          line-height: 54px;
          
        }
        //.spii{
        //    animation: spin .5s linear infinite;
         // }
          @keyframes spin {
  100% { transform: rotate(360deg); }
}
        img{
          display: inline;
         height: 80px;
         width: 80px;
        }
      }
    }

  }
  .codeTip{
    display: inline-block;
    width: 168px;
    height: 54px;
    font-size: 12px;
    padding: 10px;
    margin-left: 80px;
    vertical-align:middle;
    background-color: #fff;
    border: 1px solid rgb(224, 224, 224);
  }
}
</style>