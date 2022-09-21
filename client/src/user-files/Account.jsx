import {React , useState, useContext, useEffect} from 'react'
import { LoginContext} from '../context/LoginContext'
import Errors from '../Errors'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useNavigate} from 'react-router-dom'


const Account = ({user , spinner}) => {

  const [name , setName] = useState("")
  const [userEmail , setEmail] = useState("") 
  const {setUser , setErrors, isAuthenticated} = useContext(LoginContext)
  const navigate = useNavigate()

  function handleName(e){
    setName(e.target.value)
  }
  
  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const updatedInfo = {
      full_name: name,
      email: userEmail
    }
    fetch(`/users/${user.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(updatedInfo)
    }).then(r=>{
      if(r.ok){
        r.json().then(user => {
          setUser(user)
          setErrors([])
        }
        )
      } else(r.json().then((e)=>{
          setErrors(e.errors[0])
      }))
    })

  }

  function handleDelete(){
    if (window.confirm(`Deleting your account is not reversible and will remove all associated collections.Please confirm that you want to delete your account`)) {
      fetch(`/users/${user.id}` , {method: "DELETE"}).then(r => {
        if (r.ok) { 
          isAuthenticated(false)
          setUser({})
          navigate("/signup")
        }
      })

  }
  }
  useEffect(()=>{
    if(user){
      setName(user.full_name)
      setEmail(user.email)
    }
  },[user])

  if (!user) return spinner

  
  return (
    <Container className="pb-5">
      <Row>
        <Col lg={5} className="creme-bg py-5 ps-5 rounded-4 offset">
          <h1 className='text-dark fw-bold'> {user && user.username}</h1>
          <h2 className="text-dkg">{user && user.account_type}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="John Doe" value={name} onChange={handleName}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control className="mb-3" type="email" placeholder="Enter email" value={userEmail} onChange={handleEmail}/>
              <Errors />
              <Button type="submit" primary="true" className="fs-5 fw-bold">Save</Button>
              <Button onClick={handleDelete} variant="link" type="button">Delete My Account</Button>
            </Form.Group>
          </Form>
          <div className="text-secondary pb-3">
            <h4>{user && user.credits} Credits</h4>
            <h4>Total Downloads</h4>
            <h4>Total Favorites</h4>
          </div>
          <div className="d-flex align-content-center">
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Account