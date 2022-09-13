import React,{useState , useRef } from 'react'
import { WaveSurfer , WaveForm} from 'wavesurfer-react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import audio from '../assets/audio-test.mp3'

const AudioPlayer = () => {
  const [audioFile, setAudioFile] = useState(audio)
  const waveform = useRef()

  const handleWSMount = (waveSurfer)=>{
    waveform.current = waveSurfer;
    waveform.current.load(audioFile)
    if (window) {
      window.surferidze = waveform.current;
    }
  }

  function handlePrevious(){
  }
  
  function handlePlay(){
    waveform.current.playPause()
  }

  function handleNext(){
  }

  function handleVolume(e){
    let volume = parseFloat(e.target.value / 100) 
    waveform.current.setVolume(volume)
  }

  function handleKeyboard(){

  }
  return (
    // Sticky footer
   <div className="audio-player align-items-center fixed-bottm">
    <Row className="align-items-center d-flex">
      <Col className="ms-3" xs={3}>
          <svg onClick={handlePrevious} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="play-btn bi bi-chevron-bar-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
          </svg>
          <svg onClick={handlePlay}className="play-btn mx-1 bi bi-play-circle-fill" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
          </svg>
          <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="play-btn bi bi-chevron-bar-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <input type="range" id="vol" name="vol" min="0" max="100"  className='align-self-center slider mx-4' onChange={handleVolume}/>


      </Col>
      <Col>
     <WaveSurfer onMount={handleWSMount} className="creme-bg" >
      <WaveForm id="waveform" 
        cursorColor="transparent" 
        waveColor="#e4c1f9"
        progressColor="#b249eb"
        ></WaveForm>
     </WaveSurfer>
      </Col>
      <Col xs={2} className="justify-content-start">
        <Row>
           <h2>Song Name</h2>
           <h5>Artist Name</h5>
        </Row>
      </Col>

    </Row>
   </div>
  )
}

export default AudioPlayer