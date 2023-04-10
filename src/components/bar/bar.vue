<template>
  <div class="bar">
  <ul>
    <li><a href="javascript:;" class="itemone"><br><div style="width: 168px;height: 20px;line-height: 20px;margin:-25px 0 0 -70px;">重点旅客预约</div></a></li>
    <li><a href="javascript:;" class="itemtwo"><br><div style="width: 168px;height: 20px;line-height: 20px;margin:-25px 0 0 -70px;">遗失物品查找</div></a></li>
    <li><a href="javascript:;" class="itemthree"><br><div style="width: 168px;height: 20px;line-height: 20px;margin:-25px 0 0 -70px;">约车服务</div></a></li>
    <li><a href="javascript:;" class="itemfour"><br><div style="width: 168px;height: 20px;line-height: 20px;margin:-25px 0 0 -70px;">便民托运</div></a></li>
    <li><a href="javascript:;" class="itemfive"><br><div style="width: 168px;height: 20px;line-height: 20px;margin:-25px 0 0 -70px;">车站引导</div></a></li>
    <li><a href="javascript:;" class="itemsix"><br><div style="width: 168px;height: 20px;line-height: 20px;margin:-25px 0 0 -70px;">站车风采</div></a></li>
    <li><a href="javascript:;" class="itemseven"><br><div style="width: 168px;height: 20px;line-height: 20px;margin:-25px 0 0 -70px;">用户反馈</div></a></li>
  </ul>
  </div>
</template>

<script>
export default {
name:'bar'
}
</script>

<style lang="less">
.bar{
   margin: 0;
   padding: 0;
   width: 1190px; 
   height: 136px;
   margin-left: 206px;
   border: 1px solid red;
   ul{  margin:0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    li{
        text-decoration: none;
        list-style: none;
        flex:1;
        width: 168px;
        height: 66px;
        text-align: center;
        line-height: 66px;
        padding: 35px 0;
        a{
            color: #000;
            text-decoration: none;
        }
            .itemone{
                 display: block;
                 margin-left: 66px;
                 line-height: 66px;
                 width:36px;
                 height:36px;
                 background-image: url("../../assets/imgs/service@2x.png");
                 background-size: 100%;
            }
             .itemtwo{
                 position:absolute;
                 display: block;
                 margin-left: 66px;
                 line-height: 66px;
                 width:36px;
                 height:36px;
                 background-image: url("../../assets/imgs/service@2x.png");
                 background-position: left 160px;
                 background-size: 100%;
                
            }
            .itemthree{
                 position:absolute;
                 display: block;
                 margin-left: 66px;
                 line-height: 66px;
                 width:36px;
                 height:36px;
                 background-image: url("../../assets/imgs/service@2x.png");
                 background-position: left 240px;
                 background-size: 100%;
                
            }
            .itemfour{
                 position:absolute;
                 display: block;
                 margin-left: 66px;
                 line-height: 66px;
                 width:36px;
                 height:36px;
                 background-image: url("../../assets/imgs/service@2x.png");
                 background-position: left 200px;
                 background-size: 100%;
                
            }
            .itemfive{
                 position:absolute;
                 display: block;
                 margin-left: 66px;
                 line-height: 66px;
                 width:36px;
                 height:36px;
                 background-image: url("../../assets/imgs/service@2x.png");
                 background-position: left 280px;
                 background-size: 100%;
                
            }
            .itemsix{
                 position:absolute;
                 display: block;
                 margin-left: 66px;
                 line-height: 66px;
                 width:36px;
                 height:36px;
                 background-image: url("../../assets/imgs/service@2x.png");
                 background-position: left 120px;
                 background-size: 100%;
                
            }
            .itemseven{
                 position:absolute;
                 display: block;
                 margin-left: 66px;
                 line-height: 66px;
                 width:36px;
                 height:36px;
                 background-image: url("../../assets/imgs/service@2x.png");
                 background-position: left bottom;
                 background-size: 100%;
                
            }
        
        
    }
   }
}
</style>