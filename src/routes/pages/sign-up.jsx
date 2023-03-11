import React from 'react'
import { signInWithGooglePopup } from '../../util/firebase/firebase.util'
import { createUserDocument } from '../../util/models/user'

const SignUp = () => {
  const logGoogleUser = async ()=>{
    let {user} = await signInWithGooglePopup();
    const userDocRef= await createUserDocument(user);
    console.log(userDocRef)
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  )
}

export default SignUp