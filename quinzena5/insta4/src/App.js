import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'


const Formulario = styled.div`
display:flex;
flex-direction: column;
align-items:center;

`
const Botao = styled.button`
width: 100px;
background-color: #66C4FF;
align-items:center;
border-radius:8px;
`
const Campo = styled.input`
height:20px;
margin-bottom:5px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50?a=1',
        fotoPost:'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario:'Bananinha',
        fotoUsuario:'https://picsum.photos/50/50?a=2',
        fotoPost:'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario:'Bananinha2',
        fotoUsuario:'https://picsum.photos/50/50?a=3',
        fotoPost:'https://picsum.photos/200/150?a=3' 
      }
    ],
    valorInputNome:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:""
  };
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    const novosPosts = [...this.state.posts, novoPost];
    this.setState({
      posts: novosPosts,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => { 
      return(
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    });
    return (
      <div className={'app-container'}>
        {listaDePosts}
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?a=1'}
        />

        <Post
          nomeUsuario={'Bananinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=2'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />

        <Post
          nomeUsuario={'Bananinha2'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=3'}
        /> */}

        <Formulario>
          <Campo type="text"
            value={ this.state.valorInputNome }
            onChange={ this.onChangeInputNome }
            placeholder={"Usuario"}
          />
          <Campo 
            value={ this.state.valorInputFotoUsuario }
            onChange={ this.onChangeInputFotoUsuario }
            placeholder={"Foto Usuario"}
          />
          <Campo
            value={ this.state.valorInputFotoPost }
            onChange={ this.onChangeInputFotoPost }
            placeholder={"Post"}
          />
          <Botao onClick={ this.adicionaPost }>Postar</Botao>
        </Formulario>
      </div>

    );
  }
}

export default App;
