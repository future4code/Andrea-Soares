import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="smallcard-container">
            <img src={props.image} />
            <div>
                <p>{ props.infos }</p>
            </div>
        </div>
    )
}

export default CardPequeno