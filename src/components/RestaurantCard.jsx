import React from "react";

const RestaurantCard = () => {
  return (
    <div className="border-2 rounded-2xl card card-side bg-base-100 w-1/2 max-h-1/5 shadow-sm p-4">
      <figure>
        <img className="object-contain " src="logo.png" alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name of the Restuarant</h2>
        <p>City: BerlinPlaceHolder</p>
        <p>Rating: RatingPlaceholder</p>
        <div className="card-actions justify-end">
          {/* <Link to="restaurantdetails/[id]"> */}
          <button className="btn btn-ghost">Go to Details</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
