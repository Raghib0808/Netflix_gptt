import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies = [] }) => {
  console.log('Movies:', movies);

  return (
    <div className='p-6 '>
      <h1 className='text-lg md:text-3xl font-bold py-6 text-white'>
        {title || 'Now Playing'}
      </h1>
      
      {/* Apply the custom scrollbar-hide class to hide the scrollbar */}
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard 
                key={movie.id || movie.title} 
                posterPath={movie.poster_path} 
                title={movie.title}
              />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
