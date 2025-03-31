import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieListGrid from './MovieListGrid';
import VideoBackground from './VideoBackground';

const Similar = () => {
    
    const { id: movieId } = useParams(); // Get movieId from URL params
    const [movies, setMovies] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(movieId); // Set initial movie ID from params

    useEffect(() => {
        if (!movieId) return;

        setSelectedMovieId(movieId); // Update video when movieId changes

        const fetchSimilarMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`, 
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjA4MDAzNTA3MTI0Y2IxNjJlYjEyNDZmNjU5NmQxNiIsIm5iZiI6MTcyNjA3ODMxNy4xNjMsInN1YiI6IjY2ZTFkZDZkM2VmZWJhODk4MGVjYzk4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5I-XqAdhvyQfUkqZGBefubgGlB2h8H7rl9Jacuq7kw8`
                        }
                    }
                );
                const data = await response.json();
                if (data.results) {
                    setMovies(data.results);
                }
            } catch (error) {
                console.error("Error fetching similar movies:", error);
            }
        };

        fetchSimilarMovies();
    }, [movieId]); // Re-fetch when movieId from URL changes
   
console.log(selectedMovieId,' working work gin wok work ding o wong wong own gwon  working  wokring');
console.log('same as aboe arghib');


    return (
        <div className="relative z-50">
            
             <VideoBackground movieID={selectedMovieId} />  
            
             <MovieListGrid 
                title="Similar Movies" 
                movies={movies} 
                onMovieClick={(id) => setSelectedMovieId(id)} 
            />
        </div>
    );
};

export default Similar;
