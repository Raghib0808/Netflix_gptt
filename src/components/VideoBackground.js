import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import {addTrailerVideo} from "../utils/movieSlice"
const VideoBackground = ({movieID}) => {


    const dispatch=useDispatch()
    const trailerVideo=useSelector(store=>store.movies?.addTrailerVideo)
    console.log(trailerVideo);
    
    
    // fetch trailer
    const getMovieVideos=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', API_OPTIONS)
        const json=await data.json();
        console.log(json);

        const filterData=json.results.filter(video=>video.type=='Trailer')
        const trailer=filterData.length?filterData[0]:json.results[0];
         console.log(trailer);
         dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(()=>{
        getMovieVideos()
    },[])


  return (
    <div className='iframe sm:pt-0 pt-28' >
<iframe
  width="560"
  height="315"
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&autohide=1&loop=1&playlist=${trailerVideo?.key}&showinfo=0&disablekb=1`}
  title="Inside Out 2 | Official Trailer"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>



      
    </div>
  )
}

export default VideoBackground
