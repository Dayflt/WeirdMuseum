// eslint-disable-next-line
import './css/Result.css';
import React, {useDebugValue, useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'
import Modal from './components/Modal';

const Result =() => {
  const [modalOpen, setModalOpen ] = useState(false);
  
  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }
  const clickBack =()=>{
  }

  /* useEffect (() => {
    fetch('/api/model/{model_id}').then (response
       => response.json().then(data =>{
         console.log.apply(data)
       }))
  },[])*/
  //const [videourl, setVideoUrl] = useState("");
  //function 

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <div className="result_box">
          <ReactPlayer 
            url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
            className="result"
            loop="true"
            playing="true"
            muted="true"
            width="60%"
            height="60%">
          </ReactPlayer>
        </div>
        <div className="button_box1">
            <button className="SaveButton">
              Save Video
            </button>
          <React.Fragment>
            <button className="ShareButton" onClick={ openModal } >
              Share
            </button>
            <Modal open={ modalOpen } close={ closeModal }>
            </Modal>
          </React.Fragment>
        </div>
        <div className="button_box2">
          <Link to ="../">  
            <button className="RetryButton" onClick={clickBack}> 
              TRY AGAIN
            </button>
            </Link>
        </div>
      </header>
    </div>
  );
}
export default Result;