import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import SimilarRecipes from "../components/SimilarRecipe";
function Details() {
  const [data, setData] = useState("");
  const params = useParams();
  const numParams = Number(params.type);
  const [content, setContent] = useState(null);
  const [active, setActive] = useState(true);
  const handleClick = (data) => {
    setContent(data);
    setActive(!active);
  };
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${numParams}/information?apiKey=9b4889d7bb8f4d43a3c3de74db6294b4&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setContent(res.summary);
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
  async function getData() {
    // const fetchData = localStorage.getItem("apiData");
    // const finalData = await JSON.parse(fetchData);
    // const matchedData = finalData.find((x) => x.id === numParams);
    // setData(matchedData);
    // setContent(matchedData.summary);
  }
  return (
    <>
      <div className="recipe-post">
        <div className="image">
          <img src={data.image} alt={data.title} className="post-image" />
        </div>
        <div className="post-details">
          <h2 className="post-title">{data.title}</h2>
          {/* <p className="post-meta">By {author} on {date} alauddin</p> */}
          <div className="button">
            <button
              className={active ? "active" : ""}
              onClick={() => handleClick(data.summary)}
            >
              Ingredients
            </button>
            <button
              className={!active ? "active" : ""}
              onClick={() => handleClick(data.instructions)}
            >
              Instructions
            </button>
          </div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
      {data.id && <SimilarRecipes id={data.id} />}
    </>
    // <div className="blog-post">
    //   <h2 className="post-title">{data.title}</h2>
    //   <p className="post-meta">{/* By {author} on {date} */}</p>
    //   <div
    //     className="post-content"
    //     dangerouslySetInnerHTML={{ __html: data.instructions }}
    //   ></div>
    // </div>
  );
}

export default Details;
