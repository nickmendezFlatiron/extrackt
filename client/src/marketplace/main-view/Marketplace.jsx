import React from 'react'

import Filter from './Filter'
import MarketplaceMain from './MarketplaceMain'
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
            <MarketplaceMain collection={collection} />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Marketplace