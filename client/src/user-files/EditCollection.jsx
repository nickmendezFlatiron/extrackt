import {React , useEffect, useContext}from 'react'
import { useParams} from 'react-router-dom'
import CollectionContext from '../context/CollectionContext'
import { LoginContext } from '../context/LoginContext'
import EditTable from './EditTable'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const EditCollection = () => {
  const params = useParams()
  const {collection , setCollection} = useContext(CollectionContext)
  const {user, setErrors, errors, authenticated, navigate} = useContext(LoginContext)
  
  const goBack = () => {}

  useEffect(()=>{
    setCollection(null)
    if (user) {
      fetch(`/user/${user.id}/collections/${params.collection_id}`)
        .then(r => {
          if(r.ok) {
            r.json().then(r => {
              setCollection(r)
            }) 
          } else {
              if (r.status === 401) {
               return navigate
              }
              r.json().then(e => {
                setErrors(e.errors)
              })
            }
        })
    }
  },[user])
  if (authenticated === false) return navigate
  const created = collection?.created_at.split("T")[0]

  return (
    
      <div className="mb-3 pb-5 mx-4">
        <Row>
          <Col className="height-match rounded-3 p-2" lg={4} xs={4}> 
            <Form>
              <Col className="pb-3 d-flex">
              <Button className="me-4" variant="link" onClick={() => goBack()}> {`< Back`} </Button>
              <Button type="submit" className="px-4 fs-5">Apply</Button>
              </Col> 
              <Col >
                <Image src={collection?.cover_art_url} className="cover-preview offset"/>
                <h3 className="ms-5 text-black">{collection?.samples.length} Sample(s)</h3>
              </Col>
                <h2 className='text-black fw-bold '>{collection?.name}</h2>
                <h2 className="text-black">{collection?.user.username}</h2>
                <p className="text-black">Released: {created}</p>
            </Form>
          </Col>
          <Col>
            <EditTable />
          </Col>
        </Row>
      </div>
    
  )
}

export default EditCollection