import './css/Page.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import one from './img/1.png';
import two from './img/2.png';
import thr from './img/3.png';
import four from './img/4.png';
import './css/Home2.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Selection = () => {

  let [pic,] = useState([one, two, thr, four]);
  let [num, m_num] = useState(0); //num이 현재 무엇을 선택했는지

  return (
    <div class="masthead">
      <div class="container-lg p-3 mb-2">
        <h1>
          Choose your face!
        </h1>
        <h3>
          바뀌고 싶은 얼굴을 선택하세요!
        </h3>
        <div className="barbox">
          <ul id="progressbar">
            <li id="selection" class="active"><strong>SELECTION</strong></li>
            <li id="webcam" class="active"><strong>WEBCAM</strong></li>
            <li id="preview" class="active"><strong>PREVIEW</strong></li>
            <li id="result"><strong>RESULT</strong></li>
          </ul>
        </div>
        <div class="container mt-5">
          <div class="hv-60">
            <img  src={pic[num]} alt="select img"/>
          </div>
          <div class="m-3">
            <button type="button" class="btn btn-primary m-3" onClick={() => { m_num(0) }}> 1</button>
            <button type="button" class="btn btn-primary" onClick={() => { m_num(1) }}> 2</button>
            <button type="button" class="btn btn-primary m-3" onClick={() => { m_num(2) }}> 3</button>
            <button type="button" class="btn btn-primary" onClick={() => { m_num(3) }}> 4</button>
          </div>
        </div>
        <div>
          <Link to="./">
            <button type="button" class="btn btn-primary btn-bn">
            <i class="bi-caret-left"/>
              BACK
            </button>
          </Link>
          <Link to={`./Record/${num}`}>
            <button type="button" class="btn btn-primary btn-bn">
              NEXT
              <i class="bi-caret-right"/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Selection;

/*
const progressbarStyle={
    width : "20%"
  }
<div className="progress">
<div className="progress-bar progress-bar-striped progress-bar-animated" style={progressbarStyle} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
</div>*/