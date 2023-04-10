<template>
  <div class="newstab">
  <div class="tab">
  <ul class="head">
    <li :class="{active:index === findIndex}" v-for="(obj,index) in tabs" :key="index"
    @click="getTabs(index)" >{{obj}}</li>
    <!--<li>2</li>
    <li>3</li>-->
  </ul>
  <div v-if="showMsg=='0'" class="newPost">
  <ul>
    <li class="news" v-for="(news,index) in newPostList" :key="index"><a href="javascript:;" >{{news}}</a><span>{{newTime[index]}}</span></li>
  </ul>
  </div>
  <div v-if="showMsg=='1'" class="problems">
  <ul>
    <li class="pros" v-for="(pro,index) in problemList" :key="index"><a href="javascript:;" >{{pro}}</a></li>
  </ul>
  </div>
  <div v-if="showMsg=='2'" class="credit">
  <div class="leftSide">
  <dt>
  <img src="../../assets/imgs/lost.jpg" alt="" style="width: 24px;height: 24px;">
  失信被执行人（自然人）公示
  </dt> 
  <img src="../../assets/imgs/empty.png" alt="" style="margin: 15px 222px;">
  <div style="color: #999999;font-size: 14px;margin-left: 233px;">暂无公示数据</div>
  <dd style="float:right;margin-top: 15px;padding-right: 60px;color: #999999;font-size: 14px;">更多></dd>
  </div>
  <div class="rightSide">
  <dt>
  <div class="pic"></div>
  失信被执行人（自然人）公布
  </dt>
  <ul class="lostT">
    <li class="lostL" v-for="(Lost,index) in lostList" :key="index"><a href="javascript:;" >{{Lost}}</a><span>{{lostCode[index]}}</span></li>
    <dd style="float:right;margin-top: 15px;padding-right: 60px;color: #999999;font-size: 14px;">更多></dd>
  </ul> 
  </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        findIndex:'0',
        showMsg:'0',
        tabs:['最新发布','常见问题','信用信息'],
        newPostList:['铁路旅客禁止、限制携带和托运物品目录',
        '候补购票操作说明',
        '关于调整互联网、电话订票起售时间的公告',
        '中国铁路呼和浩特局集团有限公司关于2023年3月16日至2023年4月16日部分旅客列车停运的公告',
        '中国铁路成都局集团有限公司关于2023年3月4日至19日加开部分列车的公告',
        '公告',
        '公告',
        '中国铁路南宁局集团有限公司加开列车公告 2023.3.3',
        '中国铁路上海局集团有限公司关于2023年3月5日-2023年3月6日增开部分旅客列车的公告',
        '中国铁路上海局集团有限公司关于2023年3月3日-2023年3月6日增开部分旅客列车的公告'],
         newTime:['2022-12-31','2022-12-31','2022-12-31','2022-12-31','2022-12-31','2022-12-31','2022-12-31','2022-12-31','2022-12-31','2022-12-31'],
         problemList:['实名制车票','互联网购票','随身携带品','丢失购票时使用的有效身份证件',
                      '广深港跨境列车','售票窗口购票','互联网退票','进出站','使用居民身份证直接检票乘车'],
         lostList:['刘红琴','姚林康','周保忠','刘杰'],
         lostCode:['360502********1622','110224********0097','310221********4418','340123********2077'],
    }
   

},
created(){
this.getTabs(0)
},
methods: {
   getTabs(index){
    this.findIndex=index
    this.showMsg=index
   } 
},
}
</script>

<style lang='less'>
.newstab{
 height: 297px;
 width: 1190px;
 margin-left: 206px;
 border: 1px solid red;
 .active {
           background-color: #3b99fc !important;
           color: white !important;
        }
 .tab{
 .head{
        margin: 0;
        padding: 0;
        height: 42px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    li{
        list-style: none;
        width: 390px;
        height: 40px;
        border: 1px solid green;
        text-align: center;
        line-height: 40px;
        color: #666666;
        background-color: #EFEFF4;
    }
 }
 .newPost,.problems,.credit{
    margin: 0;
    padding: 20px;
    width: 1150px;
    height: 216px;
    border: 1px solid red;
    .leftSide{
        width: 544px;
        height: 216px;
        border: 1px solid greenyellow;
        display: inline-block;
        dt{
            padding: 0;
            width: 544px;
            height: 46px;
            text-align: center;
            line-height: 46px;
            border-bottom: 2px solid rgb(224, 224, 224);
            img{
                vertical-align:middle;
            }
           
        }
    }
    .rightSide{
        width: 544px;
        height: 216px;
        border: 1px solid greenyellow;
        float: right;
         dt{
            padding: 0;
            width: 544px;
            height: 46px;
            text-align: center;
            line-height: 46px;
            border-bottom: 2px solid rgb(224, 224, 224);
            .pic{
                 position:absolute;
                 //display: inline;
                 vertical-align:middle;
                 margin-top: 11px;
                 margin-left:140px;
                 width:24px;
                 height:24px;
                 background-image: url("../../assets/imgs/service@2x.png");
                 background-position: left 80px;
                 background-size: 100%;
            }
            
           
        }
        .lostT{
        display: block;
        padding: 0;
        margin: 0;
        width: 544px;
        height: 168px;
        //display: flex;
        //flex-wrap: wrap;
        //justify-content: space-between;
        .lostL{
            padding: 0 60px;
            width: 424px;
            height: 32px;
            line-height: 36px;
            border: none;
            font-size: 14px;
            list-style: none;
            border-bottom: 1px solid rgb(224, 224, 224);
            span{
                //vertical-align:middle;
                float:right;
                font-size: 12px;
                height:32px;
                line-height:36px;
                color: gray;
                
            }
       &:before {
             content: "";
             float: left;
             width: 6px;
             height: 6px;
             background: #3b99fc;
             margin: 15px 20px 0 0;
}
        
            
            a{
            display: inline-block;
            height: 36px;
            //max-width: 70%;
            //overflow: hidden;
           // white-space: nowrap;
            //text-overflow: ellipsis;
            color: #000;
            text-decoration: none;
            }
        }
    }
    }
    ul{
        padding: 0;
        margin: 0;
        width: 1150px;
        height: 216px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            width: 554px;
            height: 36px;
            line-height: 36px;
            border: none;
            font-size: 14px;
            list-style: none;
            span{
                vertical-align:middle;
                float:right;
                font-size: 12px;
                height:36px;
                line-height:36px;
                color: gray;
                
            }
       &:before {
             content: "";
             float: left;
             width: 6px;
             height: 6px;
             background: #3b99fc;
             margin: 15px 20px 0 0;
}
        
            
            a{
            display: inline-block;
            height: 36px;
            max-width: 70%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #000;
            text-decoration: none;
            }
        }
    }
 }
}
}
</style>