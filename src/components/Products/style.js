import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 500;
  padding-bottom: 20px;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 600px) and (max-width: 900px){
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media screen and (max-width: 600px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
`;
