import React, { useState } from "react";
import "./RecipeScroller.css";

const RecipeScroller = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="food-item">
      <div className="top">
        <h2>Our Special Recipes</h2>
      </div>
      <div
        className="bottom"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Recipe 1"
          />
          <div className="content">
            <h2>Recipe 1</h2>
            <span>Description of Recipe 1</span>
          </div>
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Recipe 2"
          />
          <div className="content">
            <h2>Recipe 2</h2>
            <span>Description of Recipe 2</span>
          </div>
        </div>
        <div className="image">
          <img
            src="https://via.placeholder.com/350x450?text=Recipe+3"
            alt="Recipe 3"
          />
          <div className="content">
            <h2>Recipe 3</h2>
            <span>Description of Recipe 3</span>
          </div>
        </div>
        <div className="image">
          <img
            src="https://via.placeholder.com/350x450?text=Recipe+4"
            alt="Recipe 4"
          />
          <div className="content">
            <h2>Recipe 4</h2>
            <span>Description of Recipe 4</span>
          </div>
        </div>
        <div className="image">
          <img
            src="https://via.placeholder.com/350x450?text=Recipe+5"
            alt="Recipe 5"
          />
          <div className="content">
            <h2>Recipe 5</h2>
            <span>Description of Recipe 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeScroller;
