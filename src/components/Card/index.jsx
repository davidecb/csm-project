import React from 'react';
import './Card.scss';

function Card(props) {
   
    return (        
        <div key={props.index} className="card">
            <h2>{props.name}</h2>
        </div>
    );
}

export default Card;