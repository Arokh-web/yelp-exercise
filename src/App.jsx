import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />


        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantdetails" element={<RestaurantDetails />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route
            path="/restaurantdetails/[id]"
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
