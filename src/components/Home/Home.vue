<template>
  <div class="container" @scroll="scrollEvent">
  <div class="header">
  <headers></headers>
  </div>
  <div class="navv">
  <navv></navv>
  </div>
  <div class="showBody">
  <show></show>
  </div>
  <div class="middleBar" style="margin: 0;padding: 0;">
  <bar></bar>
  </div>
  <div class="ser" style="margin: 0;padding: 0;">
  <service></service>
  </div>
  <div class="train" style="margin: 0;padding: 0;">
  <trainlist></trainlist>
  </div>
  <div class="news" style="margin: 0;padding: 0;">
  <news></news>
  </div>
  <div class="bottomFooter" style="margin: 0;padding: 0;">
  <bottomFooter></bottomFooter>
  </div>
  <div class="footerTxt" style="margin: 0;padding: 0;">
  <footerTxt></footerTxt>
  </div>
   <div class="fixed-right" :style="display">
   <ul class="menu">
    <li class="menuItem">1</li>
    <li class="menuItem">2</li>
    <li class="menuItem"  @click="setScroll">3</li>
    <li class="menuItem"  @click="cancel">4</li>
   </ul>
   </div>
  </div>
</template>

<script>
import Headers from '../Header/Header.vue'
import navv from '../nav/nav.vue'
import show from '../show/show.vue'
import bar from '../bar/bar.vue'
import service from '../service/service.vue'
import trainlist from '../trainlist/trainlist.vue'
import news from '../news-tab/news-tab.vue'
import bottomFooter from '../footer/footer.vue'
import footerTxt from '../footer/footertxt.vue'
export default {
name:'Home',
data(){
return{
    display:'',
    Top:'0',
    pre:''
    
}
},
components:{
 Headers,
 navv,
 show,
 bar,
 service,
 trainlist,
 news,
 bottomFooter,
 footerTxt
},
created(){

},
methods:{
    cancel(){
      
      this.display='display:none'
    },
    scrollEvent(e){
    this.pre=e
    
    //console.log(e.target.scrollTop)
    },
    setScroll(){
        
       
        //this.pre.target.scrollTop=0
        //this.scrollEvent(this.pre.)
        //console.log()  
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })       
    }
   
}
}
</script>

<style lang="less">

.container{
  height: 100%;
  //width: 100%;
  //position: fixed;
  //left: 0;
  //right: 0;
  //bottom: 0;
  //top: 0;
  overflow: auto;
  flex-direction: column;
  .fixed-right{
    position:fixed;
    right: 2px;
    top: 50%;
    //z-index: 1300;
    margin-top: -170px;
    //transition: all 0.2s linear;
    .menu{
        width: 50px;
        .menuItem{
            width: 50px;
            height: 86px;
            list-style: none;
            border: 1px solid red;

        }
    }
  }
}
</style>