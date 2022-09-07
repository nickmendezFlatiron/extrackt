import React from 'react'
import Card from 'react-bootstrap/Card'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const Plans = () => {
  return (
    <Container className="py-4">
        <Row>
          <Col lg="4" className="my-3">
            <Card className="text-center">
              <Card.Header className="light-purple-bg">
                <h4 className="fw-normal">Free</h4>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className="fw-light text-dkg"> <strong className="text-dark fw-bold">$0</strong>/mo</h1>
                </Card.Title>
                <ul>
                  <li>Hello</li>
                  <li>Hello</li>
                  <li>Hello</li>
                </ul>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="my-3">
            <Card className="text-center" >
              <Card.Header className="light-purple-bg">
                <h4 className="fw-normal">Producer</h4>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className="fw-light text-dkg"> <strong className="text-dark fw-bold">$10</strong>/mo</h1>
                </Card.Title>
                <ul>
                  <li>Hello</li>
                  <li>Hello</li>
                  <li>Hello</li>
                </ul>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="my-3">
            <Card className="text-center">
              <Card.Header className="light-purple-bg">
                <h4 className="fw-normal">Creator</h4>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className="fw-light text-dkg"> <strong className="text-dark fw-bold">$10</strong>/mo</h1>
                </Card.Title>
                <ul>
                  <li>Hello</li>
                  <li>Hello</li>
                  <li>Hello</li>
                </ul>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  )
}

export default Plans