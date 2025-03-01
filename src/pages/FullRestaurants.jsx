import React from 'react'
import FilterBar from "../components/FilterBar";
import { useEffect, useState } from "react";


const FullRestaurants = () => {

  return (
    <div className="container mx-auto p-4">
      <p className="text-4xl font-mono m-7">Full Restaurants</p>
      <FilterBar/>
      {/* <FilterBar data={restaurants} />
      {JSON.stringify(restaurants)} */}
    </div>
  )
}

export default FullRestaurants