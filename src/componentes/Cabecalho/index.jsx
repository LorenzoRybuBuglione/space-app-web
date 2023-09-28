import styled from "styled-components";
import CampoDeTexto from "../CampoDeTexto";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`;

const Cabecalho = ({ setFiltro }) => {
  return (
    <HeaderStyled>
      <img src="/imagens/logo.png" alt="Logo do Space App" />
      <CampoDeTexto setFiltro={setFiltro} />
    </HeaderStyled>
  );
};

export default Cabecalho;
