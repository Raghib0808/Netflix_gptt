import React from 'react'
import { IMG_CDN } from '../utils/Constants'
import Shimmer from './Shimmer'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
  return (
    <div className='w-36 md:w-48 pr-4' >
        <img alt='Movie card' src={IMG_CDN+posterPath}/>
      
    </div>
  )
}

export default MovieCard
