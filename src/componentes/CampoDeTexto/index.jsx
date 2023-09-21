import styled from "styled-components";
import search from "/icones/search.png"

const ContainerStyled = styled.div`
    position: relative;
    display: inline-block;
`;

const TextInputStyled = styled.input`
  color: #D9D9D9;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  width: 566px;
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  background: transparent;
  border-color: #C98CF1;
`;

const IconStyled = styled.img`
    position: absolute;
    top: 20px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoDeTexto = () => {
  return (
  <ContainerStyled>

  <TextInputStyled placeholder="O que você procura?"/>
    <IconStyled src={search} alt="ícone de Lupa"/>
  </ContainerStyled>)
};

export default CampoDeTexto;
