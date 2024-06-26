import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          RecipeSite
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
          {/* <p>{isOpen ? "close" : "open"} </p> */}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/recipes"
              className="nav-links"
              onClick={() => setIsOpen(false)}
            >
              Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutus"
              className="nav-links"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactus"
              className="nav-links"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
