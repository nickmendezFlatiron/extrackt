import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import LoginModal from './LoginModal'

const Navigation = ({handleShow , handleClose , toggleModal}) => {
  return (
    <Navbar  variant="light" className="mx-5 fs-5 align-items-end ">
        <Navbar.Brand href="/"><h2 className="text-dark light-purple-bg px-2 rounded-3 pt-3">Extrackt.</h2></Navbar.Brand>
        <Nav className="me-auto pb-1 fs-4">
          <Nav.Link href="/plans" className="mx-2">Plans</Nav.Link>
          <Nav.Link  href="/about">About</Nav.Link>
        </Nav>
        <Button variant="dark" className="fs-5 fw-bold text-white mb-2" onClick={handleShow}>Login</Button>
        <LoginModal toggleModal={toggleModal} handleClose={handleClose}/>
      </Navbar>
  )
}

export default Navigation