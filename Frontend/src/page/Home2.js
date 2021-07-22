import "./css/Page.css";
import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecordWebcam } from "react-record-webcam";
import { Setb, Setburl} from "../App";



const Record = ({ match }) => {
  const history = useHistory();
  const num = match.params.num;
  const OPTIONS = { recordingLength: 5, fileType: "mp4" }; // 녹화 제한 시간, 확장자
  const recordWebcam = useRecordWebcam(OPTIONS);

  const setburl = useContext(Setburl);
  const Setblob = useContext(Setb);

  const [re_state, set_state] = useState(false);

  useEffect(() => {
    recordWebcam.open();
    set_state(false);
  }, []);

  const Set = () => { // 녹화 영상 없이 넘어갈 경우 안넘어가게 수정 필요함.
    recordWebcam.getRecording().then((respone) => Setblob(respone));
    setburl(recordWebcam.previewRef.current.currentSrc);
    history.push({
      pathname: "/Preview/" + num
    });
  };

  const stop = () => {
    set_state(true);
     recordWebcam.stop();
  }

  const retake = () => {
    set_state(false);
    recordWebcam.retake();
  }

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>
        <div className="ImageBox" style={{ display: "block" }}>
          <div style={{ display: "block" }}>
            <p>Camera status: {recordWebcam.status}</p>
            { re_state ? (<div className="InputBox" > <video ref={recordWebcam.previewRef} autoPlay muted loop/></div>):
            (<div className="InputBox" ><video ref={recordWebcam.webcamRef} autoPlay muted /></div>)}
          </div>
          { re_state ? (<div><button onClick={retake}>Retake</button></div>):
            (<div><button onClick={recordWebcam.start}>Start recording</button>
              <button onClick={stop}>Stop recording</button></div>)}
        </div>
        <Link to="../Selection">
          <button className="RunButton">BACK</button>
        </Link>
          <button className={re_state?"RunButton":"un_RunButton"}onClick={re_state? Set : null}>NEXT</button>
      </header>
    </div>
  );
};

export default Record;
