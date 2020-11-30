import React from "react";
// import './App.css';
import Principal from "./components/Principal/Principal";
import Header from "./components/Header/Header";
import MatchPage from "./components/MatchPage/MatchPage"
import Image from "./image/relationship (1).png";
import {ContainerApp, Conteudo, ButtonMatch, FigButton, ContainerTooltip} from "./styled";

function App() {

  const [listMatch, setListMatch] = React.useState(false)

  const showMatchPage = () => {
    console.log("Hello!")
    setListMatch(!listMatch)
}
  return (
    <ContainerApp >
      <Conteudo>
        <Header />
        <ButtonMatch onClick={showMatchPage}>
          <FigButton src={Image} alt="matches" />
        </ButtonMatch>
        {listMatch ? <MatchPage /> : <Principal />}
        
        <button>deletar a vergonha</button>
      </Conteudo>
    </ContainerApp>
  );
}

export default App;
