import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieListGrid = ({ title, movies = [], onMovieClick }) => {
  return (
    <div className="p-6">
      <h1 className="text-lg md:text-3xl font-bold py-6 text-white">
        {title || 'Now Playing'}
      </h1>
    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div 
              key={movie.id} 
              onClick={() => onMovieClick(movie.id)} // Ensure state updates
              className="cursor-pointer"
            >
              <Link to={`/movie/${movie.id}`}>
                <MovieCard posterPath={movie.poster_path} title={movie.title} />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-white col-span-full text-center">No movies available</p>
        )}
      </div>
    </div>
  );
};

export default MovieListGrid;
