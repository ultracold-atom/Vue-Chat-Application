<template>
  <div class="home container">
    <h2>Cockatoo Chat App</h2>
    <div v-if="isMember">
      <Login @login="startChat"/>
      <p>To Sign Up : Go to the <span @click="isMember = false">Sign Up</span> page</p>
    </div>
    <div v-else>
      <Register @register="startChat" />
      <p>To Enter : Go to the <span @click="isMember = true">Enter</span> page</p>
    </div> 
  </div>
</template>


<script>
import Register from '../components/Register-App.vue'
import Login from '../components/Login-App.vue'
import {ref} from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { Register, Login},
    setup(){
      const isMember = ref(true)
      const router = useRouter()
 
      const startChat =()=>{
        router.push({name:'ChatRoom'})
      }

      return {isMember,startChat}
    }
}
</script>

<style>
  .home{
    text-align: left;;
    padding: 20px 50px;
  }
</style>
