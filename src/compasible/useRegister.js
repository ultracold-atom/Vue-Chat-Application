import {ref} from 'vue'
import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'

const error = ref(null)

const signup = async (email,password,userName)=>{
  error.value = null
  try {
    
    if(userName.trim() === ''){
      throw new Error("User-Name can't be empty")  
    }
    const res = await createUserWithEmailAndPassword(auth,email,password)
    .catch(err=>{console.log(err.message)})
    .then(cred=>{
        updateProfile(cred.user,{displayName:userName})
        console.log('üye oluşturuldu',cred.user) })

    if(!res){throw new Error("Registiration didn't happen")} 
 

    console.log(userName,email,password)
    error.value = null
    return res
  } 
  
  catch(error) {error.value = error.message}
  
}

const useRegister = ()=>{
  return {error,signup}  
}

export default useRegister