import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function Search() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = useParams();
  const searchQuery = query.query;

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9b4889d7bb8f4d43a3c3de74db6294b4&number=10&query=${searchQuery}`
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
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="loading">
        <div
          style={{
            width: "3rem",
            height: "3rem",
            border: "5px solid lightgrey",
            borderTop: "5px solid blue",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        Loading...
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    return <div className="error">No data found. </div>;
  }

  return (
    <div className="card-body">
      {data.map((sin) => (
        <Card
          key={sin.id}
          image={sin.image}
          title={sin.title}
          summary={sin.summary}
          id={sin.id}
        />
      ))}
    </div>
  );
}

export default Search;
