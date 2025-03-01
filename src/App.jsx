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
import { useState, useEffect } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchResult, setSearchResults] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        console.log("Restaurants", data);
      });
  }, []);

  return (
    <div>
      <Router>
        <Header restaurants={restaurants} setter={setSearchResults} />
        {/* ROUTES */}
        <Routes>
          <Route
            path="/"
            element={
              <Home searchResult={searchResult} restaurants={restaurants} />
            }
          />
          <Route path="/restaurantdetails" element={<RestaurantDetails />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fullrestaurants" element={<FullRestaurants />} />

          <Route
            path="/restaurantdetails/:id"
            element={<RestaurantDetails />}
          />

          {/* FALLBACK */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
