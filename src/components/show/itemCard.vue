<template>
  <div class="card">
   <ul class="left">
    <li :class="{active:index === findIndex}" v-for="(obj,index) in side" :key="index"
    @click="sel(index)" >{{obj}}</li>
   </ul>
   <div v-if="showmsg=='1'" class="select-mod">
    <ul>
        <li :class="{activeA:index === findIndexA}" v-for="(obj,index) in ticket" :key="index"
    @click="selA(index)" >{{obj}}</li>
        
    </ul>
    <div class='ticket'>
     <div v-if="ticketMsg=='0'" class="single">
     <label>出发地</label><input type="text" class="begin"><br>
     <label>到达地</label><input type="text" class="end"><br>
     <label>出发日期</label><input type="text" class="beginDate"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->

     <el-checkbox style="margin-left: 60px;">学生</el-checkbox>
     <el-checkbox style="margin-left: 60px;">高铁/动车</el-checkbox>
     <el-button style="margin-left: 10px;width:350px;" width:10 type="warning" round >查询</el-button>
     <a href="javascript:;" style="margin-top: 10px;margin-right: 10px;text-decoration: none;;float:right;color:gray;font-size: 14px;">删除历史</a>
     </div>
      <div v-if="ticketMsg=='1'" class="return">
     <label>出发地</label><input type="text" class="begin"><br>
     <label>到达地</label><input type="text" class="end"><br>
     <label>出发日期</label><input type="text" class="beginDate"><br>
     <label>返程日期</label><input type="text" class="beginDate"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->
     <el-checkbox style="margin-left: 60px;">学生</el-checkbox>
     <el-checkbox style="margin-left: 60px;">高铁/动车</el-checkbox>
     <el-button style="margin-left: 10px;width:350px;" width:10 type="warning" round >查询</el-button>
     </div>
      <div v-if="ticketMsg=='2'" class="middle">
     <label>出发地</label><input type="text" class="begin"><br>
     <label>到达地</label><input type="text" class="end"><br>
     <label>乘车日期</label><input type="text" class="beginDate"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->
     <el-checkbox style="margin-left: 60px;">学生</el-checkbox>
     <el-button style="margin-left: 10px;width:350px;" width:10 type="warning" round >查询</el-button>
     </div>
     <div v-if="ticketMsg=='3'" class="change">
     <label>查询类型</label>
     <el-radio-group v-model="radio" style="display: inline;">
    <el-radio :label="3">订票日期</el-radio>
    <el-radio :label="6">乘车日期</el-radio>
  </el-radio-group><br>
     
     <label>开始日期</label><input type="text" class="begin"><br>
     <label>结束日期</label><input type="text" class="end"><br>
     <label>关键字</label><input type="text" class="beginDate"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->
     <el-button style="margin-left: 10px;width:350px;" width:10 type="warning" round >查询</el-button>
     </div>

    </div>
    </div>
    <div v-else-if="showmsg=='2'" class="select-mod">
    <ul>
        <li :class="{activeA:index === findIndexB}" v-for="(obj,index) in dailySearch" :key="index"
    @click="selB(index)" >{{obj}}</li>
        
    </ul>
    <div class="search">
      <div v-if="dailySearchMsg=='0'" class="late">
     <label>查询类型</label>
     <el-radio-group v-model="radio" style="display: inline;">
    <el-radio :label="3">到达站</el-radio>
    <el-radio :label="6">出发站</el-radio>
  </el-radio-group><br>
     
     <label>车站</label><input type="text" class="station"><br>
     <label>车次</label><input type="text" class="trainNum"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->
     <el-button style="margin-left: 10px;width:350px;margin-top: 30px;" width:10 type="warning" round >查询</el-button>
     </div>
     <div v-else-if="dailySearchMsg=='1'" class="checkPlace">
    
     <label>乘车日期</label><input type="text" class="Date"><br>
     <label>车次</label><input type="text" class="trainNum"><br>
     <label>乘车站</label><input type="text" class="station"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->
     <el-button style="margin-left: 10px;width:350px;margin-top: 30px;" width:10 type="warning" round >查询</el-button>
     </div>
     <div v-else-if="dailySearchMsg=='2'" class="sale">
    
     <label>起售日期</label><input type="text" class="beginDate"><br>
     <label>起售车站</label><input type="text" class="beginStation"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->
     <el-button style="margin-left: 10px;width:350px;margin-top: 30px;" width:10 type="warning" round >查询</el-button>
     </div>
     <div v-else-if="dailySearchMsg=='3'" class="weather">
    
     <label>目的地</label><input type="text" class="des"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->
     <el-button style="margin-left: 10px;width:350px;margin-top: 30px;" width:10 type="warning" round >查询</el-button>
     </div>
    </div>
    </div>
    <div v-else-if="showmsg=='3'" class="select-mod">
    <ul>
        <li :class="{activeA:index === findIndexC}" v-for="(obj,index) in mealBook" :key="index"
    @click="selC(index)" >{{obj}}</li>

    </ul>
    <div class="meal">
    <div v-if="mealBookMsg=='0'" class="preBook">
    
     <label>出发日期</label><input type="text" class="goDate"><br>
     <label>出发车次</label><input type="text" class="goTrain"><br>
     <!--<ul>
        <li class="stu"  style="color: black;">学生</li>
        <li class="high"  style="color: black;">高铁/动车</li>
     </ul>-->
     <el-button style="margin-left: 10px;width:350px;margin-top: 30px;" width:10 type="warning" round >查询</el-button>
     </div>
     <div v-else-if="mealBookMsg=='1'" class="bookRec">
    
     未开放
     
     </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name:'itemCard',
data(){
return{
    radio:'',
    findIndex:'',
    findIndexA:'',
    findIndexB:'',
    findIndexC:'',
    showmsg:'0',
    ticketMsg:'0',
    dailySearchMsg:'0',
    mealBookMsg:"0",
    side:['车票','常用查询','订餐'],
    ticket:['单程','往返','中转换乘','退改签'],
    dailySearch:['正晚点','检票口','起售时间','天气查询'],
    mealBook:['预定','餐饮订单']
}
},
created(){
this.sel(0)
this.selA(0)
this.selB(0)
this.selC(0)


},
methods:{
    sel(index){
        this.showmsg=index+1
        this.findIndex=index
        console.log(index)
        console.log('msg:'+this.showmsg)

    },
    selA(index){
        this.findIndexA=index
        this.ticketMsg=index
        //console.log(index)

    },
    selB(index){
        this.findIndexB=index
        this.dailySearchMsg=index
        //console.log(index)
    },
    selC(index){
        this.findIndexC=index
        this.mealBookMsg=index
        //console.log(index)
    }
}
}
</script>

<style lang="less">
.card{
    height: 350px;
    width: 510px;
    border: 1px solid red;
    z-index: 999;
    background-color: #fff;
    ul{
        margin: 0;
        padding: 0;
        li:nth-child(n+2){
            margin-top: 1px;
        }
    }
     .active {
           background-color: #2676e3;
        }
    li{
        color: white;
        text-align: center;
        line-height: 100px;
        width: 100px;
        height: 116px;
        background-color: #3b99fc;
        list-style: none;
    }
    .select-mod{
        position: absolute;
        top: 32px;
        left: 125px;
        width: 368px;
        height: 318px;
        //float: left;
        border: 1px solid red;
        //padding: 32px 25px 0 25px;
        ul{
        display: flex;
        justify-content: space-between;
          li:nth-child(1){
            height: 31px;
        }  
        
        li{
        flex:1;
        line-height: 30px;
         float: left;
         list-style:none;
         width: 92px;
         height: 30px;
         color: #999999;
         background-color: #fff;
         border-bottom: 1px solid #999999;

        }
        }
        .activeA {
            color: #2676e3;
            border-bottom: 2px solid #2676e3;
        }
        .single,.return,.middle,.change,.late,.checkPlace,.sale,.weather,.preBook,.bookRec{
            width: 368px;
            height: 223px;
            margin-top: 10px;
            border: 1px solid rgb(30, 0, 128);
            //border-style: inset;
            color: black;
             label:nth-child(1){
             margin-top: 24px;
        }
        label:nth-child(n+2){
             margin-top: 12px;
        }
        input,.items-center{
            height: 25px;
            width: 265px;
            //border: 1px solid gray;
        }
            label{
                font-size: 14px;
                display: inline-block;
                text-align: right;
                padding-right: 10px;
                width: 65px;
                height: 30px;
            }
        }
    }

}
</style>