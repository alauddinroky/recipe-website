import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarrot,
  faDrumstickBite,
  faFish,
} from "@fortawesome/free-solid-svg-icons";
import "./Recipes.css";
import SearchInput from "../SearchInput";
function Recipes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [type, setType] = useState("vegetarian");

  useEffect(() => {
    fetchData(type);
  }, [type]);

  const fetchData = (recipeType) => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9b4889d7bb8f4d43a3c3de74db6294b4&number=9&query=${recipeType}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const handleButtonClick = (recipeType) => {
    setType(recipeType);
  };

  return (
    <div className="recipe-page">
      <div className="recipe-buttons">
        <button
          onClick={() => handleButtonClick("vegetarian")}
          className="recipe-button"
        >
          <FontAwesomeIcon icon={faCarrot} /> Vegetarian
        </button>
        <button
          onClick={() => handleButtonClick("meat")}
          className="recipe-button"
        >
          <FontAwesomeIcon icon={faDrumstickBite} /> Meat
        </button>
        <button
          onClick={() => handleButtonClick("seafood")}
          className="recipe-button"
        >
          <FontAwesomeIcon icon={faFish} /> Seafood
        </button>
      </div>
      <SearchInput />
      {loading && <div className="recipe-loading">Loading...</div>}
      {error && <div className="recipe-error">Error fetching data</div>}

      <div className="recipe-list">
        {data.map((result) => (
          <NavLink
            to={`/details/${result.id}`}
            key={result.id}
            className="recipe-card"
          >
            <img
              src={result.image}
              alt={result.title}
              className="recipe-image"
            />
            <div className="recipe-content">
              <span className="recipe-title">{result.title}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
