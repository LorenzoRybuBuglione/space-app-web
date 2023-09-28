import styled from "styled-components";

const Rodape = () => {
  const FooterStyled = styled.footer`
    display: flex;
    background-color: #04244f;
    flex-direction: row;
    justify-content: space-between;
    padding: 22px;
  `;

  const IconesContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
      margin-right: 22px;
    }
  `;

  const Texto = styled.p`
    color: #ffffff;
    font-size: 16px;
    margin: 0;
  `;

  return (
    <FooterStyled>
      <IconesContainer>
        <li>
          <img src="/imagens/sociais/facebook.svg" alt="Facebook" />
        </li>
        <li>
          <img src="/imagens/sociais/twitter.svg" alt="Twitter" />
        </li>
        <li>
          <img src="/imagens/sociais/instagram.svg" alt="Instagram" />
        </li>
      </IconesContainer>
      <Texto>Desenvolvido por Lorenzo.</Texto>
    </FooterStyled>
  );
};

export default Rodape;
