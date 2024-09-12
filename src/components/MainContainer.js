import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.addNowPlayingMovies)

    if(!movies)return;
    
    const mainMovies=movies[0];
    console.log(mainMovies);
    const {original_title,overview,id}=mainMovies
    console.log(id);
    
    return (
    <div>
      <div >
        <VideoTitle  title={original_title} overview={overview}/>
      </div>
        <VideoBackground movieID={id}/>
      
    </div>
  )
}

export default MainContainer
