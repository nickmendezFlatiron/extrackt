import React from 'react'
import Card from 'react-bootstrap/Card'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const Plans = () => {
  return (
    <Container className="py-4">
        <Row className="banner-bg py-4 mx-1 my-2 rounded-3 shadow">
          <h1 className="text-center text-white ">Plans</h1>
        </Row>
        <Row>
          <Col lg="4" className="my-3 d-flex align-items-stretch">
            <Card className="text-center ">
              <Card.Header className="light-purple-bg">
                <h4 className="fw-normal">Free</h4>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className="fw-light text-dkg"> <strong className="text-dark fw-bold">$0</strong>/mo</h1>
                </Card.Title>
                <ul className="my-3 text-start">
                  <li>10 Credits on Signup</li>
                  <li>Access to the Community Forums</li>
                  <li>Limited Access to The Sample Marketplace</li>
                </ul>
                <Card.Text className="fw-bold">
                  For users who want to experience the Extrackt platform before committing to a plan. 
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
                  <h1 className="fw-light text-dkg"> <strong className="text-dark fw-bold">$7</strong>/mo</h1>
                </Card.Title>
                <ul className="my-3 text-start">
                  <li>70 Credits per Month</li>
                  <li>Access to the Community Forums</li>
                  <li>Full Access to the Sample Marketplace</li>
                  <li>Credits rollover every month and never expire.</li>
                </ul>
                <Card.Text className="fw-bold">
                  For users who want to expand their personal sample library with fresh and unique audio samples.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="my-3 d-flex align-items-stretch">
            <Card className="text-center ">
              <Card.Header className="light-purple-bg">
                <h4 className="fw-normal">Creator</h4>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className="fw-light text-dkg"> <strong className="text-dark fw-bold">$15</strong>/mo</h1>
                </Card.Title>
                <ul className="my-3 text-start">
                  <li className="">30 Credits Per Month</li>
                  <li>20 Gb of Upload/Storage Space</li>
                  <li>50/50 Starting Profit Split</li>
                </ul>
                <Card.Text className="fw-bold">
                  For users who are ready to upload sounds to the Sample Marketplace and get paid their talent.
                </Card.Text>
                <Button className=""  variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  )
}

export default Plans