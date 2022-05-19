import {initializeApp} from 'firebase/app'
import {getFirestore,serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA-u7UWAH28Aqfq9an10aDwaZKTLKMdLUo",
    authDomain: "chat-app-91ddb.firebaseapp.com",
    projectId: "chat-app-91ddb",
    storageBucket: "chat-app-91ddb.appspot.com",
    messagingSenderId: "526209344288",
    appId: "1:526209344288:web:5d817a88f4fcb24f5ead45"
  };

initializeApp(firebaseConfig) 
const db = getFirestore(); 
const auth = getAuth()

const date = serverTimestamp()

export {db,date,auth}