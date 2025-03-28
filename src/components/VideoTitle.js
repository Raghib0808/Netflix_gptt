import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const   VideoTitle = ({title,overview}) => {
    console.log(title,overview,'sdfhaslkfjhaldkfjhlakjfdhlkasjfdhl');
    
    const dispatch=useDispatch();
    const trailerVideo=useSelector(store=>store.movies?.addTrailerVideo)

    const [over,setover]=useState([false]);
    const view=()=>{
        setover(!over)
    }
    // console.log('d');
    
    return (
    <div className='video '>
        <h1 className='text-xl md:text-6xl text-white'>{title}</h1>
        {over && <p className='hidden lg:inline-block py-6 text-lg w-1/4'>{overview}</p>}
        <div className='vb'>
       
        <a href={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&autohide=1&loop=1&playlist=${trailerVideo?.key}&showinfo=0&disablekb=1`    }     target="_blank" rel="noopener noreferrer">
    <button className='vbutton'>Play</button>
</a>

            <button className='vbutton hidden md:inline-block' onClick={view}>More Info button</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
