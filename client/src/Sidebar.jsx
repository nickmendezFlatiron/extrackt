import {React } from 'react'


import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

import logo from "./assets/top-logo.png"

const Sidebar = ({user}) => {


  return (
      <>
        <Navbar   expand="false" className="mx-3">
          <Container fluid >
            <div className='d-flex align-items-center'>
            <Navbar.Brand href="/"><h2 className="text-dark rounded-3 pt-2">Extrackt.</h2></Navbar.Brand>
            <Image src={logo} className="nav-logo"/>
            </div>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" className="light-purple-bg">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-false"
              aria-labelledby="offcanvasNavbar-expand-false"
              placement="start"
              className="light-purple-bg"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                <h2 className="pt-2">Extrackt.</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-inline-flex no-padding-margin">
                <Nav className="fs-4 roboto text-dark ">
                  <Nav.Link href="/" className="px-2 sidebar">Home</Nav.Link>
                  <Nav.Link href="/marketplace" className="px-2 sidebar">The Crate</Nav.Link>
                  <Nav.Link href={`/${user.username}/downloads`} className="px-2 sidebar">My Downloads</Nav.Link>
                  <Nav.Link href={`/${user.username}/samples`} className="px-2 sidebar">Manage Samples</Nav.Link>
                  <Nav.Link href="/upload" className="px-2 sidebar">Upload</Nav.Link>
                </Nav>
              </Offcanvas.Body>
                <Container className="no-padding-margin">
                <Nav.Link  className="px-2 sidebar fs-4">Logout</Nav.Link>
                  <hr/>
                  <Nav.Link className="px-2 sidebar"><h2 className='text-dark'>{user.username}</h2></Nav.Link>
                  <h6 className='text-secondary px-2' >{user.credits} Credits</h6>
                </Container>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    
  )
}

export default Sidebar