
import YouTube from 'react-youtube'
import React from 'react'
import './Youtube.css'

export const Youtube = (props) => {
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const closeVideoPopup = () => {
         props.setVideoPopUp(false)   
    }
    return (
        <div className="video-popup">
            <span className="close-button" onClick={closeVideoPopup}>X</span>
            <YouTube opts={opts} videoId={props.videoId.key} />
        </div>
    )
}
