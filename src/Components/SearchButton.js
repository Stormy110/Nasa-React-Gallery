import React from 'react';

function SearchButton(props) {
    return (
        <>
        <button onClick={() => {props.fetchSpacePicGallery()}}>Search</button>
        </>
    )
}

export default SearchButton;