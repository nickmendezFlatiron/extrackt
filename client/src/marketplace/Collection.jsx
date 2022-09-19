import React from 'react'

import AudioPlayer from '../audio-player/AudioPlayer'
import CollectionTable from './CollectionTable'
import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Collection = ({collection}) => {
  let navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <>
      <div className="mb-3 pb-5 mx-4">
        <Row className="pb-5">
          <Col className="height-match" lg={4}> 
            <Col className="py-3 d-flex">
            <Button className="me-4" variant="link" onClick={() => goBack()}> {`< Back`} </Button>
            <Button className="px-4 fs-5">Download All</Button>
            </Col> 
            <Col >
              <Image src={collection.artwork} className="cover-preview offset"/>
              <h3 className="ms-5">Sample Count</h3>
            </Col>
              <h2 className='text-dark fw-bold '> {collection.collection_name}</h2>
            <h2 className="text-dkg">{collection.user}</h2>
          </Col>
          <Col className="">
            <Col>
            <h2>search bar</h2>
            </Col>
            <Col className="table-height mb-5 pb-3 overflow-auto">
            <CollectionTable />
            <button className="text-start mb-3 me-auto link-btn">Load Next 20 Samples...</button>
            </Col>
          </Col>
        </Row>
      <AudioPlayer />
      </div>
    </>
        
    
  )
}

export default Collection