import{useState ,React, useContext} from 'react'
import {LoginContext} from "../../context/LoginContext"

import Select from 'react-select'
import Form from  'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';

const Filter = ({handleFilterQuery, setShowAlert, setSearchResults, isLoading }) => {
  const [search , setSearch] = useState("")
  const [sample_key, setKey] = useState(null)
  const [genre, setGenre] = useState(null)
  const [bpm , setBpm] = useState()
  const [type, setType] = useState(null)
  const {setErrors} = useContext(LoginContext)

  function handleSearch(e){
    setSearch(e.target.value)
  }

  function handleBpm(e){
    if (e.target.value > 200) {
      setBpm(200)
      e.target.value = 200
    } else if(e.target.value <= 200 || e.target.value > 0) {
      setBpm(parseInt(e.target.value))
    } else if(e.target.value === NaN) {
      e.target.value = null
      setBpm(null)
    } else if(e.target.value === 0 || e.target.value < 1) {
      setBpm(1)
      e.target.value = 1
    }
  }

  function handleReset(){
    setSearch("")
    setKey(null)
    setGenre(null)
    setBpm(null)
    setType(null)
    setErrors(null)
    setShowAlert(false)
    setSearchResults([])
  }

  function handleSubmit(e){
    e.preventDefault()
    setSearchResults([])
    const searchParams = {
      sample_type: type?.value,
      name: search,
      sample_key, 
      genre: genre?.value,
      bpm
    }
    const filterParams = Object.keys(searchParams).filter(k=>{
        if(Array.isArray(searchParams[k])){
          return searchParams[k].length > 0
        } else {
          return  !!searchParams[k] === true
        }
    })
    const searchObj = {}
    
    filterParams.forEach(param => {
      if(param === "sample_key") {
        searchObj[param] = sample_key.map(k => {return k.value})
      } else {
        searchObj[param] = searchParams[param]
      }
    })
    
    if (filterParams.length > 0) return handleFilterQuery(searchObj)
  
  }


  const genres = [ "pop","rock","hip-hop","rap","country","rnb", "jazz", "metal", "electronic", "soul", "ambient", "funk","raggae", "disco","classical","house","indie","techno","trap","dubstep", "gospel","latin", "raggaeton", "grime", "edm", "synthwave", "cinematic", "trance", "experimental","electro","idm","acapella"]

  const types = [
    { value: 'drum', label: 'Drum' },
    { value: 'foley', label: 'Foley' },
    { value: 'fx', label: 'FX' },
    { value: 'loop', label: 'Loop' },
    { value: 'melody', label: 'Melody' },
    { value: 'one-shot', label: 'One Shot' },
    { value: 'pad', label: 'Pad' },
    { value: 'percussion', label: 'Percussion' },
    { value: 'vocal', label: 'Vocal' },
  ]
  
  const songKeys = [
    {value: "a", label:"A"},
    {value: "b", label: "B"},
    {value: "c", label: "C"},
    {value: "d", label: "D"},
    {value: "e", label: "E"},
    {value: "f", label: "F"},
    {value: "g", label: "G"}
  ]
  const keyExist = sample_key && sample_key.filter(k => /[a-g]/.exec(k.value) && k.value.length === 1)
  const hideKeys = keyExist?.length > 0 ? [] : songKeys 

  const halfStep = [
    {value: "flat", label: "???"},
    {value: "sharp", label: "???"}
  ]
  const halfStepExist = sample_key && sample_key.filter(k => /sharp/.exec(k.value) ||  /flat/.exec(k.value))
  const hideHalfSteps = halfStepExist?.length > 0 ? [] : halfStep
  
  const scales = [
    {value: "major", label: "maj"},
    {value: "minor", label: "min"}
  ]

  const scalesExist = sample_key && sample_key.filter(k => k.value.includes("minor") || k.value.includes("major"))
  const hideScales = scalesExist?.length > 0 ? [] : scales
  const keyOptions = [
    {
      label: "Keys",
      options: hideKeys
    },
    { label: "Half Step", 
      options: hideHalfSteps
    },
    { label: "Scale",
      options: hideScales
    }
  ]
  
  const genresOptions = genres.sort((a, b) => a.localeCompare(b)).map(genre => {return {value: genre , label: genre}})
  const selectDropdownStyles = {
    menuList: styles => ({...styles , height: 200})
  };
  const renderSpinner = <div className="d-flex flex-row align-content-center align-text-middle justify-content-center mt-3">
                          <Spinner animation="border" variant="primary" className="mx-2"/>
                          <h4>Loading</h4>
                        </div>
  return (
    <Form className="my-2" onSubmit={handleSubmit}>
      {/* <h3 className="text-center mt-2">Filter</h3> */}
      <InputGroup size="lg" className=" mb-3">
        <FormControl  
          aria-label="Large" 
          aria-describedby="inputGroup-sizing-sm" 
          placeholder='Search sample names...' 
          value={search} 
          onChange={handleSearch}
          />
      </InputGroup>
      <Form.Group className="mb-3">
        <Form.Control 
            type="number" 
            onChange={handleBpm}  
            placeholder="Enter BPM 1 to 200..." 
            value={bpm} 
            min="1" 
            max="200" 
          />
      </Form.Group>
      <Form.Group className=" mb-3">
        <Select 
          value={sample_key}
          isMulti
          styles={selectDropdownStyles}
          onChange={setKey}
          options={keyOptions}
          placeholder= "Select key..."
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: '#cf76ff4e',
              primary: '#cf76ff',
            },
          })}
         />  
      </Form.Group>
      <Form.Group className="mb-3">
        <Select 
          placeholder= "Select genre..."
            value={genre}
            styles={selectDropdownStyles}
            isClearable
            onChange={setGenre}
            options={genresOptions}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: '#cf76ff4e',
                primary: '#cf76ff',
              },
            })}
          />
      </Form.Group>
      <Form.Group className="mb-3">
        <Select 
            isClearable
            placeholder="Select sample type..."
            value={type}
            onChange={setType}
            options={types}
            styles={selectDropdownStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: '#cf76ff4e',
                primary: '#cf76ff',
              },
            })}
          />
      </Form.Group>
      <Form.Group className="mb-2 d-flex justify-content-center">
        <Button variant="primary" className="mx-2" type="submit">
          Submit
        </Button>
        <Button className="mx-2" variant="primary" type="reset" onClick={handleReset}>
          Reset 
        </Button>
      </Form.Group>
      {isLoading ? renderSpinner : null}
    </Form>
  )
}

export default Filter