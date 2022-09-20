import{useState ,React} from 'react'


import Select from 'react-select'
import Form from  'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Filter = ({handleFilterQuery}) => {
  const [search , setSearch] = useState("")
  const [key, setKey] = useState(null)
  const [genre, setGenre] = useState(null)
  const [bpm , setBpm] = useState(null)
  const [type, setType] = useState(null)

  function handleSearch(e){
    setSearch(e.target.value)
  }

  function handleBpm(e){
    if (e.target.value > 200) {
      setBpm(200)
      e.target.value = 200
    } else if(e.target.value <= 200 || e.target.value > 0) {
      setBpm(parseInt(e.target.value))
    } else if(e.target.value == NaN) {
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
  }

  function handleSubmit(e){
    e.preventDefault()
    const searchParams = {
      sample_type: type?.value,
      name: search,
      key, 
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
      if(param === "key") {
        searchObj[param] = key.map(k => {return k.value})
      } else {
        searchObj[param] = searchParams[param]
      }
    })
    console.log(searchObj)
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
  const keyExist = key && key.filter(k => /[a-g]/.exec(k.value) && k.value.length === 1)
  const hideKeys = keyExist?.length > 0 ? [] : songKeys 

  const halfStep = [
    {value: "flat", label: "♭"},
    {value: "sharp", label: "♯"}
  ]
  const halfStepExist = key && key.filter(k => /sharp/.exec(k.value) ||  /flat/.exec(k.value))
  const hideHalfSteps = halfStepExist?.length > 0 ? [] : halfStep
  
  const scales = [
    {value: "major", label: "maj"},
    {value: "minor", label: "min"}
  ]

  const scalesExist = key && key.filter(k => k.value.includes("minor") || k.value.includes("major"))
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

  return (
    <Form className="my-2" onSubmit={handleSubmit}>
      {/* <h3 className="text-center mt-2">Filter</h3> */}
      <InputGroup size="lg" className="px- mb-3">
        <FormControl  
          aria-label="Large" 
          aria-describedby="inputGroup-sizing-sm" 
          placeholder='Search Samples...' 
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
          value={key}
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
    </Form>
  )
}

export default Filter