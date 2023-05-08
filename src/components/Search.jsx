import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Search() {
  const { searchId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numMovies, setNumMovies] = useState(0);

  function filterMovies(filter) {
    if (filter === "NEW_TO_OLD") {
      setMovies(movies.slice().sort((a, b) => b.Year - a.Year));
    } else if (filter === "OLD_TO_NEW") {
      setMovies(movies.slice().sort((a, b) => a.Year - b.Year));
    }
  }

  async function getMovies(movieId) {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=acf6e413&s=${
        movieId || searchId
      }`
    );
    const { Search } = data;
    setNumMovies(Search.length);
    setTimeout(() => {
      setMovies(Search);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    getMovies();
  }, [searchId]);

  return (
    <main>
      <section id="search">
        <div className="container">
          <div className="row">
            <div className="search-filter">
              <div className="searchResult">
                <h2 className="searchInfo">
                  Search results for: <span className="red">{searchId}</span>
                </h2>
              </div>
              <select
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => filterMovies(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="NEW_TO_OLD">Newest to Oldest</option>
                <option value="OLD_TO_NEW">Oldest to Newest</option>
              </select>
            </div>

            <div className="movies">
              {isLoading
                ? new Array(numMovies).fill(0).map((_, index) => (
                    <div className="movie" key={index}>
                      <div className="movie__img--skeleton"></div>
                      <div className="skeleton movie__title--skeleton"></div>
                      <div className="skeleton movie__year--skeleton"></div>
                    </div>
                  ))
                : movies.map((movie, index) => (
                    <div className="movie" key={index}>
                      <figure className="movie__img--wrapper">
                        <img src={movie.Poster} className="movie__img" alt="" />
                      </figure>
                      <div className="movie__text-wrapper">
                        <div className="movie__title">{movie.Title}</div>
                        <div className="movie__year">
                          Release year: {movie.Year}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Search;
