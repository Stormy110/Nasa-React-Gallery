import React from 'react';

function SearchOneButton(props) {
    return (
        <>
        <button type="button" className="btn btn-dark" onClick={() => {props.fetchRandomSpacePic()}}>New Image</button>
        </>
    )
}

export default SearchOneButton;