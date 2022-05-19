<template>
  <form>
    <input placeholder="Write your message and press to the Enter "
    v-model="message" @keypress.enter.prevent="send" />  
  </form>  
</template>


<script>
import getUser from "@/compasible/getUser"
import useCollection from '../compasible/useCollection'
import {date} from "@/firebase/config"
import {ref} from "vue"


export default {

  setup() {
    const {user} = getUser()   
    const message = ref('') 

    const {addDocument,error} = useCollection('messages')

    const send = async ()=>{
      const chat ={
        user:user.value.displayName,
        message:message.value,
        creationTime: date
      }  
      await addDocument(chat)
      if(!error.value){
        message.value = ''
      }
      else{
        message.value = error.value  
      }
      
    }
    return {message,send}
  }
}
</script>


<style>

</style>