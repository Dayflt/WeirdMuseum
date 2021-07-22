// eslint-disable-next-line
import './css/Home.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import video1 from'./img/ex1.mp4'
import video2 from'./img/ex2.mp4'

const Home =() => {
  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
          <img src={star} className="Star-logo" alt="logo"></img>
          ᗯᗴIᖇᗪ ᗰᑌᔕᗴᑌᗰ
        </h1>
        <h3>
          START 버튼을 눌러 시작하세요!
        </h3>
        <div className="step_box">
          <div className="step">
            <h5>
              SELECTION <br></br> 옵션 사진 선택 
            </h5>
          </div>
          <div className="step">
            <h5>
              WEBCAM <br></br> 합성하고 싶은 영상 찍기
            </h5>
          </div>
          <div className="step">
            <h5>
              RESULT <br></br> 결과 사진 확인
            </h5>
          </div>
        </div>
        <div className="video_box">
          <video src={video2} autoPlay loop></video>
          <video src={video1} autoPlay loop></video>
          <video src={video2} autoPlay loop></video>
        </div>
        
        <div className="button_box">
          <Link to ="./Selection">
            <button className="StartButton" type="button" class="btn btn-dark">
              START!
            </button>
          </Link>
          <Link to ="./Gallery">
            <button className="GalleryButton" type="button" class="btn btn-outline-dark">
              갤러리보러가기
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
export default Home;