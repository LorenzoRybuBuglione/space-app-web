import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListStyled>
            <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png" 
            iconeInativo="/icones/home-inativo.png"
            ativo={true}>
                Início
            </ItemNavegacao>
            <ItemNavegacao 
            iconeAtivo="/icones/mais-vistas-ativo.png" 
            iconeInativo="/icones/mais-vistas-inativo.png">
                Início
            </ItemNavegacao>
        </ListStyled>
      </nav>
    </aside>
  );
};

export default BarraLateral;
