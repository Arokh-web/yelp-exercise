import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";
import Imprint from "./pages/Imprint";
import AboutUs from "./pages/Aboutus";
import Contact from "./pages/Contact";
import FullRestaurants from "./pages/FullRestaurants";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantdetails" element={<RestaurantDetails />} />
          <Route path="/fullrestaurants" element={<FullRestaurants />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/restaurantdetails/:id" element={<RestaurantDetails />}/> */}
    
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App;
