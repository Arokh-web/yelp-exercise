import { use, useState } from "react"

const FilterBar = () => {

  const [filter, setFilter] = useState();

  const restaurants = [
    {
      "name": "voluptate",
      "cuisine": "italian",
      "hasTakeout": true,
      "id": "occaecat pariatur mollit f"
    },
    {
      "name": "labore exercitation e",
      "cuisine": "chinese",
      "hasTakeout": false,
      "id": "aute in elit do"
    }
  ];
  
  function filterByCuisine(data) {
    const filtering = restaurants.filter(item => item.cuisine === data);
    setFilter(filtering)
  }

  console.log(filter)

  return (
    <div className='FilterBar'>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><a role="button" class="btn" onClick={()=> {filterByCuisine('chinese')}}>Cuisines</a></li>
        <li><a role="button" class="btn">Has TakeOut?</a></li>
      </ul>
    {JSON.stringify(filter)}
    </div>
  )
}

export default FilterBar