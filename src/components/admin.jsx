import React from "react"
import Cookies from 'js-cookie';
//import { Table,Nav,Navbar,NavDropdown } from 'react-bootstrap';
//import NavBar from './AdminNavBar.jsx';

  
//  function componentDidMount(){
 //   const jwtToken = localStorage.getItem("authorization");
 // }
  function handleLogout() { 
   // localStorage.clear();
   Cookies.remove("token");
    window.location.href = "/";
  }
 

 // render(){
   function Admin(){
   
  return(
  <div  className = "adminHomePic">
    

  </div>
  
  );
}

export default Admin;
 /*
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Admin-Page</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/CompaniesList">Companies list</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
*/