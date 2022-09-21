import {React, useState, useContext} from 'react'
import {LoginContext} from "../../context/LoginContext"
import Filter from './Filter'
import MarketplaceMain from './MarketplaceMain'
import Errors from "../../Errors"


import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Image from 'react-bootstrap/Image'

// import featured from '../../assets/stock-album-2.jpg'

const Marketplace = () => {
  const [searchResults , setSearchResults] = useState(null)
  const {errors, setErrors} = useContext(LoginContext)
  const [showAlert, setShowAlert] = useState(false)

  function handleAlert(){
    setShowAlert(false)
    setErrors([])
  }

  function handleFilterQuery(filter){
    setShowAlert(false)
    setErrors([])
      fetch("/samples/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(filter)
      }).then(r =>{
       
        if(r.status === 204) {
          setShowAlert(true)
          setErrors(["No matches found, broaden your search."])
        }
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
          <Col className=" filter" lg={3}>
            <Row>
            <Filter handleFilterQuery={handleFilterQuery} setShowAlert={setShowAlert}/>
            </Row>
            <Alert show={showAlert} transition onClose={handleAlert} dismissible variant="danger">
              <Errors />   
            </Alert>
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