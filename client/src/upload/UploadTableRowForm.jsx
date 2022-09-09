import {React , useState} from 'react'
import Select from 'react-select'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const UploadTableRowForm = () => {
  const [type, setselectedType] = useState(null);
  const [sampleName , setSampleName] = useState("")
  const [bpm , setBpm] = useState(null)

  const types = [
    { value: 'one-shot', label: 'One Shot' },
    { value: 'loop', label: 'Loop' },
  ]
  function handleSampleName(e){
    setSampleName(e.target.value)
  }

  function handleBpm(e) {
    setBpm(e.target.value)
  }
  
  function handleClick(){
    const newSample = {
      name: sampleName,
      type: type.value,
      bpm: bpm,
    }
    console.log(newSample)
  }
  return (
    <tr className="align-items-center">
      <td>
        <Button className="ms-2" onClick={handleClick}>+</Button>
      </td>
      <td>
        <Form.Control type="file" size="sm" accept="audio/*" title="*" required/>
      </td>
      <td>
        <Form.Control type="text" placeholder="Use underscores , no spaces" value={sampleName} onChange={handleSampleName} required/>
      </td>
      <td>Category</td>
      <td>Key</td>
      <td>Genre</td>
      <td>
        <Form.Control type="number" placeholder="BPM" onChange={handleBpm}  value={bpm} min="0" max="200" required/>
      </td>
      <td>
        <Select 
          required
          onChange={setselectedType}
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