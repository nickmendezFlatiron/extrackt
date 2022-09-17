import {React , useState} from 'react'
import Select from 'react-select'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UploadTableRowForm = ({setSamples , samples}) => {
  const [type, setSelectedType] = useState(null);
  const [genre , setSelectedGenre] = useState(null)
  const [key ,setSelectedKey] = useState(null)
  const [sampleName , setSampleName] = useState("")
  const [bpm , setBpm] = useState(null)
  const [file , setFile] = useState()

  const genres = [ "pop","rock","hip-hop","rap","country","rnb", "jazz", "metal", "electronic", "soul", "ambient", "funk","raggae", "disco","classical","house","indie","techno","trap","dubstep", "gospel","latin", "raggaeton", "grime", "edm", "synthwave", "cinematic", "trance", "experimental","electro","idm","acapella"]

  const types = [
    { value: 'one-shot', label: 'One Shot' },
    { value: 'loop', label: 'Loop' },
    { value: 'melody', label: 'Melody' },
    { value: 'vocal', label: 'Vocal' },
    { value: 'drum', label: 'Drum' },
    { value: 'fx', label: 'FX' },
    { value: 'percussion', label: 'Percussion' },
    { value: 'foley', label: 'Foley' },

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
    {value: "sharp", label: "♯"},
    {value: "flat", label: "♭"},
  ]
  const halfStepExist = key && key.filter(k => /sharp/.exec(k.value) ||  /flat/.exec(k.value))
  const hideHalfSteps = halfStepExist?.length > 0 ? [] : halfStep
  
  const scales = [
    {value: "minor", label: "min"},
    {value: "major", label: "maj"}
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
  }]

  
  
  const genresOptions = genres.map(genre => {return {value: genre , label: genre}})
  

  function handleSampleName(e){
    setSampleName(e.target.value)
  }

  function handleBpm(e) {
    setBpm(parseInt(e.target.value))
  }

  function handleFile(e) {
    let name = e.target.files[0].name.split(" ").join("_")
    setFile(e.target.files[0])
    setSampleName(name.substring(0 , name.length - 4))
    
    // let reader = new FileReader()
    // reader.readAsDataURL(e.target.files[0])
    // reader.onload = (e) => {
    //   // console.log(reader.result)
    // }
  }
  
  function handleClick(e){
    e.preventDefault()
    const newSample = {
      name: sampleName,
      type: type.value,
      genre: genre.value,
      key,
      bpm,
      file
    }
    setSamples(()=>[newSample, ...samples ])
    setSampleName("")
    document.querySelector('#formFile').reset()
  }

  const selectDropdownStyles = {
    // control: styles => ({ ...styles, backgroundColor: 'white' }),
    // container: styles => ({ ...styles,  width: 100  }),
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
        />
      </td>
      <td>
        <Form.Control 
          type="text" 
          placeholder="Use underscores , no spaces" 
          value={sampleName} 
          onChange={handleSampleName} 
          
        />
      </td>
      <td>
      <Select 
          value={key}
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
          min="0" max="200" 
          
        />
      </td>
      <td>
        <Select 
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