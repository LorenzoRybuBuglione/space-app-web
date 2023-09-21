import styled from "styled-components";

const ListItemStyled = styled.li`
    
`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false}) => {
    return ( 
        <ListItemStyled>
        <img src={ativo ? iconeAtivo : iconeInativo}/>
        {children}
        </ListItemStyled>
    )
}

export default ItemNavegacao;