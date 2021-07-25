import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  background: #361134;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  box-shadow: 0 4px 6px 10px rgba(1,1,1,.1);
  @media screen and (max-width:700px) {
    justify-content: space-around;
    height: 130px;
  }
`;

export const Logo = styled.div`
  a {
  display: flex;
  align-items: center;
  color: #F391A0;
  margin-left: 30px;
  text-decoration: none;
  svg {
    font-size: 3rem;  
    color: #E56B70;
  }
  @media screen and (max-width:700px) {
    margin: 0;
  }
}
`;

export const StyledLink = styled(Link)`
  color: #E56B70;
  cursor: pointer;
  text-decoration: none;
`;

export const ButtonCart = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  @media screen and (max-width:700px) {
    margin-top: 20px
  }
`;