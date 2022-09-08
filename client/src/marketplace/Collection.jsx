import React from 'react'

import AudioPlayer from './AudioPlayer'
import CollectionTable from './CollectionTable'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Collection = ({collection}) => {
  return (
    <>
      <div className="my-3 pb-3 mx-4">
        <Row>
          <Col className="border height-match" lg={4}> 
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
            <Col>
            <h2>Pagination and search bar</h2>
            </Col>
            <Col className="table-height overflow-auto">
            <CollectionTable />
            </Col>
          </Col>
        </Row>
      </div>
        <AudioPlayer />
    </>
        
    
  )
}

export default Collection