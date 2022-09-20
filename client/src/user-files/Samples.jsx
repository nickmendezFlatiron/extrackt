import {React, useEffect, useState, useContext} from 'react'
import {LoginContext} from "../context/LoginContext"
import uuid from 'react-uuid'

import UploadCard from './UploadCard'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

const Samples = () => {
  const [uploads, setUploads] = useState(null)
  const {user} = useContext(LoginContext)

  function handleUploads(id){
    const filterUploads = uploads.filter(upload => upload.id !== id)
    setUploads(filterUploads)
  }
  useEffect(()=>{
    if(user){
      console.log("fetch")
      fetch(`/user/${user.id}/collections`)
        .then(r => {if(r.ok){
          r.json().then(r=> {
            console.log(r)
            setUploads(r)
          })
        }
        })
    }
  },[user])
  
  const renderUploads = uploads && uploads.map(upload => <UploadCard upload={upload} handleUploads={handleUploads} key={uuid()}/>)

  return (
    <Container>
      <Row sm={2} md={3} lg={4}>
        {renderUploads}
        {!uploads && <Spinner animation="border" variant="secondary" />}
      </Row>
    </Container>
  )
}

export default Samples