import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <h2 className="logo__name">
          <Link to="/" className="white">
            BUDGET <span className="red">METFLIX</span>
          </Link>
        </h2>
      </div>
      <ul className="nav__links">
        <li className="nav__link">
          <Link to="/" className="nav__link--anchor link__hover-effect">
            Home
          </Link>
        </li>
        <li className="nav__link">
          <Link
            to=""
            className="nav__link--anchor link__hover-effect no-cursor"
          >
            Find your movie
          </Link>
        </li>
        <li className="nav__link">
          <Link to="" className="nav__link--anchor btn__contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="background"></div>
    </nav>
  );
}

export default Nav;
