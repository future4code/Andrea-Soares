import React from "react";
import Principal from "./components/Principal/Principal";
import Header from "./components/Header/Header";
import MatchPage from "./components/MatchPage/MatchPage"
import Image from "./image/relationship (1).png";
import {ContainerApp, Conteudo, ButtonMatch, FigButton, Container} from "./styled";
import OutlinedButtons from "./components/Button-delete/Button-delete"

function App() {

  const [listMatch, setListMatch] = React.useState(false)

  const showMatchPage = () => {
    setListMatch(!listMatch)
  }
  return (
    <ContainerApp >
      <Conteudo>
        <Header />
        <ButtonMatch onClick={showMatchPage}>
          <FigButton src={Image} alt="matches" />
        </ButtonMatch>
        <Container>
        {listMatch ? <MatchPage /> : <Principal />}
        </Container>
        <OutlinedButtons />
      </Conteudo>
    </ContainerApp>
  );
}

export default App;
