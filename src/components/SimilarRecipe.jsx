import React, { useEffect, useState } from "react";
import "./similarRecipe.css";

const RecipeCard = ({ sin }) => {
  const generateSummary = (text) => {
    // Split the text into an array of words
    const words = text.split(" ");

    // If the text is already 200 words or less, return it as it is
    if (words.length <= 50) {
      return text;
    }

    // Otherwise, construct a summary of 200 words
    let summary = "";
    for (let i = 0; i < 50; i++) {
      summary += words[i] + " ";
    }

    return summary.trim() + "..."; // Add ellipsis to indicate the summary is truncated
  };
  return (
    <div className="recipe-card">
      <img src={sin.image} alt="Recipe" className="similar-recipe-image" />
      <div className="recipe-details">
        <h2 className="recipe-title">{sin.title}</h2>
        <p
          className="recipe-description"
          dangerouslySetInnerHTML={{ __html: generateSummary(sin.summary) }}
        ></p>
        {/* <ul className="recipe-ingredients">
          <li>Ingredient 1</li>
        </ul> */}
        <button className="recipe-button">View Recipe</button>
      </div>
    </div>
  );
};

const SimilarRecipes = ({ id }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?include-tags=vegetarian&apiKey=9b4889d7bb8f4d43a3c3de74db6294b4&number=3`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.recipes);
        // setContent(res.summary);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          //   setError(err);
          console.log(err);
        }
      });
    // getData();
  }, []);

  return (
    <div className="similar-recipes">
      <h2>Similar Recipes</h2>
      <div className="recipe-cards-container">
        {data &&
          data.map((sin) => {
            return <RecipeCard sin={sin} key={sin.id} />;
          })}
      </div>
    </div>
  );
};

export default SimilarRecipes;
