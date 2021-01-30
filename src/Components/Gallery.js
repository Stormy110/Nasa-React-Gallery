import React from 'react';
import Card from './Card';

function Gallery(props) {
    const data = props.spaceData;

    return (
        <div className="gallery" >
            <ul>
                {
                    data.map((s) => (
                        <li key={s[0].url}><Card hdurl={s[0].hdurl} title={s[0].title} date={s[0].date} explanation={s[0].explanation}/></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Gallery;