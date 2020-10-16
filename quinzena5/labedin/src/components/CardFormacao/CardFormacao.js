import React from 'react';
import './CardFormacao.css'

function CardFormacao(props){
    return(
        <div className="card-formation-container">
            <img src={props.image} alt="imagem de icone" />
            <div>
                <h4>{ props.curso }</h4>
                <p>{ props.formacao }</p>
            </div>
        </div>
    )
}

export default CardFormacao