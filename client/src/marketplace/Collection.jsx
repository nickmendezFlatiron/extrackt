import {React , useContext, useEffect, useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CollectionContext from '../context/CollectionContext'
import {LoginContext} from '../context/LoginContext'

import AudioPlayer from '../audio-player/AudioPlayer'
import CollectionTable from './CollectionTable'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Collection = () => {
  const {collection , setCollection} = useContext(CollectionContext)
  const {samplePreview , setSamplePreview} = useState()
  const {errors, setErrors, spinner, isAuthenticated} = useContext(LoginContext)
  const params = useParams()
  let navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  };

  useEffect(()=>{
    fetch(`/collections/${params.id}`)
      .then(r => {
        if(r.ok){
          r.json().then(collection => setCollection(collection))
      
        }else {r.json().then(e=> setErrors(e.errors[0]))}
      })
  },[])


  const renderTable = collection? <CollectionTable samples={collection?.samples} setSamplePreview={setSamplePreview}/> : spinner;

  const loadMore = <button className="text-start mb-3 me-auto link-btn">Load Next 20 Samples...</button>
  return (
    <>
      <div className="mb-3 pb-5 mx-4">
        <Row className="pb-5">
          <Col className="height-match" lg={4} xs={4}> 
            <Col className="py-3 d-flex">
            <Button className="me-4" variant="link" onClick={() => goBack()}> {`< Back`} </Button>
            <Button className="px-4 fs-5">Download All</Button>
            </Col> 
            <Col >
              <Image src={collection?.cover_art_url} className="cover-preview offset"/>
              <h3 className="ms-5">{collection?.samples.length} Sample(s)</h3>
            </Col>
              <h2 className='text-dark fw-bold '>{collection?.name}</h2>
            <h2 className="text-dkg">{collection?.user.username}</h2>
          </Col>
          <Col className="">
            <Col>
            <h2>search bar</h2>
            </Col>
            <Col className="table-height mb-5 pb-3 overflow-auto">
            {renderTable}
            {collection?.samples.length > 20 ? <button className="text-start mb-3 me-auto link-btn">Load Next 20 Samples...</button> : null}
            </Col>
          </Col>
        </Row>
      <AudioPlayer samplePreview={samplePreview}/>
      </div>
    </>
        
    
  )
}

export default Collection