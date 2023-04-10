<template>
<div class="trainlist">
  <div class="hd">
  <span style="height: 40px;width:64px;display: inline-block;line-height: 40px;color: #3B99FC;border-bottom:1px solid #3B99FC">铁路旅游</span>
  <span style="height: 40px;width:64px;display: inline-block;line-height: 40px;color: #3B99FC;float:right;border-bottom:1px solid #3B99FC">>更多</span>
  </div>
<div class="tra">
<ul>
    <li><a href="javascript:;"><div class="top"><img src="../../assets/imgs/243945e6-c45d-4870-9cf5-77e488068646_product_W572_H370.jpg"></div><div class="bottom"><div class="travel-name" >“环西部火车游” 高品质旅游版专线列车</div><br><div class="price">￥2560</div></div></a></li>
    <li><a href="javascript:;"><div class="top"><img src="../../assets/imgs/fcd7173f-7651-46e7-a126-bdc199e1f6f7_product_W572_H370.jpg"></div><div class="bottom"><div class="travel-name" >“环西部火车游” 陇上江南·行摄山>水陇南三日游</div><br><div class="price">￥930</div></div></a></li>
    <li><a href="javascript:;"><div class="top"><img src="../../assets/imgs/b0c76b21-531b-4af4-a607-cf5672c72ded_product_W572_H370.jpg"></div><div class="bottom"><div class="travel-name" >“环西部火车游”华夏寻根·人文始祖天水两日游</div><br><div class="price">￥980</div></div></a></li>
    <li><a href="javascript:;"><div class="top"><img src="../../assets/imgs/8b36f9a7-f780-4e71-b719-9300109a9ff2_product_W572_H370.jpg"></div><div class="bottom"><div class="travel-name" >“环西部火车游”精品旅游线路</div><br><div class="price">￥3380</div></div></a></li>
    <li><a href="javascript:;"><div class="top"><img src="../../assets/imgs/1716878f-79a2-4db1-af8c-b9c2039f0b3c_product_W572_H370.jpg"></div><div class="bottom"><div class="travel-name" >“环西部火车游”美丽甘南三日游</div><br><div class="price">￥880</div></div></a></li>
    <li><a href="javascript:;"><div class="top"><img src="../../assets/imgs/6d77d0ea-53d0-4518-b7e9-e53795b4920c_product_W572_H370.jpg"></div><div class="bottom"><div class="travel-name" >“环西部火车游” 青海湖、茶卡2日>游</div><br><div class="price">￥880</div></div></a></li>
    <li><a href="javascript:;"><div class="top"><img src="../../assets/imgs/c7c03732-3c86-4308-aea7-df747d4999e8_product_W572_H370.jpg"></div><div class="bottom"><div class="travel-name" >“环西部火车游”嘉敦5日游</div><br><div class="price">￥2260</div></div></a></li>
    <li><a href="javascript:;"><div class="top"><img src="../../assets/imgs/d9ae79de-2f3f-4e9f-ad6e-bdc291dda92a_product_W572_H370.jpg"></div><div class="bottom"><div class="travel-name" >“环西部火车游” 敦煌一地三日游</div><br><div class="price">￥1380</div></div></a></li>
</ul>
</div>
  </div>
</template>

<script>
export default {
name:'trainlist',
}
</script>

<style lang='less'>
.trainlist{
    padding-top: 30px;
     margin-left: 206px;
    width: 1190px;
    height: 578px;
.hd{
    width: 1201px;
    height: 40px;
    border-bottom: 1px solid gray
}
.tra{
    margin-top: 10px;
    width: 1200px;
    height: 508px;
    border: 1px solid purple;
    ul{
        width: 1200px;
        height: 508px;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        li{
        a{
            text-decoration: none;
            color: #000;
        }
       line-height: 0;
       width: 288px;
       height: 244px;
       list-style: none;
       border: 1px solid red;
       .top,img{
       width: 288px;
       height: 160px;
       border:1px solid blue;
       display: block;
       }
       .bottom{
        padding: 10px;
        width: 268px;
        height: 62px;
        border:1px solid blue;display: block;
        .travel-name{
        line-height: 32px;
        font-size: 14px;
         font-size:14px;
         width: 268px;
         height: 32px;
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
        }
        .price{
        line-height: 32px;
         font-size:14px;
         width: 268px;
         height: 30px;
         color: #FF8000;
         font-size: 20px;
        }
       }
        }
    }
}
}
</style>