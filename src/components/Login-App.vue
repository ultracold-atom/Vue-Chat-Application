<template>
  <form action="" @submit.prevent="login">
    <h4>Enter Screen</h4> 
    <input type="text" placeholder="Enter E-mail" v-model="email"> 
    <input type="password" placeholder="Enter Password" v-model="password">
    <button>Enter</button> 
  </form> 
  <div class="error">
    {{error}}  
  </div> 

</template>

<script>
import {ref} from 'vue'
import useLogin from '@/compasible/useLogin'

export default {
  
  setup(props,context){
    const email = ref('')  
    const password = ref('')

    const {error,Login} = useLogin()

    const login =()=>{
      Login(email.value,password.value) 
      if(!error.value){
        context.emit('login') } 
    }
  return {email,password,login,error}    
  }

}
</script>