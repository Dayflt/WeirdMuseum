// eslint-disable-next-line
import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import axios from 'axios'
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
      await axios
      .patch('http://localhost:5000/api/model/'+model_id, {
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
      //window.location.href="../Gallery"
    }
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={ open ? 'openModal modal' : 'modal' }>
      { open ? (  
        <section>
          <header>
            닉네임과 이모티콘을 선택해주세요!
            <button className="close" onClick={close}> &times; </button>
          </header>
          <main>
            <input required type="text" name="nickname" placeholder="닉네임" onChange={(e) => setNickname(e.target.value)}/>
            <select className="emoticon" name="emoticon" onChange={(e) => setEmoticon(e.target.value)}>
              <option value="1">🤣</option>
              <option selected value="2">😚</option>
              <option value="3">🙃</option>
              <option value="4">😱</option>
            </select>
            <ReactNotification />
          </main>
          <footer>
            <button className="close" onClick={clickSave}> Share it! </button>
          </footer>
        </section>
      ) : null }
    </div>
  )
}
export default Modal;


  /*function addCustomer(){
    const url ='/api/model/{model_id}';
    const formData = new FormData();
    formData.append('model_name',this.userNickname)
    formData.append('category_id',this.userEmoticon)
    formData.append('model_id',this.video)
    const config = {
      Headers:{
        'content-type':'multipart/form-data'
      }
    }
    return post(url, formData,config)
  }*/

  /*<form onSubmit={this.handleFormSubmit}>
    <input required type="text" name="nickname" placeholder="닉네임" value={this.state.userNickname} onChange={this.handleValueChange}/>
    <select className="emoticon" name="emoticon" value={this.state.userEmoticon} onChange={this.handleValueChange}>
  */
  /*const clickSave = async () => {
    if (nickname==="") {
      message("확인", "닉네임과 이모티콘을 선택해주세요", "default")
      return false;
    }
    try {
      await axios
      .post("/save_image", {
        author: nickname,
        url: props.url
      }, {
        header: {
          "content-type": "application/json",
        },
      })
      .then(response => { 
        // db 저장 성공
        console.log(JSON.stringify(response.data));   
      });
    } catch (error) {
      console.log(error);
      message("ERROR", "Please check the console for an error message.", "warning")
      seNickname("");
    }
  }
  onSubmit={this.handleSubmit} action="http://localhost:5000/result"
  */