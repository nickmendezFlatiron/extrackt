import React , {useState , useContext, useRef} from 'react'
import {LoginContext} from '.././context/LoginContext'
import CollectionContext from '../context/CollectionContext'
import FormTable from './FormTable'
import PreviewModal from './PreviewModal'
import HelpModal from './HelpModal'
import Errors from '../Errors'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'




const UploadForm = () => {
  const [samples , setSamples] = useState([])
  const [name , setName] = useState()
  const [description , setDescription] = useState()
  const [coverArt , setCoverArt] = useState()
  const [helpModal, setHelpModal] = useState(false)
  const [showModal, setshowModal] = useState();
  const [showAlert , setShowAlert] = useState(false)
  const [alertColor ,setAlertColor] = useState('danger')
  
  const coverRef = useRef()
  const handleClose = () => setshowModal(false);
  const handleShow = () => setshowModal(true);
  
  const {collection , setCollection} = useContext(CollectionContext)
  const {errors , setErrors, authenticated, navigate} = useContext(LoginContext)
  
  if (authenticated === false) return navigate
  
  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    setShowAlert(true)
    setAlertColor("secondary")

    if (samples.length === 0) {
      setAlertColor("danger")
      setShowAlert(true)
      return setErrors(["No samples have been uploaded"])
      
    }
    const data = new FormData()

    data.append("[collection]cover_art" , coverArt)
    data.append("[collection]description", description)
    data.append("[collection]name" , name)
    let counter = 1
    // each sample in its own [sample_individual]attr and append each piece
    samples.forEach((sample)=>{
      data.append(`[sample${counter}]name`, sample.name)
      data.append(`[sample${counter}]key`,JSON.stringify(sample.key))
      data.append(`[sample${counter}]bpm`,sample.bpm)
      data.append(`[sample${counter}]genre`, sample.genre)
      data.append(`[sample${counter}]sample_type`, sample.type)
      data.append(`[sample${counter}]audio_file`,sample.file)
      counter = counter + 1
    })
    counter = 0
    fetch("/collections",{
      method: "POST",
      body: data
    }).then(r=>{
      if(r.ok) {
        r.json().then((collection)=>{
          setName("")
          setDescription("")
          coverRef.current.value = null
          setSamples([])
          setErrors([])
          setAlertColor("success")
          setShowAlert(true)
          setCollection(collection)
        })
      } else {
        r.json().then((e)=>{
          setAlertColor("danger")
          setErrors(e.errors[0])
          setShowAlert(true)
          
        })
      }
    })
  }

  function handleName(e) {
    setName(e.target.value)
  } 
  function handleDescription(e){
    setDescription(e.target.value)
  }
  function handleCoverArt(e) {
    if (e.target.files[0].size > (1024**2)) {
      coverRef.current.value = null
      setAlertColor("danger")
      setErrors(["Collection Artwork maximum file size is 1 megabyte."])
      return setShowAlert(true)
    }
    setCoverArt(e.target.files[0])
  }
  
  
  
  return (
    <div className="mx-3">
      <PreviewModal name={name} samples={samples} description={description} coverArt={coverArt} showModal={showModal} handleClose={handleClose}/>
      <HelpModal setHelpModal={setHelpModal} helpModal={helpModal}/>
      <Row className="">
        <Col className=" pt-2 light-purple-bg rounded-3 mx-2">
          <Alert variant={alertColor} show={showAlert} onClose={() => setShowAlert(false)} dismissible="true">
           {alertColor ==="danger" && <Alert.Heading>Oh snap! You got an error!</Alert.Heading>}
           {alertColor ==="success" && <Alert.Heading>Congrats, upload successful!</Alert.Heading>}
           {alertColor === "secondary" && <Spinner animation="border" variant="secondary" />}
            <Errors />
          </Alert>
          <Row className="mt-2">
            <Col className="col-auto">
              <h4 className="mb-3">Name</h4>
              <h4 className="my-4">Description</h4>
              <br/>
              <h4 className="mt-1">Artwork</h4>
              <h4 className="mt-3">Samples</h4>
              <Button variant="outline-dark" onClick={()=>setHelpModal(true)} type="button">Help</Button>
            </Col>
            <Col>
              <Form className="mb-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-25 shadow-sm rounded">
                  <Form.Control maxLength={40} value={name} onChange={handleName} type="text" placeholder="Enter collection name here..." required/>
                </Form.Group>
                <Form.Group className="mb-3 w-50 shadow-sm rounded">
                    <Form.Control maxLength={180} value={description} onChange={handleDescription} className="text-break" as="textarea" placeholder="Describe your sample pack in 180 characters...." required/>
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3 w-25 shadow-sm rounded">
                  <Form.Control 
                    ref={coverRef} 
                    type="file" 
                    accept="image/*" 
                    size="sm" 
                    onChange={handleCoverArt} 
                    onDragStart={(e)=> {return e.preventDefault()}} 
                    onDrop={(e)=> {return e.preventDefault()}}  
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <FormTable samples={samples} setSamples={setSamples} setShowAlert={setShowAlert}/>
                </Form.Group>
                <Button variant="success" className="shadow" type="submit">Submit</Button>
                <Button onClick={handleShow} type="button" className="text-white mx-3 opacity-75" variant="secondary">Preview</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

    
  )
}

export default UploadForm