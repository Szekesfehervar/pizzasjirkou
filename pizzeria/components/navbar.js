import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
        <div className={`navbar-menu ${isOpen && "is-active"}`}>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/profile"
            >
              Profile
            </NavLink>
          </div>
    </nav>
  );
};

export default Navbar;