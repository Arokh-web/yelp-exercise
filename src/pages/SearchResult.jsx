import React from "react";
// import RestaurantCard from "../components/RestaurantCard";
import FilterBar from "../components/FilterBar";

const SearchResult = () => {


  return (
    <div className="container mx-auto p-4">
      <p className="text-4xl font-mono m-7">Search Results</p>
      <FilterBar data= {restaurants}/>
      
    </div>
  );
};

export default SearchResult;
