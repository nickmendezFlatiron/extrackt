import {React , useState , useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import Errors from "../Errors"

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
  
  const navigate = useNavigate()

  const {setUser , isAuthenticated , setErrors } = useContext(LoginContext)

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
    event.preventDefault()
    const account = {
      username,
      full_name: name, 
      email,
      password,
      password_confirmation: passwordConfirmation
    }

    fetch("/signup",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(account)
    }).then(r =>{
      if(r.ok) {
        r.json().then(user=>{
          setErrors([])
          setUser(user)
          setUsername("")
          setPassword("")
          setPasswordConfirmation("")
          setEmail("")
          setName("")
          isAuthenticated(true)
          navigate(`/user/${user.username}`)
        })
      }else {
        r.json().then(e => setErrors(e.errors[0]))
      }
    })
   

    // setValidated(true);
  };

  return (
    <Container >
      <Row className="signup-bg align-items-center p-4 rounded-4">
        <Col className="">
        <Image src={logo} fluid/>
        </Col>
        <Col className="bg-light m-3 p-3 rounded-4">
        <h1 className=" text-secondary text-center">Sign Up </h1>
          <Form noValidate="true" validate={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                Username
                  <Form.Text className="ms-2 text-muted">
                  Char Count Remaining
                  </Form.Text>
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Username..." 
                value={username} onChange={handleUsername}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text" 
                placeholder="John Doe"
                value={name} 
                onChange={handleName}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Email..." 
                value={email}
                onChange={handleEmail}
                required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={handlePassword}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password must match" 
                value={passwordConfirmation}
                onChange={handlePasswordConfirmation}
                required
                />
            </Form.Group>
            <Errors />
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