<template>
  <div class="service">
  <ul>
    <li><a href="javascript:;"><img src="../../assets/imgs/abanner01.jpg" alt=""></a></li>
    <li><a href="javascript:;"><img src="../../assets/imgs/abanner02.jpg" alt=""></a></li>
    <li><a href="javascript:;"><img src="../../assets/imgs/abanner05.jpg" alt=""></a></li>
    <li><a href="javascript:;"><img src="../../assets/imgs/abanner06.jpg" alt=""></a></li>
  </ul>
  </div>
</template>

<script>
export default {
name:'service'
}
</script>

<style lang="less">
.service{
    width: 1191px;
    height: 330px;
    border: 1px solid red;
    margin-left: 206px;
    ul{
        width: 1191px;
        height: 330px;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        li,img{
            width: 590px;
            height: 160px;
           
            list-style: none;
           
        }
    }
}
</style>