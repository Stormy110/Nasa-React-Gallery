import React from 'react';

function Clear(props) {
    return(
        <button type="button" className="btn btn-dark" onClick={()=> {props.clearPics()}}>Clear Images</button>
    )
}

export default Clear