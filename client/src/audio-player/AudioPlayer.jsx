import React,{useState , useRef , useEffect, useContext} from 'react'
import WaveSurfer from "wavesurfer.js"
import CollectionContext from '../context/CollectionContext'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'



function calculateTime(secs){
  let minutes = parseInt(secs / 60 )
  let seconds = parseInt(secs % 60)
  if (seconds < 10) {
    seconds = `0${seconds}`
  } 
  return {minutes , seconds }
}

const AudioPlayer = ({ arrayIndex , setArrayIndex}) => {
  const [isLoading , toggleLoading] = useState(true)

  const [audioDuration , setAudioDuration] = useState({minutes: 0 , seconds: 0 })
  const [wavesurfer , setWavesurfer] = useState(null)
  const [volume, setVolume] = useState(100)
  const {collection} = useContext(CollectionContext)

  const pause =  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
  const play = <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
  const [playButton, setPlayButton] = useState(play)
  const waveform = useRef()
 

  useEffect(()=>{

    // debugger
    let ws = WaveSurfer.create({ 
      normalize: true,
      barHeight: 1,
      container: waveform.current,
      backend: "WebAudio",
      height: 60,
      progressColor: "#b249eb",
      responsive: true,
      waveColor: "#e4c1f9",
      cursorColor: "transparent"
    });
    
    collection && ws.load(collection?.samples[arrayIndex].sample_url)

    setWavesurfer(ws)
    ws.on("ready", function () {
      const time = ws.getDuration()
      setAudioDuration(()=>calculateTime(time))
      toggleLoading(false)
      ws.play()
    });
    ws.on("pause", function(){
      setPlayButton(play)
    })
    ws.on("play", function (){
      setPlayButton(pause)
    }
    )
    return () => {
      toggleLoading(true)
      ws.unAll();
      ws.destroy();
    };
  },[arrayIndex, collection])
    
  function handlePlay(){
    wavesurfer.playPause()

  }

  function handlePrevious(){
    console.log(arrayIndex)
    if(arrayIndex > 0 ){

      setArrayIndex((arrayIndex)=> arrayIndex - 1 )
    } 
  }
  
  function handleNext(){    
    if(arrayIndex < collection.samples?.length - 1 ){
      setArrayIndex((arrayIndex)=> arrayIndex + 1 )
    } 
  }

  function handleVolume(e){
    let vol = parseFloat(e.target.value / 100) 
    
    setVolume(e.target.value)
    wavesurfer.setVolume(vol)
  }

  const loadTime = isLoading ? <Spinner animation="border" variant="primary" /> : `${audioDuration.minutes}:${audioDuration.seconds}` ; 
  
  return (
    // Sticky footer
   <div className="audio-player fixed-bottom creme-bg" >
    <Row className="align-items-center">
      <Col className="ms-3 d-flex align-items-center" >
          <svg onClick={handlePrevious} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="play-btn bi bi-chevron-bar-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
          </svg>
          <svg onClick={handlePlay} className="play-btn mx-1 bi bi-play-circle-fill" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  viewBox="0 0 16 16">
           {playButton}
          </svg>
          <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="play-btn bi bi-chevron-bar-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <input type="range" id="vol" name="vol" value={volume} min="0" max="100"  className='align-self-center slider mx-2' onChange={handleVolume}/>
          <p className="text-primary pe-2 text-va">{volume}</p>
          
          <h4 className="text-ltg text-va  ms-auto">{loadTime}</h4>
      </Col>
        <Col className="me-4">
          <div ref={waveform} className="creme-bg">
          </div>
        </Col>
      <Col xs={3} className="justify-content-start text-ltg">
        <Row>
           <h5>{collection?.samples[arrayIndex].name}</h5>
           <h6>{collection?.samples[arrayIndex].artist}</h6>
        </Row>
      </Col>

    </Row>
   </div>
  )
}

export default AudioPlayer