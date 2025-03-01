import React from "react";
import SearchResult from "./SearchResult";
import FullRestaurants from "./FullRestaurants";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchResult, setSearchResults] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        console.log("Restaurants", data);
      });
  }, []);

  return (
    <div>
      <Header restaurants={restaurants} setter={setSearchResults} />
      {searchResult ? (
        <FullRestaurants restaurants={searchResult} />
      ) : (
        <FullRestaurants restaurants={restaurants} />
      )}
    </div>
  );
};

export default Home;
