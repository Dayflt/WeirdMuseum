import "./css/Page.css";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import one from "./img/1.png";
import two from "./img/2.png";
import thr from "./img/3.png";
import four from "./img/4.png";
import plus from "./img/plus.png";
import star from "./img/star110.png";
import axios from "axios";
import { Bdata, Burl } from "../App";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";

const Preview = ({ match }) => {
  const { num } = match.params;
  const data = useContext(Bdata);
  const burl = useContext(Burl);

  const history = useHistory(); // 추가

  const [loadings, set_load] = useState(false);
  const [result, set_result] = useState(false);
  let [pic] = useState([one, two, thr, four]); 
  let model;

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #ffffff;
  `;

  const send =  async() => {
    const formData = new FormData();
    const file = new File([data], 'test.mp4', { type: 'video/mp4'})
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", file);
    formData.append("image_no", parseInt(num)+1);
    
    
    set_load(true); // 로딩 시작 재랜더링
    await axios.post("http://localhost:5000/api/model", formData, config)
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

  const log = () => {
    console.log('프리뷰(전역)');
    console.log(data);
    console.log(loadings, result);
  };

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
          <img src={star} className="Star-logo" alt="logo"></img>
          Synthesize Images
        </h1>
        <div className="ImageBox" style={{ margin: "3%" }}>
          {!loadings && !result ? (
            <div>
              <h3>선택한 것들!</h3>
              <div className="InputBox">
                <img
                  className="SelectImg"
                  src={pic[num]}
                  alt="select img"
                ></img>
              </div>
              <div className="Plus-logo">
                <img className="Plus-logo" src={plus} alt="plus img"></img>
              </div>
              <div className="InputBox">
                <video src={burl} autoPlay muted loop />
              </div>
            </div>
          ) : result ? (
            console.log('../Result/' + model)
          ) : (
            <div>
              <h3>waiting...</h3>
              <PacmanLoader
                css={override}
                size={50}
                color={"#f2ddcc"}
                loading={loadings}
              />
            </div>
          )}
        </div>
        <div>
          <Link to={`../Record/${num}`}>
            <button className="RunButton">BACK</button>
          </Link>
          <button onClick={log}>하위 log </button>
          <button onClick={send} className="RunButton">
            SUBMIT
          </button>
        </div>
      </header>
    </div>
  );
};
export default Preview;