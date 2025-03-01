import { useEffect, useState } from "react"
import MenuBar from "../components/MenuBar"
import FilterBar from "../components/FilterBar";

const RestaurantDetails = () => {

  const [restaurants, setRestaurants] = useState('');

  useEffect(() => {
    fetch('https://4eea5d2b-607c-48f0-bf61-19ac4e7b4111.mock.pstmn.io/restaurants')
        .then((res) => res.json())
        .then((data) => {
            setRestaurants(data);
            console.log(data);
        })
}, [])


  return (
    <div>
      <h2>RestaurantDetails</h2>
      <MenuBar/>
      <FilterBar/>
      {JSON.stringify(restaurants)}
    </div>
  )
}

export default RestaurantDetails
