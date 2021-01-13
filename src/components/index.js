import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './navbar';

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
          <NavLink to='/' exact activeStyle>
              Home
            </NavLink>
            <NavLink to='/order/pizza' activeStyle>
              Pizza
            </NavLink>
            <NavLink to='/order/calzone' activeStyle>
              Calzone
            </NavLink>
            <NavLink to = '/ingredients' activeStyle>
              Ingredinets
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  };
export default Navbar;