import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/Validation.js"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice.js';

const Login = () => {
    const [Sign,Setsign]=useState(false)
    const [ErrorMessage,setErrorMessage]=useState(null)
    const dispatch=useDispatch();
    const navigate=useNavigate()
    // toggles the signin/up signs
    const signuptoggler=()=>{
            Setsign(!Sign)
            
            
    }

    // using the useref hook
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleButtonClick=()=>{
        // validation of form data
        
        const message=checkValidData(email.current.value,password.current.value);
        setErrorMessage(message)     
        
        if(message){
          return;
        }
        
        if(!Sign){
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    // setting up the user profile
    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const  {uid,email,displayName,photoURL}=auth.currentUser
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))


      navigate('/browse')
      // Profile updated!
      // ...
    }).catch((error) => {
      // setErrorMessage(error)
    });
    
    console.log(user);
    navigate("/browse")
    


    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+errorMessage)
    

  });

        }
        else{
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage)
  });

        }


    }


  return (
    <div className=''>
      <Header/>
      <div className='absolute'>

      <img  className='fixed h-screen w-screen object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"/>
      </div>
   
        <form onSubmit={(e)=>e.preventDefault()} className='text-white w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl mb-4'>{Sign?"Sign-In":"Sign-Up"}</h1>

            {!Sign&&<input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full text-black'/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full text-black'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full text-black'/>
            {/* error message */}
            <p className='text-red-500 font-bold '>{ErrorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg text-black' onClick={handleButtonClick}>{Sign?"Sign-In":"Sign-Up"}</button>

            <p className='py-4 cursor-pointer' onClick={signuptoggler}>{Sign?"New to Netflix? SignUp Now":"Already registered? Sign In Now!"}</p>

        </form>
   
   
   
    </div>



  )
}

export default Login
