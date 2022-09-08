import React from 'react'

import Filter from './Filter'
import Carousel from './Carousel'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'

import featured from '../../assets/stock-album-2.jpg'

const Marketplace = ({collection}) => {


  
  return (
    <>
    <div className="my-3 pb-3 mx-4">
      <Row>
        <Col className="border text-center" lg={3}>
          <Filter />
          <h4>Featured Soundpack</h4>
          <Image className="featured-preview"src={featured} />
          <h4>Featured Artist</h4>
        </Col>
        <Col className="border" lg={9}>
          <Carousel collection={collection}/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Marketplace