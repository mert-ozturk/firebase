import React from 'react'
import {auth,provider} from '../config/Firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
const Login = () => {
 const navigate = useNavigate();   
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider)
         console.log(result);
         navigate('/')
    }
  return (
    <div>
        <p>Sign In With Google To Continue</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default Login