import { ref } from "vue";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";


const useCollection = (coll) =>{
  let error = ref(null)
  
  const addDocument =  async (document)=>{
    error.value = null  
    try{
      const colRef = collection(db,coll)
      await colRef
      addDoc(colRef,document)
    }
    catch(err){
      error.value = "Message didnt send"
    }
  }
  return {error,addDocument}
}

export default useCollection