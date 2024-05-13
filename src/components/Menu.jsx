import React from 'react'
import { Navbar,Container,Nav,NavDropdown  } from 'react-bootstrap'
import Logo from "../assets/logo.png"
import "./menu.css"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <Navbar expand="lg" className="menu_bg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link>Service</Link>
            <Link>Contact</Link>
          </Nav>

          <div className="btn">
            <a href="#"><FaCloudDownloadAlt className='icon'/> Download</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu