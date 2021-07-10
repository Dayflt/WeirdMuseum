import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component';
import axios from 'axios'
import "../css/modal.css";

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;
    const [nickname, setNickname] = useState("");
    const [emoticon, setEmoticon] = useState("");

    const message = (message, type) => {
        store.addNotification({
          message: message,
          type: type,
          insert: "top",
          container: "center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 3000,
          },
          dismissable: {
            Click: true
          }
        });
    }
    const clickSave = () => {
        if(nickname===""){
            message("nickname을 작성해주세요","default")
            return false;
        }
        else{
            axios.post('/api/model/{model_id}', {
            username : nickname,
            category_id: emoticon
        })
        .then(response=>{
          console.log(response);
        })
        .catch(error=> {
          console.log(error);
          message("ERROR", "Please check the console for an error message.", "warning")
          setNickname("");
          setEmoticon("");
        });
      }
    }
    
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
      }*/

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
                        <form method="post">
                            <input required type="text" name="nickname" placeholder="닉네임" onChange={(e) => setNickname(e.target.value) }/>
                            <select className="emoticon" name="emoticon" onChange={(e) => setEmoticon(e.target.value)}>
                                <option value="1">🤣</option>
                                <option value="2">😚</option>
                                <option value="3">🙃</option>
                                <option value="4">😱</option>
                            </select>
                        </form>
                    </main>
                    <ReactNotification />
                    <footer>
                        <button className="close" onClick={clickSave}> Share it! </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}
export default Modal;