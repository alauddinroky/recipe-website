import React, { useEffect, useRef } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Recipe</h1>
        <p>
          Explore our vast collection of delicious recipes and culinary tips.
        </p>
        <a href="#recipes">
          <button className="cta-button">
            Start Cooking
            {/* <a href="#recipes">Start Cooking</a> */}
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
