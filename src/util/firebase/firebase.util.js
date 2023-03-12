import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword} from 'firebase/auth';

// connecting to firebase database which is hosted;
const firebaseConfig = {
    apiKey: "AIzaSyCv06Qar-1_AC43SKrbuJQyskdzkRibpRw",
    authDomain: "cloting-store-67033.firebaseapp.com",
    projectId: "cloting-store-67033",
    storageBucket: "cloting-store-67033.appspot.com",
    messagingSenderId: "158057214471",
    appId: "1:158057214471:web:8af442eaf75e476e47b0a2"
  }
export const fireBaseApp = initializeApp(firebaseConfig);

 const provider = new GoogleAuthProvider();
 provider.setCustomParameters({
    prompt:"select_account"
 })
 export const auth = getAuth(fireBaseApp);

export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider)