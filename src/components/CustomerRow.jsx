import React from "react"


   function CustomerRow(prop){
       const customer = prop.customer
       return(
  
<tr>
       <td>{customer.id}</td>
       <td>{customer.customerName}</td>
       <td>{customer.password}</td>
</tr>


  
  
  );
} 

export default CustomerRow;
