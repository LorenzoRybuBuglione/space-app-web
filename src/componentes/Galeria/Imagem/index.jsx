import iconeFavorito from "/icones/favorito-ativo.png";
import iconeNaoFavorito from "/icones/favorito.png";
import expandir from "/icones/expandir.png";
import styled from "styled-components";

const FigureStyled = styled.figure`
  width: ${props => props.$extendida ? '90%' : '460px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const CaptionStyled = styled.figcaption`
  background-color: #001634;
  color: #FFFFFF;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  padding: 16px;
  h3 { 
    font-family: 'GandhiSansBold';
  }
  h4 {
    flex-grow: 1;
  }
  h3, h4 {
    margin: 0;
    font-size: 16px;
  }
`;

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
`;

const IconStyled = styled.img``;

const Imagem = ({ titulo, fonte, path }) => {
  return (
    <FigureStyled>
      <img src={path} alt={titulo} />
      <CaptionStyled>
        <h3>{titulo}</h3>
        <FooterStyled>
          <h4>{fonte}</h4>
          <ButtonContainer>
            <ButtonStyled>
              <IconStyled src={iconeNaoFavorito} alt="Favorito" />
            </ButtonStyled>
            <ButtonStyled>
              <img src={expandir} alt="Expandir" />
            </ButtonStyled>
          </ButtonContainer>
        </FooterStyled>
      </CaptionStyled>
    </FigureStyled>
  );
};

export default Imagem;
