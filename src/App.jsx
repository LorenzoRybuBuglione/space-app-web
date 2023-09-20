import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";

const FundoGradiente = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(174deg, #041833 0%, #04244f 47%, #154580 100%);
`;

function App() {
  return <FundoGradiente>
    <EstilosGlobais/>
  </FundoGradiente>;
}

export default App;
