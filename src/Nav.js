import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './Nav.css';

function NavBar() {   
        return (
            <Router>
              <Navbar collapseOnSelect bg="dark" variant ="dark" expand="lg">
                
                <Navbar.Brand href="/">Benjamin Allouch</Navbar.Brand>
                  <Navbar.Toggle 
                   className="navbar-toggler-icon" 
                   data-toggle="collapse" 
                   data-target="#responsive-navbar-nav" 
                   aria-controls="responsive-navbar-nav" 
                   aria-expanded="false"  
                   aria-label="Toggle navigation"/>

                    <Navbar.Collapse id="responsive-navbar-nav">                      
                      <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="assets/cv.pdf" target="_blank">CV (PDF)</Nav.Link></Nav.Item>
                      </Nav>
                   
                    </Navbar.Collapse>  
              </Navbar>
            </Router>
        );        
      }        

export default NavBar;
