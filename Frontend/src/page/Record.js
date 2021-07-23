import "./css/Page.css";
import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecordWebcam } from "react-record-webcam";
import { Setb, Setburl } from "../App";
import "./css/Home2.css";

const Record = ({ match }) => {
  const history = useHistory();
  const num = match.params.num;
  const OPTIONS = { recordingLength: 5, fileType: "mp4" }; // 녹화 제한 시간, 확장자
  const recordWebcam = useRecordWebcam(OPTIONS);

  const setburl = useContext(Setburl);
  const Setblob = useContext(Setb);

  const [re_state, set_state] = useState(false);
  const [record_state, set_restate] = useState(false);

  useEffect(() => {
    recordWebcam.open();
    set_state(false);
  }, []);

  const set = () => {
    recordWebcam.getRecording().then((respone) => Setblob(respone));
    setburl(recordWebcam.previewRef.current.currentSrc);
    history.push({
      pathname: "/Preview/" + num,
    });
  };

  const stop = () => {
    set_state(true);
    set_restate(false);
    recordWebcam.stop();
  };

  const retake = () => {
    set_state(false);
    recordWebcam.retake();
  };

  const start = () => {
    recordWebcam.start();
    set_restate(true);
  };

  return (
    <div class="masthead height: 100%">
      <div class="container-lg p-3 mb-2 vh-80">
        <h1>Record Your Face!</h1>
        <div class="container d-block">
          <div style={{ display: "block" }}>
            {re_state ? (
              <div class="container p-3 mb-2 vh-80">
                <div class="pt-4">
                  {" "}
                  <video
                    ref={recordWebcam.previewRef}
                    height="480px"
                    width="680px"
                    autoPlay
                    muted
                    loop
                  />
                </div>
              </div>
            ) : (
              <div class="mt-4">
                <video
                  ref={recordWebcam.webcamRef}
                  height="480px"
                  width="680px"
                  autoPlay
                  muted
                />
              </div>
            )}
            <p>Camera status: {recordWebcam.status}</p>
          </div>
          {re_state ? (
            <div class="m-4">
              <button class="m-2" onClick={retake}>
                Retake{"  "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-camera-video"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div class="m-4">
              <button class="m-2" onClick={start}>
                Start{"  "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-camera-video"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
                  />
                </svg>
              </button>
              <button onClick={stop} class="m-2" disabled={!record_state}>
                Stop{"  "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-stop-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z" />
                </svg>
              </button>
            </div>
          )}
        </div>
        <Link to="../Selection">
          <button
            type="button"
            class="btn btn-primary m-3"
            disabled={record_state}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-caret-left"
              viewBox="0 0 16 16"
            >
              <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
            </svg>
            BACK
          </button>
        </Link>
        <button
          type="button"
          class="btn btn-primary m-3"
          disabled={!re_state}
          onClick={set}
        >
          NEXT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-caret-right"
            viewBox="0 0 16 16"
          >
            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Record;
