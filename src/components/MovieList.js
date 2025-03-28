import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies = [] }) => {
  return (
    <div className='p-6'>
      <h1 className='text-lg md:text-3xl font-bold py-6 text-white'>
        {title || 'Now Playing'}
      </h1>

      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Link 
                key={movie.id} 
                to={`/movie/${movie.id}`} // Use movie ID instead of title
              >
                <MovieCard 
                  posterPath={movie.poster_path} 
                  title={movie.title}
                />
              </Link>
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
