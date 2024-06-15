import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";
import SearchInput from "./SearchInput";
function Popular() {
  const [data, setData] = useState("");

  useEffect(() => {
    try {
      const apiData = localStorage.getItem("apiData");
      if (apiData) {
        const finalData = JSON.parse(apiData);
        setData(finalData);
      } else {
        getRecipe();
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const getRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=9b4889d7bb8f4d43a3c3de74db6294b4&&number=9`
      );
      const result = await response.json(response);
      setData(result.recipes);
      localStorage.setItem("apiData", JSON.stringify(result.recipes));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="food-item" id="recipes">
      <div className="top">
        <SearchInput />
        <h2>Popular Food Items</h2>
      </div>
      <div className="bottom">
        {data &&
          data.map((result) => {
            return (
              <NavLink
                to={`/details/${result.id}`}
                key={result.id}
                className="image"
              >
                {/* <li key={result.id}>{result.title}</li> */}
                <img src={result.image} alt="" />
                <div className="content">
                  <span>{result.title}</span>
                  {/* <h2>$2.99</h2> */}
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
    // <div className="food-item">
    //   <div className="top">
    //     <h2>Popular Food Items</h2>
    //   </div>
    //   <Splide
    //     options={{
    //       perPage: 3,
    //       arrow: false,
    //       pagination: false,
    //       gap: "3rem",
    //     }}
    //   >
    //     {data &&
    //       data.map((result) => {
    //         return (
    //           <SplideSlide>
    //             <NavLink
    //               to={`/details/${result.id}`}
    //               key={result.id}
    //               className="image"
    //             >
    //               {/* <li key={result.id}>{result.title}</li> */}
    //               <img src={result.image} alt="" />
    //               <div className="content">
    //                 <span>{result.title}</span>
    //                 {/* <h2>$2.99</h2> */}
    //               </div>
    //             </NavLink>
    //           </SplideSlide>
    //         );
    //       })}
    //   </Splide>
    // </div>
  );
}

export default Popular;
