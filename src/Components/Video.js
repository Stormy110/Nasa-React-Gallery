import React from 'react';
import SpaceVid from '../Video.mp4';

function Video(props) {
    const video = document.getElementById("myVideo")
    video.playbackRate = 0.5;
    return (
        <video id="myVideo"  playbackRate={0.5} loop muted autoPlay>
            <source src={SpaceVid} type="video/mp4"/>
            Your browser does not support this video format.
        </video>
    )
}

export default Video;