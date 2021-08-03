import React from 'react'
import { Table,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import Cookies from 'js-cookie';

function handleLogout() { 
    // localStorage.clear();
    Cookies.remove("token");
     window.location.href = "/";
   }

function AdminNavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/admin">Admin-Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/CompaniesList">Companies list</Nav.Link>
            <Nav.Link href="/CustomersList">Customers list</Nav.Link>
            <NavDropdown title="Actions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/addNewCustomer">Add New Customer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link  eventKey={2} href="#memes" onClick={handleLogout}>
              LOG OUT
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default AdminNavBar

