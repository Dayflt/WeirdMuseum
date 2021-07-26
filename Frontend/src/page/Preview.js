import "./css/Page.css";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import one from "./img/1.png";
import two from "./img/2.png";
import thr from "./img/3.png";
import four from "./img/4.png";
import plus from "./img/plus.png";
import api from '../api.jsx';
import { Bdata, Burl } from "../App";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";

const Preview = ({ match }) => {
  const { num } = match.params;
  const data = useContext(Bdata);
  const burl = useContext(Burl);
  const history = useHistory();

  const [loadings, set_load] = useState(false);
  const [result, set_result] = useState(false);
  let [pic] = useState([one, two, thr, four]); 
  let model;

  const override = css`
    display: block;
    margin: auto;
    border-color: #ffffff;
    display:flex;
    right : 2vh;
  `;

  const send = async() => {
    const formData = new FormData();
    const file = new File([data], String(Math.floor(Math.random()*10000))+'test.mp4', { type: 'video/mp4'})
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", file);
    formData.append("image_no", parseInt(num)+1);
    
    
    set_load(true); // 로딩 시작 재랜더링
    await api.post("/api/model", formData, config)
    .then((response) => {
      set_load(false);
      set_result(true); // respone을 받으면 재랜더링
      if (response.data.success) {
        model = response.data.model_id;
        history.push({
          pathname: "/Result",
          state: {model_id: model}
        });
      } else {
        console.log(response.data.message);
        set_load(false);
        alert("업로드 실패");
      } 
    });
  };

  return (
    <div class="masthead">
      <div class="container-lg p-3 mb-2 ">
        <div className="barbox">
          <ul id="progressbar">
            <li id="selection" class="active"><strong>SELECTION</strong></li>
            <li id="webcam" class="active"><strong>WEBCAM</strong></li>
            <li id="preview" class="active"><strong>PREVIEW</strong></li>
            <li id="result"><strong>RESULT</strong></li>
          </ul>
        </div>
        <h1 class="title">Your Choice! Keep Going?</h1>
        <div style={{ margin: "5%" }}>
          {!loadings && !result ? (
            <div class="container_preview row row_2 justify-content-center">
              <div class="col-sm-5 row">
                <img class="img-fluid" src={pic[num]} alt="select img"></img>
              </div>
              <div class="col-sm-1 h-20 center-block row justify-content-center">
                <img class="img_plus py-4" src={plus} alt="plus img"></img>
              </div>
              <div class="col-sm-5 row">
                <video class="img-fluid previewcam" src={burl} autoPlay muted loop />
              </div>
            </div>
          ) : result ? (
            console.log("../Result/" + model)
          ) : (
            <div className="pacman">
              <h3 className="refacing">Refacing ...</h3>
              <PacmanLoader 
                css={override}
                size={45}
                color={"#f2ddcc"}
                loading={loadings}
              />
            </div>
          )}
        </div>
        <div>
          <Link to={`../Record/${num}`}>
            <button type="button" class="btn btn-primary btn-bnn">
              <i class="bi-caret-left" />
              BACK
            </button>
          </Link>
          <button type="button" class="btn btn-primary btn-bnn" onClick={send}>
          NEXT
          <i class="bi-caret-right"/>
        </button>
        </div>
      </div>
    </div>
  );
};
export default Preview;