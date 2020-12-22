import { combineReducers } from  'redux'


const songsReducer =() =>{
    return [
        {   title: 'yoyo', duration: '1:00'},
        {   title: 'asas', duration: '2:00'},
        {   title: 'rf', duration: '3:00'},
        {   title: 'h5trth', duration: '4:00'},
        {   title: 'rtj', duration: '5:00'}
    ]
}


const selectedSongReducer = (selctedSong = null , action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selctedSong;
}

export default combineReducers(
    {
    songs: songsReducer,
    selectedSong: selectedSongReducer
})