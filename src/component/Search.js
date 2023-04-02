import React, { useState } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const serchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    if(searchInput === ""){
        return alert("please write something");
    }
    props.onSearch(searchInput);
    setSearchInput('');
  }

  return (
    <form className={classes.search} onSubmit={submitHandler} >
      <input
        placeholder="search here & type in lower case"
        type="text"
        value={searchInput}
        onChange={serchInputHandler}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default Search;
