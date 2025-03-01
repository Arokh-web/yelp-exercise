import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={ <Home/>} />
        <Route path="/restaurantdetails" element={ <RestaurantDetails/>} />
        
        {/* Fallback to non-existing routes */}
        <Route path="*" element={ <NotFound /> } />
      
      </Routes>
    </Router>
  )
}

export default App;

{/* <Router>
        <Header />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantdetails" element={<RestaurantDetails />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/restaurantdetails/[id]" element={<RestaurantDetails />}/>

    
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router> */}
