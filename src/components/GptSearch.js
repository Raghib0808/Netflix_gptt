import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <>
        <div className='fixed -z-10 '>

<img className='h-screen object-cover w-screen' src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d-1540x866.jpg"/>
</div>
    <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      
    </div>
    </>
  )
}

export default GptSearch
