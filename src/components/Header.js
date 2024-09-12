import React from 'react'
import { signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/UserSlice'; 
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/Constants';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch =useDispatch()
  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

  const handleGptSearch=()=>{
       dispatch(toggleGptSearchView())
  }

  const navigate=useNavigate()
  const handlesignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

 const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value))
       
 }

  useEffect(()=>{
    console.log("use Effect called");
    
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign in/sign up cases
        const {uid,email,displayName} = user
        
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

// unsubscribe when component unmounts
    return ()=>unsubscribe();
  },[])


  return (
    <div className="flex sm:flex-row sm:items-center flex-col justify-between absolute w-screen px-8 py-0 bg-gradient-to-b from-black z-10 bg-black">

         <img className='sm:w-44 w-32 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
'/>

    {user && <div className='flex'>
      {showGptSearch && <select onChange={handleLanguageChange} className='py-2 px-2 m-2 text-white bg-red-800 rounded-lg'>
        {SUPPORTED_LANGUAGES.map(lang=><option key={lang.indentifier} value={lang.indentifier}>{lang.name}</option>)}
      </select>}

       <button onClick={handleGptSearch} className='py-2 px-4 m-2 text-white bg-purple-800 rounded-lg'>{showGptSearch?"Home Page":"GPT-Search"}</button>
       <button onClick={handlesignout} className='font-bold text-white'>Sign Out</button>
    </div>}


    </div>
  )
}


export default Header
