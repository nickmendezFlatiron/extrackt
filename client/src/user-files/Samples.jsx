import {React, useEffect, useState, useContext} from 'react'
import {LoginContext} from "../context/LoginContext"
import uuid from 'react-uuid'

import UploadCard from './UploadCard'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

const Samples = () => {
  const [uploads, setUploads] = useState(null)
  const {user, authenticated, navigate} = useContext(LoginContext)

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
  if (authenticated === false) return navigate
  const renderUploads = uploads && uploads.map(upload => <UploadCard upload={upload} handleUploads={handleUploads} key={uuid()}/>)
  const renderMessage = <div className="text-center mx-3 py-5 my-5 border border-20 border-primary rounded-5 shadow">
                          <h2 >
                            You have not uploaded a collection.
                            <br/>
                            <br/>
                          <a  href="/upload">Click Here to Upload A Collection</a>
                          </h2>
                        </div>
  
  const message = uploads?.length === 0 ? renderMessage : null;
  return (
    <Container>
        {message}
      <Row sm={2} md={3} lg={4} className="creme-bg p-4 rounded-5 shadow-sm">
        {renderUploads}
        {!uploads && <Spinner animation="border" variant="secondary" />}
      </Row>
    </Container>
  )
}

export default Samples