import {React , useState} from 'react'
import Select from 'react-select'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const UploadTableRowForm = ({setSamples , samples}) => {
  const [type, setSelectedType] = useState(null);
  const [genre , setSelectedGenre] = useState(null)
  const [key ,setSelectedKey] = useState(null)
  const [sampleName , setSampleName] = useState("")
  const [bpm , setBpm] = useState(null)
  const [file , setFile] = useState()

  const types = [
    { value: 'one-shot', label: 'One Shot' },
    { value: 'loop', label: 'Loop' },
    { value: 'melody', label: 'Melody' },

  ]

  const genres = [ "pop","rock","hip-hop","rap","country","rnb", "jazz", "metal", "electronic", "soul", "ambient", "funk","raggae", "disco","classical","house","indie","techno","trap","dubstep", "gospel","latin", "raggaeton", "grime", "edm", "synthwave", "cinematic", "trance", "experimental","electro","idm","acapella"]
  
  const genresOptions = genres.map(genre => {return {value: genre , label: genre}})
  
  const keysOptions = [
    {value: "a", label:"A"},
    {value: "b", label: "B"},
    {value: "c", label: "C"},
    {value: "d", label: "D"},
    {value: "e", label: "E"},
    {value: "f", label: "F"},
    {value: "g", label: "G"},
    {value: "sharp", label: "♯"},
    {value: "flat", label: "♭"},
    {value: "minor", label: "min"},
    {value: "major", label: "maj"}
    
  ]

  const categories = ["fx","drums","percussion","vocal"]

  function handleSampleName(e){
    setSampleName(e.target.value)
  }

  function handleBpm(e) {
    setBpm(parseInt(e.target.value))
  }

  function handleFile(e) {
    let name = e.target.files[0].name.split(" ").join("_")
    let reader = new FileReader()
    setFile(e.target.files[0])
    setSampleName(name)

    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e) => {
      // console.log(reader.result)
    }
  }
  
  function handleClick(){
    const newSample = {
      name: sampleName,
      type: type.value,
      genre: genre.value,
      key,
      bpm: bpm,
      file,
      category: "test"
    }
    setSamples([...samples , newSample])
  }

  const selectDropdownStyles = {
    // control: styles => ({ ...styles, backgroundColor: 'white' }),
    // container: styles => ({ ...styles,  width: 100  }),
    menuList: styles => ({...styles , height: 200})
  };

  return (
    <tr className="align-items-center">
      <td>
        <Button className="ms-2" onClick={handleClick}>+</Button>
      </td>
      <td>
        <Form.Control 
          type="file" 
          size="sm" 
          accept="audio/wav" 
          title="*" 
          onChange={handleFile}
          required
        />
      </td>
      <td>
        <Form.Control 
          type="text" 
          placeholder="Use underscores , no spaces" 
          value={sampleName} 
          onChange={handleSampleName} 
          required
        />
      </td>
      <td>Category</td>
      <td>
      <Select 
          isMulti
          styles={selectDropdownStyles}
          required
          onChange={setSelectedKey}
          options={keysOptions}
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
          styles={selectDropdownStyles}
          required
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
          required
        />
      </td>
      <td>
        <Select 
          required
          onChange={setSelectedType}
          options={types}
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