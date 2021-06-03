import React,{ useState, useEffect } from "react"
import { Table } from 'react-bootstrap';
import CompanyRow from "./CompanyRow"
import axios from "axios";
import { jwtToken } from "../interceptors";


function CompaniesList(){
  const [compenies, setCompenies] = useState({
   companies: []
  });
  const endpoint ="http://localhost:8080/admin/getAllCompanies"
  useEffect(() => {
    //  e.preventDefault();
    axios.get(endpoint)
    .then(response =>{
      setCompenies({ companies: response.data })
      console.log(response.data)
      //console.log(jwtToken)
    //   console.log(companies.companies)
    })
    .catch(err => console.log(err))
        
      },[])
    
    


  return(
  <div  class= "table-responsive"> 
<h3> CompaniesList</h3>
<Table striped bordered hover variant="dark">
  <thead>
  
            
    <tr>
      <th>ID</th>
      <th>Company Name</th>
      <th>Email</th>
      <th>Password</th>
    </tr>
        
  </thead>

  <tbody>

   {compenies.companies.map(company => (
              <CompanyRow key={company.id} company={company}  />
            ))}
  </tbody>
</Table>
  </div>

  
  );
} 

export default CompaniesList;
