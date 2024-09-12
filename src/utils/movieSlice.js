import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{},
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.addNowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.addTrailerVideo=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies}=movieSlice.actions;
export default movieSlice.reducer;
