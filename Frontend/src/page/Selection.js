import './css/Page.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import one from './img/1.jpg';
import two from './img/2.jpg';
import thr from './img/3.jpg';
import four from './img/4.jpg';

const Selection =() => {

    let [pic, ] = useState ([one, two, thr, four]);
    let [num, m_num] = useState(0); //num이 현재 무엇을 선택했는지

    return (
      <div className="Page">
        <header className="Page-header">
          <h1>
           <img src={star} className="Star-logo" alt="logo"></img>
               Synthesize Images
          </h1>
          <h3>
            바뀌고 싶은 얼굴을 선택하세요!
          </h3>
            <div className='ImageBox'>
              <div>  
                <button className='SelectButton' onClick={ ()=> { m_num(0)}}> 1</button>
                <button className='SelectButton' onClick={ ()=> { m_num(1)}}> 2</button>
                <button className='SelectButton' onClick={ ()=> { m_num(2)}}> 3</button>
                <button className='SelectButton' onClick={ ()=> { m_num(3)}}> 4</button>
              </div>
                <div className='InputBox' style={ {marginright: '10%' } }> 
                  <img className='SelectImg' src={ pic[num]} alt="select img"></img>
                </div>
            </div>
            <div>
          <Link to ="./">
           <button className="RunButton">
              BACK
           </button>
          </Link>
          <Link to = {`./Record/${num}`}>  
           <button className="RunButton">
              NEXT
           </button>
          </Link>
          </div>
        </header>
      </div>
    );
}
export default Selection;