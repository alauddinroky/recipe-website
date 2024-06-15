import React, { useEffect, useState } from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { NavLink } from "react-router-dom";
import RecipeScroller from "../components/ScrollRecipe/ScrollRecipe";
import AboutUs from "../components/About/AboutUs";
import HeroSection from "../components/HeroSection/HeroSection";
import SearchInput from "../components/SearchInput";

function Home() {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   return controller.abort();
  // }, []);
  function handleSubmit(e) {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9b4889d7bb8f4d43a3c3de74db6294b4&number=10&query=${value}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          setError(err);
          console.log(err);
        }
      });
  }

  return (
    <>
      {data ? (
        data.map((sin) => {
          // <li>{d.title}</li>;
          console.log(sin.title);
          return (
            <>
              <h1>{sin.title}</h1>
              <img src={sin.image} alt="" />
            </>
          );
        })
      ) : (
        <>
          <HeroSection />
          <Popular />
          {/* <RecipeScroller /> */}
          <AboutUs />
          {/* <Veggie /> */}
        </>
      )}
    </>
  );
}

export default Home;
