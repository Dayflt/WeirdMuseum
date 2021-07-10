import './css/Home.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import photo from'./img/monalisa.jpg'

const Home =() => {
  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <h4>
          START 버튼을 눌러 시작하세요!
        </h4>
        <div className="step_bigbox">
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
        </div>
        <div className="photo_box">
          <img src={photo}></img>
          <img src={photo}></img>
          <img src={photo}></img>
        </div>
        
        <div className="button_box">
          <Link to ="./Selection">
            <button className="StartButton">
              START!
            </button>
          </Link>
          <Link to ="./Gallery">
            <button className="GalleryButton">
              갤러리보러가기
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
export default Home;