// eslint-disable-next-line
import './css/Gallery.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'

const Gallery = () => {
  const [user, setUser] = useState([{
    video : "",
    username : ""
  }]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/model/gallery/1')
  //   .then((Response)=>{
  //     const user = [];

  //     for(var i =  0; i<Response.data.length; i++){
  //       // console.log(Response.data[i]);
  //       user.push({
  //         video : Response.data[i].model_result,
  //         username : Response.data[i].model_name
  //       })
  //     }
  //     for(var i=0; i<user.length; i++){
  //       console.log(user[i].video);
  //       console.log(user[i].username);
  //     }
  //     setUser(user);
  //   })
  // }, [])
  useEffect(() => {
    axios.get('http://localhost:5000/api/model/gallery/1')
    .then((Response)=>{
      const user1 = [];
      for(var i =  0; i < Response.data.length; i++){
        user1.push({
          video : Response.data[i].model_result,
          username : Response.data[i].model_name
        })
      }
      setUser(user1); //success
    })
    // console.log(user);//not really
  }, [])


  return (<h2>dd</h2>
  )
}

export default Gallery;