import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">FoodLeo</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
