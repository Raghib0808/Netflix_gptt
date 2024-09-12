import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptMovies:null,
        movieName:null,
        movieResults:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieResults,movieName}=action.payload;
            state.movieName=movieName;
            state.movieResults=movieResults;
        }
    } 
})

export const {toggleGptSearchView,addGptMovieResult}=gptSlice.actions

export default gptSlice.reducer;