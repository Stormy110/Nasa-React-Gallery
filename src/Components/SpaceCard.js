import React from 'react';

function SpaceCard(props) {
    const data = props.spacePic;
    console.log(data)
    return (
  
        <div className="card" id="space-card">
          <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={data[0].hdurl} alt={data[0].title}/>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{data[0].title}<i className="material-icons right">^</i></span>
            <p>{data[0].date}</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{data[0].title}<i className="material-icons right">close</i></span>
            <p>{data[0].explanation}</p>
          </div>
        </div>
        
    )
}

export default SpaceCard;