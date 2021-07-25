import styled from "styled-components";

export const ProductItem = styled.div`
  border: 1px solid #e0e0e0;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  transition: all .3s;
  :hover {
    box-shadow: 0 4px 8px 4px rgba(1, 1, 1, 0.1);
  }

  @media screen and (max-width: 450px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ProductName = styled.h1`
  font-size: 0.9rem;
  margin: 10px 0;
  color: #5b3758;
  font-weight: bold;
`;
export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color:  #f9627d;
 
`;
export const ProductImage = styled.img`
  position: relative;
  bottom: 0;
  max-width: 150px;
  max-height: 180px;
`;
export const ProductBuy = styled.button`
  background: #c65b7c;
  font-size: .9rem;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  margin: 10px auto;
  cursor: pointer;
`;