import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
grid-area: n;
background-color: black;
overflow: hidden;
text-align: center;
top: 0;
position: fixed;
width: 100%;
z-index: 9999;
`;

export const NavLink = styled(Link)`

display:inline-table;
color: #ffffff;
text-align: center;
padding: 10px 16px;
text-decoration: none;
font-size: 15px;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 300px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 300px) {
    display: none;
  }
`;


