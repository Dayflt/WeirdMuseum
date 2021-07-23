// eslint-disable-next-line
import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import api from '../../api.jsx';
import "../css/Modal.css";
import { store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

const Modal = ( props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, model_id } = props;
  const [nickname, setNickname] = useState("");
  const [emoticon, setEmoticon] = useState("2");

  //상위 result의 url주소 받고 + form값 묶어서 다시 전달
  const message = (message, type) => {
    store.addNotification({
      message: message,
      type: type,
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      },
      dismissable: {
        Click: true
      }
    });
  }
  const clickSave = async () => {
    console.log({model_id});
    if(nickname===""){
      message("nickname을 작성해주세요","danger")
      return false;
    }
    try{
      await api
      .patch('/api/model/'+model_id, {
        model_name : nickname,
        category_no: parseInt(emoticon)
      },{
        header: {
          "content-type": "application/json",
        },
      })
      .then(response=>{
        console.log(response.data);
      });
      window.location.href="../gallery"
    }catch(error) {
      console.log(error);
      console.log({model_id});
      console.log({nickname});
      console.log({emoticon});
      message("ERROR", "Please check the console for an error message.", "warning")
      setNickname("");
      setEmoticon("");
    }
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={ open ? 'openModal modal' : 'modal' }>
      { open ? (  
        <section class="card border-primary mb-3">
          <header class="card-header">
            Choose your nickname and emoji!
            <button className="close" onClick={close}> &times; </button>
          </header>
          <main class="card-text">
            <input required type="text" name="nickname" placeholder="Nickname" onChange={(e) => setNickname(e.target.value)}/>
            <select className="emoticon" name="emoticon" onChange={(e) => setEmoticon(e.target.value)}>
              <option value="1">😉</option>
              <option selected value="2">😟</option>
              <option value="3">😨</option>
              <option value="4">🤪</option>
            </select>
            <ReactNotification />
          </main>
          <footer>
            <button className="close" onClick={clickSave} class="btn btn-dark"> Share it! </button>
          </footer>
        </section>
      ) : null }
    </div>
  )
}
export default Modal;
