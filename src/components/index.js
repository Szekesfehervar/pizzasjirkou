import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbar';

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/pizza' activeStyle>
              Pizza
            </NavLink>
            <NavLink to='/calzone' activeStyle>
              Calzone
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  };
export default Navbar;