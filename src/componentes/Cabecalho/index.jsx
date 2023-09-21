import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`;

const Cabecalho = () => {
  return <HeaderStyled>
    <img src="/imagens/logo.png" alt="Logo do Space App"/>
  </HeaderStyled>;
};

export default Cabecalho;