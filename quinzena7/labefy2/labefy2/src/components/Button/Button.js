import React from 'react';
import {ButtonStyled} from "./styled";

export default class Button extends React.Component {
    render(){
    return (
        <div>
            <ButtonStyled onClick = {this.props.onClick}>
                {this.props.text}
            </ButtonStyled>
        </div>
    )
}
}


