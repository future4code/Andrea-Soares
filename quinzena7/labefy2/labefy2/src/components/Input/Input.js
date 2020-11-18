import React from 'react'

export default class Input extends React.Component{
    render(){
    return (
        <div>
            <label>{this.props.text}</label>
            <input 
            onChange = {this.props.onChange}
            type="text"
            placeholder = {this.props.placeholder} />
        </div>
    )
}
}
