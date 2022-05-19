<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <ChatForm/>    
  </div> 
</template>

<script>
import Navbar from '../components/Navbar-App.vue'
import ChatForm from '../components/Chat-Form.vue'
import ChatWindow from '@/components/Chat-Window.vue'


export default {
  components:{ Navbar, ChatForm, ChatWindow }  
}
</script>


<style>

</style>