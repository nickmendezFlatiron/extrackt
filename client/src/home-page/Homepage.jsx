import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import wave from "../assets/wave.png"

const Homepage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={5} className="creme-bg py-5 ps-5 rounded-3 offset">
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

        </Col>
        <Col className="mx-5 d-flex align-items-center">
          <Image src={wave} fluid alt="audio waveform" className=''/>
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage