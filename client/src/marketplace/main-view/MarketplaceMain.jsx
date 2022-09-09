import React from 'react'

import Container from 'react-bootstrap/Container'
import Carousel from './Carousel'

const MarketplaceMain = ({collection}) => {

  return (
    <>
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
    </>
  )
}

export default MarketplaceMain