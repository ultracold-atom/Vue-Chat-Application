<template>
  <form action="" @submit.prevent="signUp">
    <h4>Sign Up Screen</h4> 
    <input type="text" placeholder="Enter User Name" v-model="userName"> 
    <input type="text" placeholder="Enter E-mail" v-model="email"> 
    <input type="password" placeholder="Enter Password" v-model="password">
    <button>Sign Up</button> 
  </form>
  <div class="error">
    {{error}}  
  </div>  

</template>

<script>
import {ref} from 'vue'
import useRegister from '../compasible/useRegister'

export default {
  
  setup(props,context){
    const userName = ref('')
    const email = ref('')  
    const password = ref('')

    const {error,signup} = useRegister()  // const {error,signup}

    const signUp = async()=>{
     
      await signup(email.value,password.value,userName.value) 
      if(!error.value){
        context.emit('register')
      }
    }
  return {userName,email,password,signUp,error}    
  }

}
</script>