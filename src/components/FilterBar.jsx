const FilterBar = () => {
  return (
    <div className='MenuBar'>FilterBar
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><a role="button" class="btn">Cuisines</a></li>
        <li><a role="button" class="btn">Cities</a></li>
        <li><a role="button" class="btn">Rating</a></li>
      </ul>
    </div>
  )
}

export default FilterBar