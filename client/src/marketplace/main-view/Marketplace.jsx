import {React, useState, useContext} from 'react'
import {LoginContext} from "../../context/LoginContext"
import CollectionContext from "../../context/CollectionContext"
import Filter from './Filter'
import MarketplaceMain from './MarketplaceMain'
import Errors from "../../Errors"
import CollectionTable from '../CollectionTable'


import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AudioPlayer from '../../audio-player/AudioPlayer'


const Marketplace = () => {
  const [isLoading , toggleLoading] = useState(false)
  const [searchResults , setSearchResults] = useState([])
  const [searchIndex , setSearchIndex] = useState(0)
  const {errors, setErrors} = useContext(LoginContext)
  const [showAlert, setShowAlert] = useState(false)
  const {setCollection} = useContext(CollectionContext)
  function handleAlert(){
    setShowAlert(false)
    setErrors([])
  }

  function handleFilterQuery(filter){
    // setSearchResults([])
    toggleLoading(true)
    setCollection(null)
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
          toggleLoading(false)
          setShowAlert(true)
          setErrors(["No matches found, enter a new search."])
        }
        if(r.ok){ r.json().then(res =>{
          toggleLoading(false)
          setSearchResults([...res])
        })

        }
      })
  
  }  

  const renderView = searchResults?.length > 0 ? <CollectionTable showAlert={showAlert} samples={searchResults} setArrayIndex={setSearchIndex}/> : <MarketplaceMain /> ;
  const renderPlayer = searchResults?.length > 0 ? <AudioPlayer searchResults={searchResults} setArrayIndex={setSearchIndex} arrayIndex={searchIndex}/> : null ;
  const style = searchResults?.length > 0 ? "table-height mb-5 pb-3 overflow-auto" : ""

  return (
    <>
      <div className="mb-3 pb-3 mx-4">
        <Row>
          <Col className="filter height-match" lg={3}>
            <Row>
            <Filter 
              setSearchResults={setSearchResults} 
              setSearchIndex={setSearchIndex} 
              handleFilterQuery={handleFilterQuery} 
              setShowAlert={setShowAlert}
              isLoading={isLoading}
            />
            </Row>
            <Alert show={showAlert} transition onClose={handleAlert} dismissible variant="danger">
              <Errors />   
            </Alert>
          </Col>
          <Col  lg={9} className={style}>
            {renderView}
          </Col>
        </Row>
        {renderPlayer}
      </div>
    </>
  )
}

export default Marketplace