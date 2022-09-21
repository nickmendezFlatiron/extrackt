import {React, useContext} from 'react'
import { LoginContext } from '../context/LoginContext'

import Button from 'react-bootstrap/Button'
import {songKeys} from '../context/SelectContext'
const CollectionTableRow = ({sample, setArrayIndex, samples, arrayIndex, showAlert}) => {
  const {id, name , bpm, artist, genre, key, sample_type, sample_url} = sample
  const {setErrors} = useContext(LoginContext)

  const letters = ["a", "b", "c", "d", "e", "f", "g"]
  const half = ["sharp", "flat"]
  const scale = ["major", 'minor']
  
  const renderKeys = key.map(k =>{
      if (letters.includes(k)){
        return k.toUpperCase()
      } else if (half.includes(k)){
       return k === "flat" ? "♭" : "♯";
      } else return k
  }).join("")

  
  function handleDownload(e){
    e.stopPropagation()
    fetch(`/samples/${id}`)
      .then (r=>{
        if(r.ok){
          r.json().then(s=>{
            debugger
            // download(s.sample_url)
          })
        } else{
          r.json().then(e =>{
              setErrors(e.errors)
              showAlert(true)
          })
        }
      })
  }

  function handleSelectedSample(e){
    e.stopPropagation()
    const index = samples.findIndex(s => s.name === name)
    setArrayIndex(index)
  }

  return (
    <tr id={name} className="align-middle" onClick={handleSelectedSample}>
      <td>{name}</td>
      <td>{genre}</td>
      <td>{sample_type}</td>
      <td>{bpm}</td>
      <td>{renderKeys}</td>
      <td>
        <a href={`http://localhost:3000/samples/${id}`} target="_blank" rel="noreferrer noopener">DL</a>
        {/* <Button id={id} type="button" onClick={handleDownload}>DL</Button> */}
        {/* <Button variant="white" className=" ms-2 text-primary">✓</Button> */}
      </td>
    </tr>
  )
}

export default CollectionTableRow