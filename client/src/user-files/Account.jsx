import {React } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const Account = ({user}) => {
  
  return (
    <Container className="pb-5">
      <Row>
        <Col lg={5} className="creme-bg py-5 ps-5 rounded-4 offset">
          <h1 className='text-dark fw-bold'> {user.username}</h1>
          <h2 className="text-dkg">{user.account_type}</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter email" value={user.full_name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" value={user.email}/>
            </Form.Group>
          </Form>
          <div className="text-secondary pb-3">
            <h4>{user.credits} Credits</h4>
            <h4>Total Downloads</h4>
            <h4>Total Favorites</h4>
          </div>
          <div className="d-flex align-content-center">
            <Button primary className="fs-5 fw-bold">Save</Button>
            <Button variant="link">Delete My Account</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Account