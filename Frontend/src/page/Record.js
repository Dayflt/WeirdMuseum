import './css/Page.css';
import React from "react";
import { Link } from "react-router-dom";
import RecordVideo from './Cam';

const Record = ({ match }) => {
  const {num} = match.params; 

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>
      <RecordVideo />
      {console.log(num)}
        <Link to="../Selection">
        <button className="RunButton">BACK</button>
      </Link>
      <Link to={`../Preview/${num}`}> 
        <button className="RunButton">NEXT</button>
      </Link>
      </header>
    </div>
  );
};

export default Record;