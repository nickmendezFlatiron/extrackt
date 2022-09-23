import {React, useContext}from 'react'
import {LoginContext} from '../context/LoginContext'
import CollectionContext from '../context/CollectionContext'

import CloseButton from 'react-bootstrap/CloseButton'

const EditTableRow = ({sample, toggleDeletePermission, deletePermission, handleSamples, samples}) => {
  const {id, name, genre, sample_type, bpm, sample_key} = sample
  const {setErrors} = useContext(LoginContext)
  const {setCollection, collection} = useContext(CollectionContext)
  
  const letters = ["a", "b", "c", "d", "e", "f", "g"]
  const half = ["sharp", "flat"]
  // const scale = ["major", 'minor']
  
  const renderKeys = sample_key?.map(k =>{
      if (letters.includes(k)){
        return k.toUpperCase()
      } else if (half.includes(k)){
       return k === "flat" ? "♭" : "♯";
      } else return k
  }).join("")
  
  function handleDelete(){
    if(!deletePermission){
      if(window.confirm("Are You sure you want to delete this sample? This action is irreversible.")){
        fetch(`/samples/${id}`, {method: "DELETE"})
          .then(r => {
            if(r.ok){
            setErrors([])
            const filteredSamples = samples.filter(sample => sample.id !== id)
            collection.samples = filteredSamples
            setCollection({...collection})
          } else {
           setErrors(["Delete unsuccessful, please try again."])
          }
          })
      }
          
 
      
    }
  }
  return (
    <tr id={name} className="align-middle" >
    <td>{name}</td>
    <td>{genre}</td>
    <td>{sample_type}</td>
    <td>{bpm}</td>
    <td>{renderKeys}</td>
    <td>
      <CloseButton onClick={handleDelete}/>
      {/* <Button id={id} type="button" onClick={handleDownload}>DL</Button> */}
      {/* <Button variant="white" className=" ms-2 text-primary">✓</Button> */}
    </td>
  </tr>
  )
}

export default EditTableRow