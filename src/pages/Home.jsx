import React from "react";
import SearchResult from "./SearchResult";
import FullRestaurants from "./FullRestaurants";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const Home = ({ searchResult, restaurants }) => {
  return (
    <div>
      {searchResult ? (
        <FullRestaurants restaurants={searchResult} />
      ) : (
        <FullRestaurants restaurants={restaurants} />
      )}
    </div>
  );
};

export default Home;
