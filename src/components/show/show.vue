<template>
  <div class="showContain">
  
  <el-carousel  height="450px">
    <el-carousel-item v-for="item in img" :key="item">
      <img :src="item.url" alt="无图片"/>
    </el-carousel-item>
  </el-carousel>
  <div class="item">
   <item-card></item-card>
   </div>
  </div>
</template>

<script>
import itemCard from './itemCard.vue'
export default {
name:'show',
components:{
itemCard
},
data(){
return {
    
    img:[
        {url:require("../../assets/imgs/banner10.jpg")},
        {url:require("../../assets/imgs/banner12.jpg")},
        {url:require("../../assets/imgs/banner26.jpg")},
        {url:require("../../assets/imgs/banner20201223.jpg")},
        {url:require("../../assets/imgs/banner0619.jpg")},
        {url:require("../../assets/imgs/banner20200707.jpg")}
    ]
}
},
methods: {
  sel(index){
        this.findIndex=index
        //console.log(this.bc.backgroundcolor)
    }  
},
}
</script>

<style lang="less">
.showContain{
    position: relative;
    border: 1px solid red;
    width: 100%;
    height: 450px;
    .item{
      position: absolute;
      top: 50px;
      left: 206px;
    }
    
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>