import styled from "styled-components";
import tags from "./tags.json";

const Botao = styled.button`
  font-size: 24px;
  color: #ffffff;
  padding: 12px;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 56px;
  align-items: center;
`;

const Tags = () => {
  return (
    <>
      <TagsContainer>
        <TagTitulo>Busque por tags:</TagTitulo>

        {tags.map((tag) => (
          <Botao key={tag.id}>{tag.titulo}</Botao>
        ))}
      </TagsContainer>
    </>
  );
};

export default Tags;
