import React from 'react'
import {Container, Link } from "./styled"

export default class card extends React.Component {
    render(){
    return (
        <Container>
            <h2>{ this.props.name }</h2>
            <h3>Descrição:</h3>
            <p>{ this.props.description }</p>
            <h3>Fabricantes:</h3>
            <p>{ this.props.manufacturers }</p>
            <Link  href={ this.props.website }>{`Website da missão${this.props.name}`}</Link >
        </Container>
    )
}
}
