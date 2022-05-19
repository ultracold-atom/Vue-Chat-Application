import {ref} from 'vue'
import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const user = ref(auth.currentUser)

onAuthStateChanged(auth,(k)=>{
    console.log("Kullanıcı durum değiştirdi",k)
    user.value = k
})

const getUser =()=>{
  return {user}
}

export default getUser