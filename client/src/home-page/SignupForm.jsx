import {React , useState} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import logo from '../assets/logo-stroke.png'

const SignupForm = ({handleShow}) => {
  const [validated, setValidated] = useState(false);
  const [username , setUsername] = useState("")
  const [name , setName] = useState("")
  const [email, setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [passwordConfirmation , setPasswordConfirmation] = useState("")
  
  function handleUsername(e){
    setUsername(e.target.value)
  }
  function handleName(e){
    setName(e.target.value)
  }
  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handlePassword(e){
    setPassword(e.target.value)
  }
  function handlePasswordConfirmation(e){
    setPasswordConfirmation(e.target.value)
  }



  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container >
      <Row className="signup-bg align-items-center p-4 rounded-4">
        <Col className="">
        <Image src={logo} fluid/>
        </Col>
        <Col className="bg-light m-3 p-3 rounded-4">
        <h1 className=" text-secondary text-center">Sign Up </h1>
          <Form noValidate validate={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                Username
                  <Form.Text className="ms-2 text-muted">
                  Char Count Remaining
                  </Form.Text>
                </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Username..." 
                value={username} onChange={handleUsername}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text" 
                placeholder="John Doe"
                value={name} 
                onChange={handleName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" placeholder="Email..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={handlePassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password must match" 
                value={passwordConfirmation}
                onChange={handlePasswordConfirmation}
                />
            </Form.Group>

            {/* <hr/> */}
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
            <button type="button" onClick={handleShow} className="link-btn text-primary opacity-75 ms-3"><strong>Have an account? Login here. </strong></button>
          </Form>
        </Col>
      </Row>
      
    </Container>
  )
}

export default SignupForm