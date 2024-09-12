import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <>
        <div className='fixed -z-10 '>

<img className='h-screen object-cover w-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"/>
</div>
    <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      
    </div>
    </>
  )
}

export default GptSearch
