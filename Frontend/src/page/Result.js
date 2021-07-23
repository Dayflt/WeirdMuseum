// eslint-disable-next-line
import './css/Home.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation } from "react-router-dom"; // 추가
import star from './img/star110.png';
import api from '../api.jsx';
import Modal from './components/Modal';
//import fileDownload from 'js-file-download';


const Result = () => {//앞에서 넘겨온 id참조, 프록시 5000으로  "proxy": "http://localhost:5000"
  //const model_id = match.params.model;

  const [modalOpen, setModalOpen ] = useState(false);
  const [resultVideo, setResultVideo ] = useState("");
  
  const location = useLocation(); // 추가
  const model_id = location.state.model_id; // 추가

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const deleteModel = () =>{
    api.delete('/api/model/'+ model_id)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  useEffect(
    async function() {
      try {
        const response = await api.get('/api/model/'+ model_id);
        var url = response.data.model_result;
        setResultVideo(url);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  )
  //var resultVideo ='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'

  return (
    
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <div className="result_box">
          <ReactPlayer 
            url={resultVideo}
            className="result"
            loop="true"
            playing="true"
            muted="true"
            width="50%"
            height="50%">
          </ReactPlayer>
        </div>
        <div className="button_box1">
          <a href={resultVideo} download>
            <button className="SaveButton" onClick="">
              Save Video
            </button>
          </a>              
          <React.Fragment>
            <button className="ShareButton" onClick={ openModal }>
              Share
            </button>
            <Modal open={ modalOpen } close={ closeModal } model_id={model_id}>
            </Modal>
          </React.Fragment>
        </div>
        <div className="button_box2">
          <Link to ="../">  
            <button className="RetryButton" onClick={deleteModel}> 
              TRY AGAIN
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Result;
