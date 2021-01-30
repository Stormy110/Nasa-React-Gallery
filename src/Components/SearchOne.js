import React from 'react';

function SearchOneButton(props) {
    return (
        <>
        <button onClick={() => {props.fetchRandomSpacePic()}}>New Fact</button>
        </>
    )
}

export default SearchOneButton;