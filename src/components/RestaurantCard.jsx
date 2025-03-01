import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  console.log("Resto:", restaurant);
  return (
    <div className="flex flex-wrap justify-center">
      <h1>{JSON.stringify(restaurant)}</h1>
      {/* {restaurants.map((restaurant) => ( */}
      <div
        key={restaurant.id}
        className="mb-8 m-2 border-2 rounded-2xl card card-side bg-base-100 w-1/2 max-h-64 shadow-sm p-4"
      >
        <figure>
          <img
            className="object-contain h-40 w-full rounded-2xl"
            src={restaurant.image}
            alt="pic of restaurant"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{restaurant.title}</h2>
          <p>City: {restaurant.category}</p>
          <p>Rating: {restaurant.price}</p>
          <div className="card-actions justify-end">
            {/* <Link to="restaurantdetails/[id]"> */}
            <button className="btn btn-ghost">Go to Details</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default RestaurantCard;
