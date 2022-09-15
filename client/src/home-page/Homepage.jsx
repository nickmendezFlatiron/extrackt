import React  from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {Link , useNavigate} from 'react-router-dom'
import logo from "../assets/logo-stroke.png"
import LoginModal from './LoginModal'

const Homepage = ({toggleModal , handleClose}) => {
  const navigate = useNavigate()
  return (
    <Container fluid className="p-5 mb-5 banner-bg shadow" >
      <Row>
        <Col lg={5} className="creme-bg py-5 ps-5 rounded-4 offset">
        <h1 className='text-dark fw-bold'>
          Royalty Free Sounds.
          <br/>
          Made By You.
        </h1>
        <p className='py-3 text-secondary'>
          <strong>Sell your audio samples on a marketplace of thousands of users.</strong>
          <br/>
          Unlock access to a sample library with millions of sounds, ready to user in your next track.
          Download samples to keep forever. 
          <br/>
          Extrackt offers artists the highest base profit split in the industry.
          <br/>
          That means more money for your dreams.
        </p>
        <Container className="d-flex align-content-center">
          <Button onClick={()=>navigate("/signup") } primary className="fs-5 fw-bold">Create An Account</Button>
          <Link to="/about" className='ms-4 fs-4'><strong>Learn More</strong></Link>
        </Container>
        </Col>
        <Col className="mx-5 d-flex align-items-center">
          <Image src={logo} fluid alt="logo" />
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage