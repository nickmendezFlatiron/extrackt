import React from 'react'

import AudioPlayer from './AudioPlayer'
import CollectionTable from './CollectionTable'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Collection = ({collection}) => {
  return (
      <div className="mt-3 mx-4">
        <Row>
          <Col className="border" > 
            <Col className="py-3 d-flex">
            <Button className="me-4" variant="link"> {`< Back`} </Button>
            <Button className="px-5">Download All</Button>
            </Col> 
            <Col >
              <Image src={collection.artwork} className="cover-preview offset"/>
              <h3 className="ms-5">Sample Count</h3>
            </Col>
              <h2 className='text-dark fw-bold '> {collection.collection_name}</h2>
            <h2 className="text-dkg">{collection.user}</h2>
          </Col>
          <Col className="border border-5">
            <CollectionTable />
          </Col>
        </Row>
        <AudioPlayer />
      </div>
        
    
  )
}

export default Collection