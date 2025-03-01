import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h3 style={{color: 'red'}}>404 - Not Found</h3>
        <Link to='/'>Back Home</Link>
    </div>
  )
}

export default NotFound