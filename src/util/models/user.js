import {getFirestore,doc,getDoc,setDoc, collection} from 'firebase/firestore'
import { fireBaseApp } from '../firebase/firebase.util'

// it directly points to database

const db = getFirestore(fireBaseApp);

const createUserDocument = async (user)=>{
    // helps to point specic document in collection, if not exists it is going to create one
    const userRefdoc = doc(db,'user',user.uid);
    // getting data from document
    const userSnapshot = await getDoc(userRefdoc);
    if(!userSnapshot.exists()){
         const {displayName,email} = user;
         const createdAt = new Date();
         try {
            await setDoc(userRefdoc,{
                displayName,
                email,
                createdAt
            })
         } catch (error) {
            console.log(error.message)
         }
    }
    return userSnapshot
    
}    
export {
    createUserDocument
}