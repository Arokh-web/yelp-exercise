import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div>
      <button className="btn btn-ghost">
        <Link to="fullrestaurants">Restaurants</Link>
      </button>
    </div>
  );
};

export default MenuBar;
