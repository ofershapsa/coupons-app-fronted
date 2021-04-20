import React from "react"
import axios from 'axios';
import { Form } from 'react-bootstrap';

//import Select from "react-bootstrap-select"
//import { Link } from 'react-router-dom';


export default class Login extends React.Component {
  
  state = {
    type: '',
    name: '',
    password: '',
    
  }

  constructor(props) {
    super(props);
    this.authenticated = false;
    this.inputField = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleName = this.handleName.bind(this)
    
    //   this.handleT = this.handleT(e).bind(this);
  }
  
  isAuthenticated() {
    
    return this.authenticated;
    
  }
  
  handleSubmit(e) {
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
  
  
  
  
  handleT(e) {
    e.preventDefault();
    e.persist();
    
    setTimeout(() => {
      
      this.setState({ type: this.inputField.current.value })
      console.log(this.state.type)
    }, 0);
    
  }
  
  handlePassword(e) {
    e.persist();
    
    setTimeout(() => {
      
      this.setState({ password: e.target.value })
      console.log(this.state.password)
      
    }, 0);
    
  }
  
  
  handleName(e) {
    e.persist();
    
    setTimeout(() => {
      
      this.setState({ name: e.target.value })
      console.log(this.state.name)
      
    }, 0);
    
    
  }
  
  
  render() {
    
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



}
/*<Select ref={this.inputField} onChange={e=>this.handleT(e)}>
    <option  disabled >--Select type--</option>
    <option value='ADMIN' >-Admin</option>
    <option value ='COMPANY'>-Company</option>
    <option value='CUSTOMER'>-Customer</option>

</Select>
*/