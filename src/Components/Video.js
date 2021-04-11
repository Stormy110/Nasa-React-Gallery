import React from 'react';
import SpaceVid from '../Video.mp4';

function Video(props) {
    

    return (
        <video id="myVideo"  loop muted autoPlay>
            <source src={SpaceVid} type="video/mp4"/>
            Your browser does not support this video format.
        </video>
    )
}

export default Video;