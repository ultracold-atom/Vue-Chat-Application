import {ref} from 'vue'
import {auth} from '../firebase/config'
import {signInWithEmailAndPassword} from 'firebase/auth'

const error = ref(null)

const Login = async (email,password)=>{
  error.value = null
  try {
    
    const res = await signInWithEmailAndPassword(auth,email,password)
    .catch(err=>{console.log(err.message)})
    .then(cred=>{
        console.log('Giriş Başarılı',cred.user) })

    if(!res){throw new Error("Registiration didn't happen")} 
 
   

    console.log(email,password)
    error.value = null
    return res
  } 
  catch(error) {error.value = error.message}
    
}

const useLogin = ()=>{
  return {error,Login}  
}

export default useLogin