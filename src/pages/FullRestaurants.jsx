import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";

const FullRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(restaurants);
        console.log("Restaurants", data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <p className="text-4xl font-mono m-7">Full List of Restaurants</p>
      <FilterBar />
      {restaurants &&
        restaurants.map((restaurant, id) => {
          return <RestaurantCard key={id} restaurant={restaurant} />;
        })}
    </div>
  );
};

export default FullRestaurants;
