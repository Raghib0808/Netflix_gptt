import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import axios from 'axios';
import { API_OPTIONS, kkey } from '../utils/Constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const SearchText=useRef(null);
    const searchMovieTMDB=async(movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
        const json=await data.json()
        return json.results;
    }

    const handleGptSearchClick = async () => {
            console.log(SearchText.current.value);
            const rag=SearchText.current.value
        console.log(kkey);
        
       const response=await axios({
            url:'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key='+kkey,
            method:"post",
            data:{"contents":[{"parts":[{"text":"Act as a movie recommendation system and recommond some "+rag +" movies . Only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Gadar,Sholay,Don,Inside Out,Golmal"}]}]},
           
            
        })

        const gptMovies=response.data.candidates[0].content.parts[0].text.split(",")
        console.log(  gptMovies);

        const data=gptMovies.map((movie)=>searchMovieTMDB(movie))


        const tmdbResults=await Promise.all(data);
        console.log(tmdbResults);

        dispatch(addGptMovieResult({movieName:gptMovies,movieResults:tmdbResults}))
        

        
    };
    
    const langKey=useSelector(store=>store.config.lang)
    if(lang[langKey]==null)lang[langKey]={
        
        search:"Search",
        gptSearchPlaceholder:"What would you like to watch today?"
        
    }
    console.log(lang[langKey]);
    
  return (
    <div className='pt-[55%] md:pt-[20%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()} >
            <input ref={SearchText} type='text ' className=' p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
