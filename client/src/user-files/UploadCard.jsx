import {React , useContext}from 'react'
import { LoginContext } from '../context/LoginContext';
import {useNavigate} from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form'

const UploadCard = ({upload, handleUploads}) => {
  const {errors, setErrors, user} = useContext(LoginContext)
  const navigate = useNavigate()
  console.log(upload)
  function handleClick(){
    console.log("handleClick")
    navigate(`/user/${user.username}/samples/${upload.id}`)
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
      <Card onClick={handleClick} className="my-2">
        <Form>
        <Card.Body className="">
          <Card.Title className="d-flex justify-content-between align-items-center">
            {upload.name}
            <CloseButton type='button' onClick={handleDelete}/>
          </Card.Title>
          <Card.Img variant="top" className="carousel-pic" src={upload.cover_art_url} />
          <Card.Text className="mt-2">
            {upload.description}
          </Card.Text>
        </Card.Body>
        </Form>
      </Card>
    </Col>
  )
}

export default UploadCard