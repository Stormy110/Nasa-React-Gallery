import React from 'react';

function Card(props) {
    return (
       
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light pic-small">
                <img className="activator" src={props.hdurl} alt={props.title}/>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">^</i></span>
            <p>{props.date}</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
            <p>{props.explanation}</p>
          </div>
        </div>
    )
}

export default Card;