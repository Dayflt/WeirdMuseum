// eslint-disable-next-line
import './css/Home2.css';
import React from 'react';
import { Link } from "react-router-dom";

const Home2 =() => {
  return (
    <div>
      <header>
        <div class="masthead">
          <div class="container">
            <div class="masthead-subheading">Welcome To Weird Museum</div>
            <div class="masthead-heading text-uppercase">Welcome To Weird Museum</div>
            <div className="button_box">
              <Link to ="./Selection">
                <button className="StartButton" type="button" class="btn btn-light disabled btn-lg">
                  START!
                </button>
              </Link>
              <Link to ="./Gallery">
                <button className="GalleryButton" type="button" class="btn btn-light disabled btn-lg">
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
export default Home2;