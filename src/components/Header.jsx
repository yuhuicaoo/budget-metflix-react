import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [searchMovie, setSearchMovie] = useState();

  function onSearch() {
    fetchMovie(searchMovie);
    setIsLoading(true);
    navigate("/Movies");
    console.log(searchMovie);
  }

  async function fetchMovie(movieName) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=acf6e413&s=${movieName}`
    );
    console.log(data);
    setIsLoading(false);
  }
  return (
    <section id="landing">
      <nav>
        <div className="logo">
          <h2 className="logo__name">
            BUDGET <span className="red">METFLIX</span>
          </h2>
        </div>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="/" className="nav__link--anchor link__hover-effect">
              Home
            </a>
          </li>
          <li className="nav__link">
            <a
              href=""
              className="nav__link--anchor link__hover-effect no-cursor"
            >
              Find your movie
            </a>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor btn__contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="background"></div>
      </nav>
      <header>
        <div className="container">
          <div className="row">
            <div className="content-wrapper">
              <h1>Browse our Movies</h1>
              <div className="input-wrapper">
                <input
                  type="text"
                  className="input-movie"
                  placeholder="Search Movie"
                  onChange={(event) => setSearchMovie(event.target.value)}
                  onKeyPress={(event) => event.key === "Enter" && onSearch()}
                />
                <div>
                  <button
                    className="btn_search searchIcon"
                    onClick={() => onSearch()}
                  >
                    {isLoading ? (
                      <div className="searchIcon--skeleton">
                        <i className="fas fa-spinner movies__loading--spinner"></i>
                      </div>
                    ) : (
                      <svg
                        className="searchIcon__img svg-inline--fa fa-search fa-w-16"
                        data-v-390ceb07=""
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          data-v-390ceb07=""
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          className=""
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
