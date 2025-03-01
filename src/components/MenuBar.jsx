import { Link } from "react-router-dom";

const MenuBar = () => {

  return (
    <div className='MenuBar'>
      <ul className="menu menu-horizontal lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/fullrestaurants'> Restaurants </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar
