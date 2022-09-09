import {React , useState} from 'react'
import Select from 'react-select'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const FormTableRow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const types = [
    { value: 'one-shot', label: 'One Shot' },
    { value: 'loop', label: 'Loop' },
  ]
  
  return (
    <tr>
      <td>
        <Button className="">Del</Button>
      </td>
      <td>
        <Form.Control type="text" placeholder="name" className='w-75'/>
      </td>
      <td>Category</td>
      <td>Key</td>
      <td>Genre</td>
      <td>
        <Form.Control type="text" placeholder="BPM" className=''/>
      </td>
      <td>
        <Select 
          defaultValue={selectedOption}
          onChange={setSelectedOption}
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

export default FormTableRow