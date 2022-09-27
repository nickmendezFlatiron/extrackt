import React from 'react'
import Image from 'react-bootstrap/Image';
import {useNavigate} from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import image from './assets/studio.jpeg'
import image2 from './assets/money.jpg'

const About = () => {
  const navigate = useNavigate()
  const button =  <Button onClick={()=>navigate("/signup") } variant="primary" className="fs-5 mb-3 fw-bold justify-content-center">Create An Account</Button>
  return (
   
    <>
    <Row className="my-3 bg-light p-4 rounded-3 align-items-center">
      <Col className="justify-content-start" md={6}>
      <h1>For Musicians, By Musicians.</h1>
      <p className="fs-5"><strong>All samples are created by Extrackt users.</strong>Whether you're starting a new hobby or a award-winning pro, Extrackt has millions of samples ready to use in your next project.
      </p>
      <p className="fs-5">Browse through the Extrackt marketplace and easily search for samples using well-planned filter options. 
      Download samples on-demand.
      </p>
      {button}
      </Col>
      <Col >
      <Image src={image} alt="studio" className="about shadow-sm rounded-2"/>
      </Col>
    </Row>
    <Row className="my-5 bg-success p-4 rounded-3 align-items-center">
      <Col className=" order-md-last" md={6}>
      <h1>Get Paid for Your Samples</h1>
      <p className="fs-5"><strong>Everyone can contribute to our sample collection.</strong>
      <br/>
      Anyone who believes they have created a sample that someone else is looking for, feel free to upload it!
      </p>
      <p className="fs-5">
        <strong>We remove the barriers of mainstream sample services.</strong>
        <br/>
        We give all of our users an equal opportunity to showcase their samples and profit from their work. The Extrackt community decides which samples are the best.
        
        No industry connections required, no backdoor favors. Simply upload and profit.
      </p>
      {button}
      </Col>
      <Col md={6}>
      <Image src={image2} alt="studio" className="about shadow-sm rounded-2"/>
      </Col>
    </Row>
    </>
   
  )
}

export default About