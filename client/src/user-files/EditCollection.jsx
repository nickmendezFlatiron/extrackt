import {React , useEffect, useContext}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CollectionContext from '../context/CollectionContext'
import { LoginContext } from '../context/LoginContext'
import { Container } from 'react-bootstrap'
const EditCollection = () => {
  const params = useParams()
  const {collection , setCollection} = useContext(CollectionContext)
  const {user, setErrors, errors} = useContext(LoginContext)
  const navigate = useNavigate()
  
  useEffect(()=>{
    setCollection(null)
    if (user) {
      fetch(`/user/${user.id}/collections/${params.collection_id}`)
        .then(r => {
          if(r.ok) {
            r.json().then(r => {
              setCollection(r)
            }) 
          } else {
              if (r.status === 401) {
                navigate("/")
              }
              r.json().then(e => {
                setErrors(e.errors)
              })
            }
        })
    }
  },[user])
  return (
    <Container>
      Hello WOrld
    </Container>
  )
}

export default EditCollection