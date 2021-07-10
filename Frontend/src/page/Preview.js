import './css/Page.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import one from './img/1.jpg';
import two from './img/2.jpg';
import thr from './img/3.jpg';
import four from './img/4.jpg';
import plus from './img/plus.png';
import star from './img/star110.png';

const Preview =  ({ match }) => {
    const {num} = match.params; 

    let [pic, ] = useState ([one, two, thr, four]);

    return (
      <div className="Page" >
        <header className="Page-header">
          <h1>
           <img src={star} className="Star-logo" alt="logo"></img>
               Synthesize Images
          </h1>
          <h3>
            바뀌고 싶은 얼굴을 선택하세요!
          </h3>
            <div className='ImageBox' style={{margin: '3%'}}>
              <div className='InputBox'>  
                  <img className='SelectImg' src={ pic[num]} alt="select img"></img>
              </div>
              <div className='Plus-logo'>
                <img  className='Plus-logo' src={plus} alt="plus img"></img>
              </div>
                <div className='InputBox'> 
                  <img className='SelectImg' src={ pic[num]} alt="select img"></img>
                   {/* <video /> */}
                </div>
            </div>
            <div>
          <Link to = {`../Record/${num}`}>  
           <button className="RunButton">
              BACK
           </button>
          </Link>
          <Link to = {`../Result/${num}`}>  
           <button className="RunButton">
              NEXT
           </button>
          </Link>
          </div>
        </header>
      </div>
    );
}
export default Preview;