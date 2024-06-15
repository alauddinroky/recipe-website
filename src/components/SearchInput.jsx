import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function SearchInput() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a recipe"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input-field"
      />
      <NavLink to={`/search/${value}`}>
        <button type="submit" className={isFocused ? "focused" : ""}>
          Search
        </button>
      </NavLink>
    </div>
  );
}

export default SearchInput;
