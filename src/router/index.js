import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatRoom from '../views/Chat-Room.vue'
import { auth } from '@/firebase/config'


const authControl =(to,from,next)=>{
  const user = auth.currentUser
  if(!user){
    next({name:'home'})
  }else{
    next()
  }
  
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chat',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter:authControl
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
