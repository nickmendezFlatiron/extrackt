import React from 'react'

import Filter from './Filter'
import Carousel from './Carousel'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import featured from '../../assets/stock-album-2.jpg'

const Marketplace = ({collection}) => {


  
  return (
    <>
      <div className="mb-3 pb-3 mx-4">
        <Row>
          <Col className="text-center filter" lg={3}>
            <Filter />
            <h4>Featured Soundpack</h4>
            <Image className="featured-preview"src={featured} />
            <h4>Featured Artist</h4>
          </Col>
          <Col  lg={9}>
            <div>
              <h3 className="mt-2">Top 10 Downloads</h3>
              <Container className="light-purple-bg my-3 mt-3 rounded-2 shadow-sm">
                <Carousel collection={collection}/>
              </Container>
            </div>
            <div className='mt-5'>
              <h3 className="mt-2">New Releases</h3>
              <Container className="bg-light my-3 mt-3 rounded-2 shadow">
                <Carousel collection={collection}/>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Marketplace