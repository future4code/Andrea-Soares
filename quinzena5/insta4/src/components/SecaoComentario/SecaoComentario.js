import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		mensagem:" ",
	}

	onChangeComentario = (event) => {
		this.setState({mensagem:event.target.value})
	}

	render() {
		console.log(this.state.mensagem);
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.mensagem}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
