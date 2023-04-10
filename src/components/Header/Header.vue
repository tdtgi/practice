<template>
  <div class="head">
    <img src="../../assets/imgs/logo@2x.png" alt="">
    <div class="H-right">
     <input class="ipt" type="text">
     <a href="javascript:;" class="search-btn">
     <i class="bi bi-search" style="margin-left: 3px;"></i>
     </a>
     <div class="H-List">
      <ul>
        <li><a href="javascript:;">无障碍</a></li>
        <li>|</li>
        <li><a href="javascript:;">爱心版</a></li>
        <li>|</li>
        <li><a href="javascript:;">English</a></li>
        <li>|</li>
        <li><a href="javascript:;">我的12306</a></li>
        <li>|</li>
        <li><a href="javascript:;" style="color: #000;">登录</a></li>
        <li><a href="javascript:;" style="color: #000;">注册</a></li>
      </ul>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
 
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.head{
  position:relative;
  width: 100%;
  height: 100px;
  border: 1px solid red;
  
  img{
    position:absolute;
    //float: left;
    margin-left: 206px;
    top: 21px;
    height: 50px;
    width: 200px;
  }
  .H-right{
    position:absolute;
    right: 0;
    margin-top: 30px;
    height: 40px;
    width: 1100px;
    border: 1px solid rgb(0, 255, 47);
    background-image: url(../../assets/imgs/train@2x.png);
    background-repeat: no-repeat;
    .ipt{
      padding: 0;
      margin-top: 10px;
      margin-left: 150px;
      height: 25px;
      width: 370px;
    }
    .search-btn{
      position: relative;
      display: inline-block;
      //top: 7px;
      width: 25px;
      height: 25px;
      border: 1px solid rgb(0, 255, 47);
      color: white;
      background-color: #3B99FC;
      

    }
    .H-List{
      height: 40px;
      width: 500px;
      border: 1px solid red;
      float: right;
      a{
         color: #3B99FC;
        text-decoration: none;
        font-size: 12px;
      }
      li{
        position: relative;
        bottom: 5px;
        padding-bottom: 10px;
        color: #3B99FC;
        list-style: none;
        float:left;
        margin-left: 5px;
        margin-right: 5px;
        
      }
     
    }
  }
}
</style>
