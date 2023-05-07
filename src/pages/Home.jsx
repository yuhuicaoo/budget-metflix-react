import React, { useEffect, useState } from "react";
import horror_movie from "../assets/horror_movie.svg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header/>
      <main>
        <section id="search">
          <div className="container">
            <div className="row">
              <figure className="home_image--wrapper">
                <img src={horror_movie} alt="" className="home_image" />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;