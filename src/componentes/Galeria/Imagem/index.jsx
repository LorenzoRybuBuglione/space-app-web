import iconeFavorito from "/icones/favorito-ativo.png";
import iconeNaoFavorito from "/icones/favorito.png";
import expandir from "/icones/expandir.png";
import styled from "styled-components";

const FigureStyled = styled.figure`
  width: ${(props) => (props.$extendida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    min-width: 460px;
    border-radius: 20px 20px 0 0;
  }
`;

const CaptionStyled = styled.figcaption`
  background-color: #001634;
  color: #ffffff;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  padding: 16px;
  h3 {
    font-family: "GandhiSansBold";
  }
  h4 {
    flex-grow: 1;
  }
  h3,
  h4 {
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
  :hover {
    cursor: pointer;
  }
`;

const Imagem = ({ foto, expandida = false, aoZoomClick }) => {
  return (
    <FigureStyled $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <CaptionStyled>
        <h3>{foto.titulo}</h3>
        <FooterStyled>
          <h4>{foto.fonte}</h4>
          <ButtonContainer>
            <ButtonStyled>
              <img src={iconeNaoFavorito} alt="Favorito" />
            </ButtonStyled>
            {!expandida && (
              <ButtonStyled
                aria-hidden={expandida}
                onClick={() => aoZoomClick(foto)}
              >
                <img src={expandir} alt="Expandir" />
              </ButtonStyled>
            )}
          </ButtonContainer>
        </FooterStyled>
      </CaptionStyled>
    </FigureStyled>
  );
};

export default Imagem;
