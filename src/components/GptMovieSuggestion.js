import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {

    const gpt=useSelector(store=>store.gpt)
    const {movieResults,movieName}=gpt;
    if(!movieName)return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
    <div className=''>
        {movieName.map((movie,index)=>        <MovieList title={movieName[index]} movies={movieResults[index]}/>)}
    </div>
    </div>
  )
}

export default GptMovieSuggestion
