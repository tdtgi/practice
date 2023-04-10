<template>
  <div class="nav">
  <ul>
    <li :class="{active:index === findIndex}" v-for="(obj,index) in list" :key="index"
    @click="sel(index)" >{{obj}}</li>
    <!--<li :style="bc" @click="sel">车票</li>
    <li :style="bc" @click="sel">团购服务</li>
    <li :style="bc" @click="sel">会员服务</li>
    <li :style="bc" @click="sel">站车服务</li>
    <li :style="bc" @click="sel">商旅服务</li>
    <li :style="bc" @click="sel">出行指南</li>
    <li :style="bc" @click="sel">信息查询</li>-->
  </ul>
  </div>
</template>

<script>
export default {
name: 'navv',
data(){

return {
    findIndex:'',
    list:["首页","车票","团购服务","会员服务","站车服务","商旅服务","出行指南","信息查询"],
   
    bc:{backgroundColor:"#3b99fc"}
}
},
created(){
this.sel(0)
},
methods:{
    sel(index){
        this.findIndex=index
        //console.log(this.bc.backgroundcolor)
    }
}

}
</script>

<style lang="less">
.nav{
    height: 50px;
    width: 100%;
    background-color: #3b99fc;
    ul{
        margin: 0;
        padding: 0;
        line-height: 50px;
        height: 100%;
        margin-left: 206px;
        li:hover{
            background-color: #2676e3;
        }
        }
        .active {
           background-color: #2676e3;
        }
    li{ 
        
        color: white;
        height: 100%;
        width: 150px;
        text-align: center;
        //padding-left:72px;
        z-index: 999;
        //margin-top: 15px;
        list-style: none;
        float:left;
    }
}

</style>