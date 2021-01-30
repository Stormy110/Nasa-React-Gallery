import React from 'react';

function Clear(props) {
    return(
        <button onClick={()=> {props.clearPics()}}>Clear Images</button>
    )
}

export default Clear