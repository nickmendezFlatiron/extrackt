import {React, useContext} from 'react'
import { LoginContext } from './context/LoginContext'
import uuid from 'react-uuid'

const Errors = () => {
  const {errors} = useContext(LoginContext)
  console.log(errors)

  const displayErrors = errors && errors.map(e=>{return <li key={uuid()} className="text-danger">{e}</li>})
  return (
    <ol>
      {displayErrors}
    </ol>
  )
}

export default Errors