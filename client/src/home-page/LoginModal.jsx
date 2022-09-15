import React , {useState} from 'react'
import { Modal , Form , Button } from 'react-bootstrap'
import { Link , useNavigate} from 'react-router-dom'
import logo from "../assets/top-logo.png"
import uuid from "react-uuid"

const LoginModal = ({toggleModal , handleClose}) => {
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  function handleLogin(e){
    e.preventDefault()
    const login = {
      username,
      password 
    }

  }


  return (
    <>
      <Modal show={toggleModal} onHide={handleClose} className="p-5 my-5">
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title className="fw-bold">LOGIN <img className="nav-logo opacity-75" src={logo} /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin} id="login-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username here..."
                autoFocus
                value={username}
                onChange={handleUsername}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password here..."
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>
            <Form.Group>
              <ul>List Of Errors Here</ul>
              <Link to="/signup" className='text-primary opacity-75' exact={true}>Not a user? Sign up here.</Link>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onSubmit={handleLogin} form="login-form">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal