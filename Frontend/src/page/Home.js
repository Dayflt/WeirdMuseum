// eslint-disable-next-line
import './css/Home.css';
import React from 'react';
import { Link } from "react-router-dom";

const Home =() => {
  return (
    <div>
      <header>
        <div class="masthead_home">
          <div class="container_home">
            <div class="masthead-createheading">Created by DayFly⭐️</div>
            <div class="masthead-heading text-uppercase">Welcome To Weird Museum</div>
            <div class="masthead-subheading">Let's make a realistic face swap!</div>
            <div className="button_box">
              <Link to ="./Selection">
                <button className="StartButton" type="button" class="btn btn-light btn-lg">
                  START!
                </button>
              </Link>
              <Link to ="./Gallery">
                <button className="GalleryButton" type="button" class="btn btn-light btn-lg">
                  Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Home;