import React,{ useState, useEffect } from "react"
import axios from "axios";
import { BsFillXSquareFill } from 'react-icons/bs';
import { Form,Button } from 'react-bootstrap';
const InsertCustomer = (e) => { 
    e.preventDefault();
        const [customer, setCustomer] = useState({
            customer: [{
                name :"naor",
                password:"naor123"
            } ]
        });
    const endpoint ="http://localhost:8080/admin/createCustomer"
    const requestOptions = {
        
        body: JSON.stringify({ name:{name},password:{password} })
    };
    const {  name, password } = customer;
    const user = { name, password};

    axios.post(endpoint,requestOptions 
    )
    .then((response) => {
        console.log(response);
        window.location.href = "/admin";
    }, (error) => {
        console.log(error);
    });
};
function handleLogout() { 
    window.location.href = "/admin";
}

function AddNewCustomer(){
    
    
    
  return(
  <div  class= "table-responsive"> 
<h3>Add New Customer</h3>
<BsFillXSquareFill className="exitIcon" onClick={handleLogout} />
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control size="lg" type="name" placeholder="Enter Name" />
</Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control size="lg" type="password" placeholder="Password" />
  </Form.Group>
  
  <Button onSubmit={InsertCustomer} variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>

  
  );
} 

export default AddNewCustomer;
