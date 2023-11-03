import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const fontStack = 'Tahoma, Verdana, sans-serif';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  background-color: #E0FFFF; 
  width: 100%; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 0 20px; 
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  font-size: 22px;
  font-family: ${fontStack};

  text-decoration: none;
  margin-right: 15px;

  transition: all 0.3s;

  &.active {
    color: #0000FF; 
  }
`;

export const Nav = styled.nav`
  display: flex; 
  flex-direction: row;
  font-family: ${fontStack};
  
`;

export const NavLeft = styled.div`
 
`;

export const NavRight = styled.div`
  display: flex; 
  align-items: center; 
  font-family: ${fontStack};
  margin-left: auto; 
`;

export const UserMenuStyle = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; 
  font-family: ${fontStack};
  
  p {
    margin-right: 10px; 
    color: black;
    font-weight: bold; 
  }

  button {
    font-weight: bold; 
    color: black;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;

    &:hover, &:focus {
      color: white;
      background-color: #003366; 
    }
  }
`;