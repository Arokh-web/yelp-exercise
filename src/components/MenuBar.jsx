import { Link } from "react-router-dom";

const MenuBar = () => {

  return (
    <div className='MenuBar'>MenuBar
      <ul className="menu menu-horizontal lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/restautantdetails'> Restaurants </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar

{/* <li><a role="button" class="btn">Home</a></li>
        <li><a role="button" class="btn">Restaurants</a></li>
        <li><a role="button" class="btn">Map</a></li> */}
