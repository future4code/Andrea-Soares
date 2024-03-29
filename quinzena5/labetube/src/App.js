import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaCaretSquareRight } from 'react-icons/fa';

function App() {

  const titulo = " Título do vídeo";
  const canal = "Canal";
  const descricao = "Descrição fjdghdkshfgk fdlghshdfçglhsdflg lfdkgjslkdfg"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

document.title = 'LabTube'
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>Lab Tube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início <FaCaretSquareRight /></li>
              <li className="botoes-meunu-vertical">Em alta <FaCaretSquareRight /></li>
              <li className="botoes-meunu-vertical">Inscrições <FaCaretSquareRight /></li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
              <h5>{canal}</h5>
              <p>{descricao}</p>

            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
              <h5>{canal}</h5>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
              <h5>{canal}</h5>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
              <h5>{canal}</h5>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
              <h5>{canal}</h5>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
              <h5>{canal}</h5>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
              <h5>{canal}</h5>
              <p>{descricao}</p>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
              <h5>{canal}</h5>
              <p>{descricao}</p>
            </div>
          </section>
        </main>

        <footer>
          <h4> Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
