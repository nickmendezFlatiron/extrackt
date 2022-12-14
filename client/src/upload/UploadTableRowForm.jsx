import {React , useState, useRef, useEffect, useContext} from 'react'
import { LoginContext } from '../context/LoginContext'
import Select from 'react-select'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import uuid from 'react-uuid'

const UploadTableRowForm = ({setAlertColor, setSamples , samples, setShowAlert}) => {
  const [type, setSelectedType] = useState(null);
  const [genre , setSelectedGenre] = useState(null)
  const [sample_key ,setSelectedKey] = useState(null)
  const [sampleName , setSampleName] = useState("")
  const [bpm , setBpm] = useState(null)
  const [file , setFile] = useState()
  const fileRef = useRef()
  const {setErrors} = useContext(LoginContext)
  useEffect(()=>{
    if (samples.length === 0) {
      setSelectedType(null)
      setSelectedGenre(null)
      setSelectedKey(null)
      setSampleName("")
      setBpm(null)
      fileRef.current.value = null
    }
  },[samples])
  

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
  

  function handleSampleName(e){
    setSampleName(e.target.value)
  }

  function handleBpm(e) {
    if (e.target.value > 200) {
      setBpm(200)
      e.target.value = 200
    } else if(e.target.value <= 200 || e.target.value > 0) {
      setBpm(parseInt(e.target.value))
    } else if( Number.isNaN(e.target.value)  === true) {
      e.target.value = null
      setBpm(null)
    } else if(e.target.value === 0 || e.target.value < 1) {
      setBpm(1)
      e.target.value = 1
    }
  }

  function handleFile(e) {
    let name = e.target.files[0].name.split(" ").join("_")
    if(name.length >= 36) {
      setSampleName(name.substring(0 , 32))
    } else if(name.length < 36) {
      setSampleName(name.substring(0 , name.length - 4))
    }

    setFile(e.target.files[0])
  
  }
  
  function handleClick(e){
    e.preventDefault()
    setShowAlert(false)
    setErrors([])
    if(sampleName.length < 1 || sampleName === null || !file || !sample_key || sample_key?.length === 0 || !genre || genre?.value.length === 0 || !Number.isInteger(bpm) || !type || type.value?.length === 0){
      setAlertColor("danger")
      setShowAlert(true)
     return  setErrors(["Fill out all sample inputs fields prior to adding a sample"])
    } 
    const keyArray = sample_key.map(k => {return k.value})
    const newSample = {
      id: uuid(),
      keyLabel: sample_key,
      name: sampleName,
      type: type.value,
      genre: genre.value,
      sample_key: keyArray,
      bpm,
      file
    }
    setSamples(()=>[newSample, ...samples ])
    setSampleName("")
    fileRef.current.value = null
  }

  const selectDropdownStyles = {
    menuList: styles => ({...styles , height: 200})
  };
  
  return (
    <tr>
      <td>
        <Button className="ms-3" onClick={handleClick}>+</Button>
      </td>
      <td>
        <Form.Control 
          id="formFile"
          style={{width: '150px'}}
          type="file" 
          size="sm" 
          accept="audio/wav" 
          title="*" 
          onChange={handleFile} 
          ref={fileRef}
          onDragStart={(e)=> e.preventDefault()} 
          onDrop={(e)=> e.preventDefault()}   
        />
      </td>
      <td>
        <Form.Control 
          type="text" 
          placeholder="Use underscores , no spaces" 
          value={sampleName} 
          onChange={handleSampleName} 
          maxLength="40"
        />
      </td>
      <td>
      <Select 
          value={sample_key}
          isMulti
          styles={selectDropdownStyles}
          onChange={setSelectedKey}
          options={keyOptions}
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
      </td>
      <td>
      <Select 
          value={genre}
          styles={selectDropdownStyles}
          isClearable
          onChange={setSelectedGenre}
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
      </td>
      <td>
        <Form.Control 
          type="number" 
          placeholder="BPM" 
          onChange={handleBpm}  
          value={bpm} 
          min="1" max="200" 
        />
      </td>
      <td>
        <Select 
          isClearable
          value={type}
          onChange={setSelectedType}
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
      </td>
    </tr>
  )
}

export default UploadTableRowForm