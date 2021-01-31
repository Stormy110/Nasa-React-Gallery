import React from 'react';
import Card from './Card';

function Gallery(props) {
    const data = props.spaceData;
    console.log(data)

    return (
        <div className="gallery" >
            {/* <Card hdurl={data[0][0].hdurl} title={data[0][0].title} date={data[0][0].date} explanation={data[0][0].explanation}/> */}
                {
                    data.map((s) => (
                        <p className="gallery-cards" key={s[0].url}><Card hdurl={s[0].hdurl} title={s[0].title} date={s[0].date} explanation={s[0].explanation}/></p>
                    ))
                } 
            
        </div>
    )
}

export default Gallery;