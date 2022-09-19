import {React, useState} from 'react'

import Filter from './Filter'
import MarketplaceMain from './MarketplaceMain'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import featured from '../../assets/stock-album-2.jpg'

const Marketplace = () => {
  function handleFilterQuery(filter){
    // if all of the search inputs are empty then do not send API Request
    const send = Object.keys(filter).map(key => {
      switch(key) {
        case "sample_type":
          if(filter[key] === null) return false;
          break;
          case "search":
            if(filter[key] === "") return false;
            break;
            case "key":
              if(filter[key] === null || filter[key].length < 1) return false;
              break;
              case "genre":
          if(!!filter[key] === false) return false;
          break;
          case "bpm":
            if( !!filter[key] === false) return false;
            break;
          default:
              return true
      }   
    }).every(v => v === false || v)

    if(!send) {

      fetch("/samples", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(filter)
      
      })
    }
  
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