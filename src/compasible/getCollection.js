import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, onSnapshot,orderBy,query} from 'firebase/firestore'

const getCollection = (coll)=>{
  const docs = ref(null)
  const error = ref(null)  

  let collRef = collection(db,coll)
  const q = query(collRef,orderBy('creationTime'))
  onSnapshot(q,(snapshot)=>{
    let results = []
    snapshot.docs.forEach(doc => {
      doc.data().creationTime && results.push({...doc.data(),id:doc.id})   
    });  
    docs.value = results
    error.value = null
  },err=>{
      docs.value = null
      error.value = 'Datas couldnt get'
      console.log(err)
  })
  return {error,docs}
}

export default getCollection