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
  const [arrayIndex, setArrayIndex] = useState(0)
  const { setErrors, spinner, authenticated} = useContext(LoginContext)
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
      
        }else {
          if(r.status === 404) {
            return navigate('/marketplace')
          }
          r.json().then(e=> {
          setErrors(e.errors[0])
        })}
      })
  },[params.id])
  
  
  const renderTable = collection? <CollectionTable arrayIndex={arrayIndex} samples={collection?.samples} setArrayIndex={setArrayIndex}/> : spinner;
  const date = Date(collection?.created_at).split(" ").splice(1,3).join(" ")

  if(authenticated === false) return navigate("/")
  return (
    <>
      <div className="mb-3 pb-5 mx-4">
        <Row className="pb-5">
          <Col className="height-match rounded-3 p-2" lg={4} xs={4}> 
            <Col className="pb-3 d-flex">
            <Button className="me-4" variant="link" onClick={() => goBack()}> {`< Back`} </Button>
            {/* <Button className="px-4 fs-5">Download All</Button> */}
            </Col> 
            <Col >
              <Image src={collection?.cover_art_url} className="cover-preview offset"/>
              <h3 className="ms-5 text-black">{collection?.samples.length} Sample(s)</h3>
            </Col>
              <h2 className='text-black fw-bold '>{collection?.name}</h2>
            <h2 className="text-black">{collection?.user.username}</h2>
            <p className="text-black">Released: {collection && date}</p>
          </Col>
          <Col className="mt-5">
            <Col className="table-height mb-5 pb-3 overflow-auto">
            {renderTable}
            </Col>
          </Col>
        </Row>
      <AudioPlayer setArrayIndex={setArrayIndex} arrayIndex={arrayIndex}/>
      </div>
    </>
        
    
  )
}

export default Collection