import {React , useState} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import logo from '../assets/logo-stroke.png'

const SignupForm = () => {
  const [validated, setValidated] = useState(false);

  
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
        <h1>Sign Up </h1>
        </Col>
        <Col className="bg-light p-3 rounded-4">
          <Form noValidate validate={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>
                Username
                  <Form.Text className="ms-2 text-muted">
                  Char Count Remaining
                  </Form.Text>
                </Form.Label>
              <Form.Control type="text" placeholder="Username..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Password must match" />
            </Form.Group>

            <hr/>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
            <button className="link-btn text-primary opacity-75 ms-3"><strong>Have an account? Login here. </strong></button>
          </Form>
        </Col>
      </Row>
      
    </Container>
  )
}

export default SignupForm