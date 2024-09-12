import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
const usePopularMovies=()=>{
      // movies api
  const dispatch=useDispatch();

  const getPopularMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS)
    const json=await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    getPopularMovies();
  },[])

}

export default usePopularMovies;