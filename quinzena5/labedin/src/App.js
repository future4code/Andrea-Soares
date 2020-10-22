import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardFormacao from './components/CardFormacao/CardFormacao'
import Imagem from './image/image0.jpeg';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        
        <CardGrande 
          imagem={ Imagem }
          nome="Andréa Soares" 
          descricao="Oi, eu sou o Andréa. Sou estudante de front-end com React da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno 
        image= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTlHeCwlyLc7hgZdHsEhEarUYrOIOGIDETqw&usqp=CAU" 
        infos= "asoaresdev@gmail.com"
      />
      <CardPequeno 
        image= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQ36A3Iuu-tF7rldTE-ss4IVnJiJzMd9T8-w&usqp=CAU" 
        infos= "https://github.com/Asoaresdev"
      />

      <CardPequeno 
        image= "https://i.pinimg.com/736x/ba/67/c4/ba67c44d437af206e48a7f9f8048b870.jpg"
        infos= "Av. Bananinha"
      />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardFormacao 
          image= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeJA3YrqkJzNIIfzxDkT9zW32htH19SOaLTA&usqp=CAU"
          curso="Labenu"
          formacao="Front-end com React"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.pinimg.com/236x/ef/f6/4e/eff64e6acc32af1fc1e53a1c13ee40ce--lawn-tennis-sport-tennis.jpg" 
          nome="Escola de Tênis" 
          descricao="Formando jogadores amadores e atletas, promovendo saúde!" 
        />
        
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Estudando e adquirindo conhecimentos para entrar no mercado de trabalho." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
