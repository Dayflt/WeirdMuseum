import "./css/Page.css";
import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useRecordWebcam } from "react-record-webcam";
import { Setb, Setburl} from "../App";



const Record = ({ match }) => {
  const { num } = match.params;
  const OPTIONS = { recordingLength: 5, fileType: "mp4" }; // 녹화 제한 시간, 확장자
  const recordWebcam = useRecordWebcam(OPTIONS);

  const setburl = useContext(Setburl);
  const Setblob = useContext(Setb);

  const [preview, set_pre] = useState(false);

  useEffect(() => {
    recordWebcam.open();
    //set_pre(recordWebcam.webcamRef);
  }, []);

  const Set = () => {
    recordWebcam.getRecording().then((respone) => Setblob(respone));

    setburl(recordWebcam.previewRef.current.currentSrc);
    //console.log(data);
  };

  const log = () => {
    // 로그 확인 용
    Setblob(recordWebcam.newblob);
    console.log(' 아래는 지역');
    console.log('전역');
  };

  const stop = () => {
    recordWebcam.stop();
    setTimeout(()=>{
      set_pre(true);
    }, 0)
    
  }
  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>

        <div className="ImageBox" style={{ display: "block" }}>
          <div style={{ display: "block" }}>
            <p>Camera status: {recordWebcam.status}</p>
            <video ref= {recordWebcam.webcamRef} autoPlay muted />
          </div>
          <div>
            <button onClick={recordWebcam.start}>Start recording</button>
            <button onClick={stop}>Stop recording</button>
            <button onClick={recordWebcam.retake}>Retake</button>
            <button onClick={log}>하위 log </button>
            <button onClick={Set}>set </button>
          </div>
          <video ref={recordWebcam.previewRef} autoPlay muted loop />
          {/* <p>Camera status: {recordWebcam.status}</p> */}
        </div>

        <Link to="../Selection">
          <button className="RunButton">BACK</button>
        </Link>
        <Link to={`../Preview/${num}`}>
          <button className="RunButton" onClick={Set}>NEXT</button>
        </Link>
      </header>
    </div>
  );
};

export default Record;
