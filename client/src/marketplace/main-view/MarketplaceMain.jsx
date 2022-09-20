import {React, useContext, useState, useEffect} from 'react'
import {LoginContext} from '../../context/LoginContext'
import uuid from 'react-uuid'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Carousel from './Carousel'

const MarketplaceMain = () => {
  const {errors, setErrors } = useContext(LoginContext)
  const [recentCollections , setRecentCollections] = useState(null)
  const [popularCollections , setPopularCollections] = useState(null)
  // 2 API Calls , one for 10 newest collections , one for 10 most downloaded collections
  useEffect(()=>{
    Promise.all([
      fetch('/marketplace/popular'),
      fetch('/marketplace/recent')
    ]).then(res => {
     return Promise.all(res.map(r=> r.json()))
    }).then(r =>{
      setRecentCollections(r[1])
      setPopularCollections(r[0])
    })
      .catch(e => setErrors(e.error))
        

  },[])

  console.log({popularCollections})
  return (
    
    <Container>
      <div>
        <h3 className="mt-2">Top 10 Downloads</h3>
        <Col className="light-purple-bg my-3 mt-3 rounded-2 shadow-sm">
          <Carousel key={uuid()} featuredCollections={popularCollections}/>
        </Col>
      </div>
      <div className='mt-5'>
        <h3 className="mt-2">New Releases</h3>
        <Col className="bg-light my-3 mt-3 rounded-2 shadow">
          <Carousel key={uuid()} featuredCollections={recentCollections}/>
        </Col>
        </div>
    </Container>
    
  )
}

export default MarketplaceMain