import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: center;
  align-items: center;
`;

export const Item = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgba(1,1,1, 0.1);
  width: 100%;
  cursor: pointer;
  transition: all .3s;

  :hover {
    background-color: rgba(1,1,1, 0.1);
  }
`;


export const ItemImage = styled.img`
max-width: 50px;
`;

export const ItemDetails = styled.div`

  h1 {
    font-size: .6rem;
    font-weight: 500;
  }

  p {
    font-size: 1.4rem;
  }
`;

export const ButtonRemove = styled.button`
  border: none;
  background: none;
  padding: 5px;
  cursor: pointer;
  transition: all .3s;
  :hover {
    background: rgb(1,1,1, .2);
  }
`;