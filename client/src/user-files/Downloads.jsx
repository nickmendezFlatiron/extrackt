import React, {useState, useEffect, useContext} from 'react'
import CollectionTableRow from '../marketplace/CollectionTableRow'
import {LoginContext} from '../context/LoginContext'
import CollectionContext from '../context/CollectionContext'
import AudioPlayer from '../audio-player/AudioPlayer'
import uuid from 'react-uuid'

import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const Downloads = () => {
  const [page, setPage] = useState(1)
  const [downloads, setDownloads] = useState([])
  const {navigate , authenticated} = useContext(LoginContext)
  const [arrayIndex , setArrayIndex] = useState(0)
  const {setCollection} = useContext(CollectionContext)
  setCollection(null)

  function handleNext(){
    setPage(page => page + 1)
  }
  function handlePrev(){
    setPage(page => page - 1)
  }
  useEffect(()=>{
    fetch(`/downloads/${page}`)
      .then(r => {
        if(r.ok){
          r.json().then(r => setDownloads([...r]))
      }
    })
  },[page])
  
  if(authenticated === false) return navigate
  const results = downloads?.map(obj => { 
    const newObj = {}
    Object.keys(obj.sample).map(k => newObj[k] = obj.sample[k])
    return newObj
  })
  
  const renderRows = downloads.map(obj => {return <CollectionTableRow setArrayIndex={setArrayIndex} key={uuid()} samples={results} sample={obj.sample}/>})
  return (
    <Container >
      {/* <h1>Search Bar</h1> */}
      <Pagination size="sm" className="d-flex justify-content-end ms-auto">
        {page === 1 ? null : <Pagination.First onClick={handlePrev} />}
       {downloads?.length === 15 ? <Pagination.Last onClick={handleNext}/> :null}
      </Pagination>
      <Table hover borderless responsive="sm" className="bg-light shadow-sm rounded-4">
        <thead>
          <tr>
            <th scope="col">Sample Name</th>
            <th scope="col">Genre</th>
            <th scope="col">Type</th>
            <th scope="col">BPM</th>
            <th scope="col">Key</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="">
          {downloads?.length === 0 ? <h3>Loading...</h3> : null}
          {renderRows}
        </tbody>
      </Table>
      <Pagination size="sm" className="d-flex justify-content-end ms-auto">
        {page === 1 ? null : <Pagination.First onClick={handlePrev} />}
        {downloads?.length === 15 ? <Pagination.Last onClick={handleNext}/> :null}
      </Pagination>
      <AudioPlayer searchResults={results.length > 0 && results} setArrayIndex={setArrayIndex} arrayIndex={arrayIndex}/>
    </Container>
  )
}

export default Downloads