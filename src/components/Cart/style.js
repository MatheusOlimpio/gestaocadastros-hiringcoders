import styled, { keyframes } from "styled-components";

const cartAnimation = keyframes`
  to{
    opacity:1;
    transform:initial;
  } 
`;

export const Cart = styled.div`
  width: 400px;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 4px 8px 4px rgba(1,1,1, 0.1);
  padding: 10px 20px;
  border-radius: 0 0 10px;
  opacity: 0;
  transform: translate3d(0, -40px, 0);
  animation: ${cartAnimation} .3s forwards;
  transition: all .3s;
  position: absolute;
  right: 0;
  top: 70px;
  z-index: 2;
  background: white;
  @media screen and (max-width:700px) {
    top: 140px;
  }
`;

export const HeaderCart = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(1,1,1, 0.1);
`;

export const Title = styled.h1`
  font-size: 1rem;
  text-align: center;
  padding: 10px;
`;

export const CloseCart = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
`;
