import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gradient-to-r from-[#B68B2D] via-[#C85C5C] to-[#6A3E76] p-5 sm:footer-horizontal bg-neutral m-5 w-auto border-2 rounded-2xl flex justify-around items-center">
        <nav>
          <ul className="flex space-x-25 items-center">
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
              >
                Back to top
              </button>
            </li>
            <li>
              <figure>
                <img
                  className="w-auto h-25 border-4 rounded-2xl"
                  src="logo.png"
                  alt="logo"
                />
              </figure>
            </li>

            <li className="btn btn-ghost">
              <Link to="imprint">Imprint</Link>
            </li>
            <li className="btn btn-ghost">
              <Link to="contact">Contact</Link>
            </li>
            <li className="btn btn-ghost">
              <Link to="aboutus">About Us</Link>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
              >
                Back to top
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
