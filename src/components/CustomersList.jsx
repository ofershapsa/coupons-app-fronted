import React,{ useState, useEffect } from "react"
import { Table } from 'react-bootstrap';
import CustomerRow from "./CustomerRow"
import axios from "axios";
import { jwtToken } from "../interceptors";
import { BsFillXSquareFill } from 'react-icons/bs';
function handleLogout() { 
    window.location.href = "/admin";
  }

function CustomersList(){
  const [customers, setCustomers] = useState({
   customers: []
  });
  const endpoint ="http://localhost:8080/admin/getAllCustomers"
  useEffect(() => {
    //  e.preventDefault();
    axios.get(endpoint)
    .then(response =>{
      setCustomers({ customers: response.data })
      console.log(response.data)
      //console.log(jwtToken)
    //   console.log(companies.companies)
    })
    .catch(err => console.log(err))
        
      },[])
    
    


  return(
  <div  class= "table-responsive"> 
<h3> CustomersList</h3>
<BsFillXSquareFill className="exitIcon" onClick={handleLogout} />
<Table striped bordered hover variant="dark">
  <thead>
  
            
    <tr>
      <th>ID</th>
      <th>Customer Name</th>
      <th>Password</th>
    </tr>
        
  </thead>

  <tbody>

  {customers.customers.map(customer => (
              <CustomerRow key={customer.id} customer={customer}  />
            ))}
  </tbody>
</Table>
  </div>

  
  );
} 

export default CustomersList;
