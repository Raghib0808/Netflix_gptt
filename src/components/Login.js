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
    const [isLoading, setIsLoading] = useState(false)
    const dispatch=useDispatch();
    const navigate=useNavigate()
    // toggles the signin/up signs
    const signuptoggler=()=>{
            // Prevent toggling while loading
            if (isLoading) return;
            Setsign(!Sign)
    }

    // using the useref hook
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleButtonClick=()=>{
        // Prevent multiple clicks while loading
        if (isLoading) return;
        
        // validation of form data
        const message=checkValidData(email.current.value,password.current.value);
        setErrorMessage(message)     
        
        if(message){
          return;
        }
        
        // Set loading state to true before authentication
        setIsLoading(true);
        
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
      setIsLoading(false);
    });
    
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+errorMessage)
    setIsLoading(false);
  });

        }
        else{
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage)
    setIsLoading(false);
  });
        }
    }

  return (
    <div className=''>
      <Header/>
      <div className='absolute'>
        <img className='fixed h-screen w-screen object-cover' src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d-1540x866.jpg"/>
      </div>
   
        <form onSubmit={(e)=>e.preventDefault()} className='text-white w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl mb-4'>{Sign?"Sign-In":"Sign-Up"}</h1>

            {!Sign&&<input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full text-black'/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full text-black' disabled={isLoading}/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full text-black' disabled={isLoading}/>
            {/* error message */}
            <p className='text-red-500 font-bold '>{ErrorMessage}</p>
            <button 
                className={`p-4 my-6 w-full rounded-lg text-black flex justify-center items-center ${isLoading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-700 hover:bg-red-600 cursor-pointer'}`}
                onClick={handleButtonClick}
                disabled={isLoading}
                type="button"
            >
                {isLoading ? (
                    <>
                        <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                        {Sign ? "Signing In..." : "Signing Up..."}
                    </>
                ) : (
                    Sign ? "Sign-In" : "Sign-Up"
                )}
            </button>

            <p className={`py-4 ${isLoading ? 'text-gray-500' : 'text-white cursor-pointer'}`} onClick={signuptoggler}>{Sign?"New to Netflix? SignUp Now":"Already registered? Sign In Now!"}</p>
        </form>
    </div>
  )
}

export default Login