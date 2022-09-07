import React from 'react'
import Card from 'react-bootstrap/Card'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const Plans = () => {
  return (
    <Container className="py-5">
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>
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
          <Col>
            <Card className="text-center">
              <Card.Header>
                <h4 className="fw-normal">Artist</h4>
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
          <Col>
            <Card className="text-center">
              <Card.Header>
                <h4 className="fw-normal">User</h4>
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