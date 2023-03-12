import React,{useState} from 'react'
import { createUserAuthWithEmailAndPassword,createUserDocument } from '../../util/models/user';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './signup.scss'

const defaultParams= {
    displayName:"",
    email:'',
    password:"",
    confirmPassword:''
}

const SignupForm = () => {
    const [formFields,setFormFields] = useState(defaultParams);
    const [error,setError]= useState({
        status:false,
        message:''
    });
    const {displayName,email,password,confirmPassword} = formFields;
    
    const handleChange = (evt) =>{
        const {name,value} = evt.target;
        setFormFields((prev)=>{
            return {...prev,[name]:value}
        })
    }
    const submitHandler=async (evt)=>{
        evt.preventDefault();
        const {displayName,email,password,confirmPassword} = formFields;
        if (password !== confirmPassword) {
            setError(()=>{
                return {
                    status:true,
                    message:'the password and confirm-password donot match'
                }
            })
            return
        } 
        try {
            const {user} = await createUserAuthWithEmailAndPassword(email,password);
            const userRef = await createUserDocument(user,{displayName})
             console.log(userRef)  
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError(()=>{
                    return {
                        status:true,
                        message:"user already exists"
                    }
                })
            }
        }
        
        
        
        
        setFormFields (defaultParams)
    }
  return (
    <div className='sign-up-container'>
        <h2>Don't have account? </h2>
        <span>SignUp with you email and password</span>
        {error.status&&<p style={{color:"red",textAlign:"center"}}>{error.message}</p>}
        <form onSubmit={submitHandler}>
            
            <FormInput label={"Display Name"} type="text" required name='displayName' onChange={handleChange} value={displayName} />
            
            <FormInput label="Email" type="email" required name="email" onChange={handleChange} value={email} />
            
            <FormInput label="Password" type="password" required name='password' onChange={handleChange} value={password} />
            
            <FormInput label="Confirm-Password" type="password" required name='confirmPassword' onChange={handleChange} value={confirmPassword}/>
            <Button type="submit">Submit</Button>
        </form>
        
    </div>
  )
}

export default SignupForm