import React from "react"


   function CompanyRow(prop){
       const company = prop.company
       return(
  
<tr>
       <td>{company.id}</td>
       <td>{company.companyName}</td>
       <td>{company.email}</td>
       <td>{company.password}</td>
</tr>


  
  
  );
} 

export default CompanyRow;
