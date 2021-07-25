import styled from "styled-components";

export const Title = styled.h1`
  margin: 20px 0;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.input`
  border: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 100%;
  outline: none;
  margin: 10px 0;
  box-shadow: 0 2px 4px 2px rgba(1,1,1,0.3);
  font-size: 1rem;
  ::placeholder {
    color: #222;
    transition: color .3s ease;
  }
`;

export const Button = styled.button`
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