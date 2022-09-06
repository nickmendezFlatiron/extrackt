import {React } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Sidebar = ({user}) => {


  return (
      <>
        <Navbar   expand="false" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><h2>Extrackt.</h2></Navbar.Brand>
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
                <h2>Extrackt.</h2>
                
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-inline-flex">
                <Nav className="fs-4 roboto">
                  <Nav.Link href="#action1" >Home</Nav.Link>
                  <Nav.Link href="#action2">The Crate</Nav.Link>
                  <Nav.Link href="#action2">My Downloads</Nav.Link>
                  <Nav.Link href="#action2">Manage Samples</Nav.Link>
                  <Nav.Link href="#action2">Upload</Nav.Link>
                </Nav>
              </Offcanvas.Body>
                <Container>
                  <hr/>
                  <h2>{user.username}</h2>
                  <h6 className='text-secondary'>{user.credits} Credits</h6>
                </Container>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    
  )
}

export default Sidebar