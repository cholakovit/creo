import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios"

//https://itunes.apple.com/search?term=radiohead

const initialState = {
    songs: [],
    status: import.meta.env.VITE_IDLE, //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
}

export const requestSongs = createAsyncThunk('songs/songs', async ({ requestSong }) => {
    // try {
    //     const songs = await axios.get(`${import.meta.env.VITE_SONGS}/search?term=${requestSong}&_sort=collectionName&_order=asc&_limit=${import.meta.env.VITE_FIVE}`)
    //     return songs.data
    // } catch(err) {
    //     return err.message
    // }

    const songs = await axios.get(`${import.meta.env.VITE_SONGS}/search?term=${requestSong}&_sort=collectionName&_order=asc&_limit=${import.meta.env.VITE_FIVE}`)
    return songs.data
    
})

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: { },
    extraReducers(builder) {
        builder
        .addCase(requestSongs.pending, (state, action) => {
            state.status = import.meta.env.VITE_LOADING
        })
        .addCase(requestSongs.fulfilled, (state, action) => {
            state.songs = action.payload
            state.status = import.meta.env.VITE_SUCCESS
        })
        .addCase(requestSongs.rejected, (state, action) => {
            state.status = import.meta.env.VITE_FAILED
            state.error = action.error.message
        })
    }
})

export const getStatus = (state) => state.songs.status
export const getSongs = (state) => state.songs.songs
export const getError = (state) => state.songs.error

export const {  } = songsSlice.actions

export default songsSlice.reducer