import {React , useEffect, useContext, useState}from 'react'
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
  const {collection , setCollection} = useContext(CollectionContext)
  const [name , setName] = useState(collection?.name)
  const [description , setDescription] = useState(collection?.description)
  const params = useParams()
  const {user, setErrors, errors, authenticated, navigate} = useContext(LoginContext)
  
  const goBack = () => {}
  function handleDescription(e){
    setDescription(e.target.value)
  }
  function handleName(e){
    setName(e.target.value)
  }

  useEffect(()=>{
    setCollection(null)
    if (user) {
      fetch(`/user/${user.id}/collections/${params.collection_id}`)
        .then(r => {
          if(r.ok) {
            r.json().then(r => {
              setCollection(()=> r)
            }).then(() =>
            
              {}
            )
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

  useEffect(()=>{
    setDescription(collection?.description)
              setName(collection?.name)
  },[collection])

  const created = collection?.created_at.split("T")[0]
  
  if (authenticated === false ) return navigate
  if (!collection) return <p>Loading</p>

  return (
    
      <div className="mb-3 pb-5 mx-4">
        <Row>
          <Col className="height-match rounded-3 p-2 col-auto" > 
            <Form>
              <Col className="pb-3 d-flex">
              <Button className="me-4" variant="link" onClick={() => goBack()}> {`< Back`} </Button>
              <Button type="submit" className="px-4 fs-5">Apply</Button>
              </Col> 
              <Col >
                <Image src={collection?.cover_art_url} className="cover-preview offset"/>
                <h3 className="ms-5 text-black">{collection?.samples.length} Sample(s)</h3>
              </Col>
              <Form.Group >
                <Form.Text>Title</Form.Text>
                <Form.Control
                type="text"
                placeholder="Title..."
                maxLength={40}
                value={name}
                className="my-2"
                onChange={handleName}
                />
              </Form.Group>
              <Form.Group>
                <Form.Text>Description</Form.Text>
                <Form.Control
                  as="textarea"
                  style={{resize:"none"}}
                  placeholder="Description..."
                  maxLength={180}
                  value={description}
                  className="my-2"
                  onChange={handleDescription}
                />
              </Form.Group>
              
                <p className="text-black">Released: {created}</p>
            </Form>
          </Col>
          <Col className="table-height mb-5 pb-3 mx-3 overflow-auto mt-5">
            <EditTable samples={collection?.samples}/>
          </Col>
        </Row>
      </div>
    
  )
}

export default EditCollection