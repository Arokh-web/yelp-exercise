import React from "react";
import FindSearchBar from "./FindSearchBar";
import NearSearchBar from "./NearSearchBar";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header bg-gradient-to-r from-[#B68B2D] via-[#C85C5C] to-[#6A3E76] sm:header-horizontal bg-neutral p-10 flex flex-col m-5 w-auto border-2 rounded-2xl justify-around items-center">
        <div className="mb-15">
          <figure>
            <img
              className="w-auto max-h-4/5 border-4 rounded-2xl"
              src="logo.png"
              alt="logo"
            />
          </figure>
        </div>
        <div className="flex items-center justify-center space-x-25">
          <FindSearchBar />
          <NearSearchBar />
        </div>
        <MenuBar />{" "}
        <Link to="searchresult">
          <button className="btn btn-ghost">TestCard</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
