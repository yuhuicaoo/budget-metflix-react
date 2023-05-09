import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieInfo() {
  const { movieID,searchId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  async function fetchMovieData() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=acf6e413&i=${movieID}`
    );
    setTimeout(() => {
      setMovie(data);
      setIsloading(false);
    }, 1000);
  }

  useEffect(() => {
    fetchMovieData();
  }, []);
  
  return (
    <div>
      <Nav />
      <div className="movie__body">
        <main className="movie__main">
          <div className="movie__container">
            <div className="row">
                <div className="movie__selected--top">
                    <Link to={`/${searchId}`} className="movie__link">
                        <FontAwesomeIcon icon="arrow-left" />
                    </Link>
                    <Link to={`/${searchId}`} className="movie__link movie__link--hover">
                        <h2 className="movie__selected--title--top">Movies</h2>
                    </Link>
                </div>
              <div className="movie__selected">
                {isLoading ? (
                  <>
                    <div className="movie__selected--figure">
                      <div className="movie__selected--img--skeleton"></div>
                    </div>
                    <div className="movie__selected--description">
                      <h2 className="movie__title--loading skeleton"></h2>
                      <p className="movie__subtitle--loading skeleton "></p>
                      <h3 className="summary__title--loading skeleton"></h3>
                      <p className="summary__para--loading skeleton"></p>
                      <p className="summary__languages--loading skeleton"></p>
                      <p className="summary__genre--loading skeleton "></p>
                    </div>
                  </>
                ) : (
                  <>
                    <figure className="movie__selected--figure">
                      <img
                        src={movie.Poster}
                        alt=""
                        className="movie__selected--img"
                      />
                    </figure>
                    <div className="movie__selected--description">
                      <h2 className="movie__selected--title white">
                        {movie.Title}
                      </h2>
                      <p className="movie__selected--subtitle white">
                        {movie.imdbRating}/10 | {movie.Rated} | {movie.Released}
                      </p>
                      <div className="movie__summary">
                        <h3 className="movie__summary--title white">Plot</h3>
                        <p className="movie__summary--para white">
                          {movie.Plot}
                        </p>
                      </div>
                      <div className="movie__extra--info">
                        <p className="movie__summary--languages white">
                          Languages: {movie.Language}
                        </p>
                        <p className="movie__summary--genre white">
                          Genres: {movie.Genre}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MovieInfo;
