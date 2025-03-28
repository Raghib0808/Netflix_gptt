import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { API_OPTIONS, kkey } from '../utils/Constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const SearchText = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        return json.results;
    }

    const handleGptSearchClick = async () => {
        // Prevent multiple submissions while loading
        if (isLoading) return;

        try {
            // Start loading
            setIsLoading(true);

            console.log(SearchText.current.value);
            const rag = SearchText.current.value
            console.log(kkey);
        
            const response = await axios({
                url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDWcVKbrdaYQztky2QtaX9VqtuzfML2-Ac',
                method: "post",
                data: {
                    "contents": [{
                        "parts": [
                            {
                                "text": "Act as a movie recommendation system and recommend some " + rag + " movies. Only give me names of 5 movies, comma separated like the example given ahead. Example Result: Gadar,Sholay,Don,Inside Out,Golmal"
                            }
                        ]
                    }]
                },
            })

            const gptMovies = response.data.candidates[0].content.parts[0].text.split(",")
            console.log(gptMovies);

            const data = gptMovies.map((movie) => searchMovieTMDB(movie))

            const tmdbResults = await Promise.all(data);
            console.log(tmdbResults);

            dispatch(addGptMovieResult({ movieName: gptMovies, movieResults: tmdbResults }))
        } catch (error) {
            console.error("Error fetching movie recommendations:", error);
            // Optional: dispatch an error action or show an error message
        } finally {
            // Stop loading regardless of success or failure
            setIsLoading(false);
        }
    };
    
    const langKey = useSelector(store => store.config.lang)
    if (lang[langKey] == null) lang[langKey] = {
        search: "Search",
        gptSearchPlaceholder: "What would you like to watch today?"
    }
    console.log(lang[langKey]);
    
    return (
        <div className='pt-[55%] md:pt-[20%] flex justify-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input 
                    ref={SearchText} 
                    type='text' 
                    className='p-4 m-4 col-span-9' 
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    disabled={isLoading}
                />
                <button 
                    className={`col-span-3 m-4 py-2 px-4 rounded-lg text-white ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-700'}`} 
                    onClick={handleGptSearchClick}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className='flex items-center justify-center'>
                            <svg 
                                className='animate-spin h-5 w-5 mr-2' 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                            >
                                <circle 
                                    className='opacity-25' 
                                    cx="12" 
                                    cy="12" 
                                    r="10" 
                                    stroke="currentColor" 
                                    strokeWidth="4"
                                ></circle>
                                <path 
                                    className='opacity-75' 
                                    fill="currentColor" 
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Loading
                        </div>
                    ) : lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar