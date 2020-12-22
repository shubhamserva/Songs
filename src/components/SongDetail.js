import React from 'react';
import {connect} from 'react-redux'


const SongDetail = ({song}) =>{
    console.log("song selected is ",song);
    if(!song){
        return <div> No songs selected</div>
    }
    console.log("song selected is ",song);
    return (<div> 
        <h3>DEtails are :</h3>
        <br></br>
        <p>
            Title: {song.title}
            Duration:{song.duration}
        </p>
        </div>);
}

const mapStateToProps = state =>{
    return {
        song: state.selectedSong
    }
}
export default connect(mapStateToProps) (SongDetail)