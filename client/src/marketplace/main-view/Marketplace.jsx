import {React, useState} from 'react'

import Filter from './Filter'
import MarketplaceMain from './MarketplaceMain'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import featured from '../../assets/stock-album-2.jpg'

const Marketplace = () => {
  const [searchResults , setSearchResults] = useState(null)

  function handleFilterQuery(filter){
      fetch("/samples/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(filter)
      }).then(r =>{
        if(r.ok){ r.json().then(res =>{
          // setSearchResults([...setSearchResults,res])
          console.log(res)
        })

        }
      })
  
  }  
  return (
    <>
      <div className="mb-3 pb-3 mx-4">
        <Row>
          <Col className="text-center filter" lg={3}>
            <Row>
            <Filter handleFilterQuery={handleFilterQuery}/>
            </Row>
            {/* <Col className>
            <h4>Featured Soundpack</h4>
            <Image className="featured-preview"src={featured} />
            <h4>Featured Artist</h4>
            </Col> */}
          </Col>
          <Col  lg={9}>
            <MarketplaceMain />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Marketplace