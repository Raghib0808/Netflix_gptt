import React, { useState } from 'react'

const VideoTitle = ({title,overview}) => {
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
            <button className='vbutton'>Play</button>
            <button className='vbutton hidden md:inline-block' onClick={view}>More Info button</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
