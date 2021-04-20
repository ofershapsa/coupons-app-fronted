import React from "react"
import axios from 'axios';
import { Form } from 'react-bootstrap';

function Login(){

    return (
    
        <div className="login">
          <h2 className="header" >Coupons App</h2>
        
          <div className="login-triangle"></div>
  
      <h2 className="login-header">Log in </h2>
  
          <form className="login-container" onSubmit={this.handleSubmit}>
            <p>
  
              <input type="text" placeholder="Name" onChange={e => this.handleName(e)} /></p>
            <p><input type="password" placeholder="Password" onChange={e => this.handlePassword(e)} /></p>
            <p>
              <Form>
  
                <Form.Group controlId="exampleForm.SelectCustom">
  
  
                  <Form.Control as="select" custom ref={this.inputField} onChange={e => this.handleT(e)}   >
  
                    <option disabled>Select Type</option>
                    <option value='ADMIN'>Admin</option>
                    <option value='COMPANY'>Company</option>
                    <option value='CUSTOMER'>Customer</option>
                  </Form.Control>
  
                </Form.Group>
              </Form>
  
            </p>
  
            <p><input type="submit" value="Log in" /></p>
  
          </form>
  
  
        </div>
     
      );
    

}

function handleSubmit(e) {
    e.preventDefault();
    const endpoint = "http://localhost:8080/authenticate";
    const username = this.state.name;
    const password = this.state.password;
    const type = this.state.type;
    const user_object = {
      username: username,
      password: password,
      type: type
      
    };
    
    if (this.inputField.current.value === 'ADMIN') {
      
      axios.post(endpoint, user_object)
      
      .then(res => {
        console.log(res.data);
        localStorage.setItem("authorization", res.data.token);
        if (res.data.token != null) {
          this.authenticated = true;
          console.log(this.isAuthenticated())
          this.props.history.push(this.inputField.current.value)
        }
      }).catch(res => {
        console.log(res.data);
      }
      )
    }
    
    if (this.inputField.current.value === 'COMPANY') {
      axios.post(endpoint, user_object)
      
      .then(res => {
        console.log(res.data);
        
        localStorage.setItem("authorization", res.data.token);
        if (res.data.token != null) {
          this.props.history.push(this.inputField.current.value)
        }
      }).catch(res => {
        console.log(res.data);
      }
      )
      
    }
    
    if (this.inputField.current.value === 'CUSTOMER') {
      axios.post(endpoint, user_object)
      
      .then(res => {
        
        console.log(res.data);
        localStorage.setItem("authorization", res.data.token);
        if (res.data.token != null) {
          this.props.history.push(this.inputField.current.value)
        }
      }).catch(res => {
        console.log(res.data);
      }
      )
      
    }
    

    }
  

export default Login;