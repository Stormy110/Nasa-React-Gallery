import React from 'react';

function SearchButton(props) {
    return (
        <>
        <button type="button" className="btn btn-dark" onClick={() => {props.fetchSpacePicGallery()}}>Search</button>
        </>
    )
}

export default SearchButton;