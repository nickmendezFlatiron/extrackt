import React , {useState , useContext} from 'react'
import FormTable from './FormTable'
import PreviewModal from './PreviewModal'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {LoginContext} from '.././context/LoginContext'


const UploadForm = () => {
  const [samples , setSamples] = useState([])
  const [name , setName] = useState()
  const [description , setDescription] = useState()
  const [coverArt , setCoverArt] = useState()
  const [showModal, setshowModal] = useState(false);
  const [showAlert , setShowAlert] = useState(true)

  const handleClose = () => setshowModal(false);
  const handleShow = () => setshowModal(true);
  const {errors , setErrors} = useContext(LoginContext)

  function handleSubmit(e) {
    e.preventDefault()
    setShowAlert(false)
    if (samples.length === 0) return window.alert("No samples were uploaded") 
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
          
          console.log("success")
        })
      } else {
        r.json().then((e)=>{
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
    setCoverArt(e.target.files[0])
  }
  
  return (
    <div className="mx-3">
      <PreviewModal name={name} samples={samples} description={description} coverArt={coverArt} showModal={showModal} handleClose={handleClose}/>
      <Row className="">
        <Col className=" pt-2 light-purple-bg rounded-3 mx-2">
          <Alert variant="danger" show={showAlert} onClose={() => setShowAlert(false)} dismissible="true">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
          <Row className="mt-2">
            <Col className="col-auto">
              <h4 className="mb-3">Name</h4>
              <h4 className="my-4">Description</h4>
              <br/>
              <h4 className="mt-1">Artwork</h4>
              <h4 className="mt-3">Samples</h4>
              <Button onClick={handleShow} className="mt-3" variant="secondary">Preview</Button>
            </Col>
            <Col>
              <Form className="mb-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-25 shadow-sm rounded">
                  <Form.Control value={name} onChange={handleName} type="text" placeholder="Enter collection name here..." required/>
                </Form.Group>
                <Form.Group className="mb-3 w-50 shadow-sm rounded">
                    <Form.Control value={description} onChange={handleDescription} className="text-break" as="textarea" placeholder="Describe your sample pack...." required/>
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3 w-25 shadow-sm rounded">
                  <Form.Control type="file" accept="image/*" size="sm" onChange={handleCoverArt} required/>
                </Form.Group>
                <Form.Group>
                  <FormTable samples={samples} setSamples={setSamples}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

    
  )
}

export default UploadForm