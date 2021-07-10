import React, { useEffect } from 'react';
import { useRecordWebcam } from 'react-record-webcam';
//import Axios from 'axios';
import './css/Page.css';

function RecordVideo(props) {
  const OPTIONS = { recordingLength: 5, fileType: 'mp4' } // 녹화 제한 시간, 확장자
  const recordWebcam = useRecordWebcam(OPTIONS);
  
  const log = () => { // 로그 확인 용
    //console.log(recordWebcam);
    console.log(recordWebcam.previewRef.current.currentSrc);
  };

  useEffect(() => {
    recordWebcam.open();
  },[])

  const SendSever = () => {
    //const blob = recordWebcam.getRecording(); // blob 받아옴 쓸모가 있나?
    let formData = new FormData();
    console.log(formData );
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    }    
    console.log(formData );
    formData.append('file', recordWebcam.previewRef.current.currentSrc); // blob? blob url?
    formData.append('userpic', props.num); // 유저가 무엇을 선택했는지 임시값
    console.log(formData);
    // Axios.post('/api/model', formData, config).then((response) => {
    //   if (response.data.success) {
    //     console.log(response.data)
    //   } else {
    //     alert('비디오 업로드를 실패했습니다.')
    //   }
    // })
  }
  
  return (
    <div className='ImageBox' style={{ display: 'block'}}>
      <div style={{ display: 'block' }}>
        <p>Camera status: {recordWebcam.status}</p>
        <video ref={recordWebcam.webcamRef} autoPlay muted />
      </div>
      <div>
        <button onClick={recordWebcam.start}>Start recording</button>
        <button onClick={recordWebcam.stop}>Stop recording</button>
        <button onClick={recordWebcam.retake}>Retake recording</button>
        <button onClick={recordWebcam.download}>Download recording</button>
        <button onClick={recordWebcam.close}>Close camera</button>
        <button onClick={SendSever}> send </button>
        <button onClick={log}>log </button>
      </div>
      <video ref={recordWebcam.previewRef} autoPlay muted loop /> 
      {/* <p>Camera status: {recordWebcam.status}</p> */}
    </div>
  )
}

export default RecordVideo;