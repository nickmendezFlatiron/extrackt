import {React , useContext}from 'react'
import { LoginContext } from '../context/LoginContext';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';

const UploadCard = ({upload, handleUploads}) => {
  const {errors, setErrors} = useContext(LoginContext)

  function handleClick(){
    console.log("handleClick")
  }

  function handleDelete(e){
    e.stopPropagation()
    setErrors([])
   if( window.confirm("Please confirm you'd like to delete this collection, this action is irreversible.")){
    fetch(`/collections/${upload.id}`, {method: "DELETE"})
      .then(r => {
        if(r.ok){
          console.log(r)
            handleUploads(upload.id)
        } else {
         setErrors(["Delete unsuccessful, please try again."])
        }
      })
   }
  }
  return (
    <Col>
      <Card onClick={handleClick}>
        <Card.Body className="">
          <Card.Title className="d-flex justify-content-between align-items-center">
            {upload.name}
            <CloseButton onClick={handleDelete}/>
            </Card.Title>
            <Card.Img variant="top" className="carousel-pic" src={upload.cover_art_url} />
          <Card.Text>{upload.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default UploadCard