import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  console.log(movies    );
  
  return (
    <div className=' bg-black'>
      <div className='-mt-[20%]   relative z-20 '>

      <MovieList title={"Now Playing"} movies={movies.
addNowPlayingMovies
}/>
      <MovieList title={"Trending"} movies={movies.
popularMovies
}/>
      <MovieList title={"Popular"} movies={movies.
addNowPlayingMovies
}/>
      <MovieList title={"Upcoming Movies"} movies={movies.
addNowPlayingMovies
}/>
      <MovieList title={"Horror"} movies={movies.
addNowPlayingMovies
}/>
    </div>
</div>
  )
}

export default SecondaryContainer
