<template>
  <div class="chat-window">
    <div v-if="error">{{error}}</div>  
    <div v-if="docs" class="messages">
      <div v-for="doc in formattedDocs" :key="doc.id"  class="single">
        <span class="created-at">{{doc.creationTime}}</span>  
        <span class="name">{{doc.user}}</span>  
        <span style="text-decoration:none">{{doc.message}}</span>
      </div>     
    </div>  
  </div>  
</template>


<script>
import getCollection from "@/compasible/getCollection"
import { computed } from "@vue/reactivity"
import {formatDistanceToNow} from 'date-fns'

export default {
  setup(){
    const {error,docs} = getCollection('messages') 
    const formattedDocs = computed(()=>{
      if(docs.value){
        return docs.value.map(doc=>{
          let time = formatDistanceToNow(doc.creationTime.toDate()) 
          return {...doc,creationTime:time}
        })  
      }  
    })


    return {error,docs,formattedDocs} 
  }    
}
</script>


<style scoped>

</style>