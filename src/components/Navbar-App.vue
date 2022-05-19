<template>
  <nav>
    <div>
      <p>Hello {{user.displayName}}</p>       
      <p class="email">You logined with the {{user.email}}</p> 
    </div>  
    <button @click="logOut">LogOut</button>
  </nav>  
</template>


<script>
import { auth } from "@/firebase/config"
import { useRouter } from "vue-router"
import { signOut } from "@firebase/auth"
import getUser from "@/compasible/getUser"


export default {
  setup(){
    const router = useRouter()  
    const {user} = getUser()
    const logOut = async ()=>{
      signOut(auth)
        .catch(err=>{console.log(err.message)})
        .then(()=>{router.push({name:'home'})})
      
    }
    return {logOut,user}
  }  
}
</script>


<style>

</style>