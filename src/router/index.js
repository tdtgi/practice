import { createRouter, createWebHashHistory } from 'vue-router'

//import Header from '../components/Header/Header.vue'
import Home from '../components/Home/Home.vue'
const router = createRouter({

  history: createWebHashHistory(),
  routes:[
    { path: '/', redirect: '/Home' },
  {
    path: '/Home',
    component: Home
  }
]
})



export default router
