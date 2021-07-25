// eslint-disable-next-line
import './css/Page.css';
import './css/Home.css';
import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom"; // 추가
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
    <div className="masthead_result">
      <header className="container">
          <video autoPlay muted loop
            src={resultVideo}
            className="result_box"
            width="55%"
          />
        <div className="button_box1">
          <a href={resultVideo} download>
            <button className="SaveButton" class="btn btn-primary btn-ss" >
              Save Video
            </button>
          </a>              
          <React.Fragment>
            <button className="ShareButton"  class="btn btn-warning btn-ss" onClick={ openModal }>
              Share to Gallery
            </button>
            <Modal open={ modalOpen } close={ closeModal } model_id={model_id}>
            </Modal>
          </React.Fragment>
        </div>
        <div className="button_box2">
          <Link to ="../">  
            <button className="RetryButton" class="btn btn-light btn-retry" onClick={deleteModel}> 
              TRY AGAIN
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Result;
