import { styled } from "styled-components";
import BarraLateral from "./componentes/BarraLateral";
import Cabecalho from "./componentes/Cabecalho";
import Banner from "./componentes/Banner";
import EstilosGlobais from "./componentes/EstilosGlobais";

import BannerImage from "/imagens/banner.png"

const FundoGradiente = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(174deg, #041833 0%, #04244f 47%, #154580 100%);
  img {
    max-width: 212px;
  }
`;

function App() {
  return <FundoGradiente>
    <EstilosGlobais/>
    <Cabecalho/>
    <BarraLateral/>
    <Banner texto='A galeria mais completa de fotos do espaço!' backgroundImage={BannerImage}/>
  </FundoGradiente>;
}

export default App;
