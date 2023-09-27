import { styled } from "styled-components";
import BarraLateral from "./componentes/BarraLateral";
import Cabecalho from "./componentes/Cabecalho";
import Banner from "./componentes/Banner";
import EstilosGlobais from "./componentes/EstilosGlobais";

import BannerImage from "/imagens/banner.png";
import Galeria from "./componentes/Galeria";

import fotos from './fotos.json'
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Populares from "./componentes/Galeria/Populares";

const FundoGradiente = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(174deg, #041833 0%, #04244f 47%, #154580 100%);
  img {
    max-width: 212px;
  }
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={BannerImage}
            />
            <Galeria aoFotoSelecionada={foto => setFotoSelecionada(foto)} fotos={fotosDaGaleria}/>
            <Populares/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada}/>
    </FundoGradiente>
  );
}

export default App;
