import React, { useRef, useReducer, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import {useHistory} from "react-router";
import AppCtx from "../Context";

//import Select from "react-bootstrap-select"
//import { Link } from 'react-router-dom';

/*
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
 */

function apiReducer(state, action) {
    if (state.isLoading && action.type === "DONE") {
        return {
            isLoading: false,
            data: action.payload,
            error: null,
           
        }
    }
    if (state.isLoading && action.type === "ERROR") {
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        }
    }
    if (!state.isLoading && action.type === "FETCH") {
        return {
            ...state,
            isLoading: true,
            username: action.payload.username,
            password: action.payload.password,
            type: action.payload.type
        }
    }
    return state;
}

function useTokenApi() {
    const [state, dispatch] = useReducer(apiReducer, {isLoading: false, error: null, data: null})
    const history = useHistory();
    const endpoint = "http://localhost:8080/authenticate";
   
    useEffect(() => {
        if (localStorage.getItem("authorization") ) {
            history.push("/");
        }
    }, [history])

    useEffect(() => {
        if (state.isLoading) {
          axios.post(endpoint , { username: state.username, password: state.password, type: state.type })
          .then(res => {
            console.log(res.data);
            localStorage.setItem("authorization", res.data.token);
            if (res.data.token != null) {

              history.push(`/${state.type}`)
        }
  
           
          }) . catch(err => console.log(err))
        
        }
        if (!state.isLoading && state.data !== null) {
          localStorage.setItem("authorization", state.data)
        }
      }, [state, history ])
      
      return {...state, dispatch}
      }
      
      function Login() {
        const {isLoading, dispatch} = useTokenApi();
        const nameRef = useRef(null);
        const pswRef = useRef(null);
        const typeRef = useRef(null);
        
        return (
          <div className="login">
      <h2 className="header">Coupons App</h2>

      <div className="login-triangle"></div>

      <h2 className="login-header">Log in </h2>

      <form
        className="login-container"
        onSubmit={(e) => {
          e.preventDefault();
          const username = nameRef.current && nameRef.current.value 
          const password = pswRef.current && pswRef.current.value 
          const type = typeRef.current && typeRef.current.value 
          dispatch({ type: "FETCH", payload: {username, password, type} })
        }}
        >
        <p>
          <input type="text" placeholder="Name" ref={nameRef} />
        </p>
        <p>
          <input type="password" placeholder="Password" ref={pswRef} />
        </p>
      
        <p>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom ref={typeRef}>
                <option disabled>Select Type</option>
                <option value="ADMIN">Admin</option>
                <option value="COMPANY">Company</option>
                <option value="CUSTOMER">Customer</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </p>

        <p>
          <input disabled={isLoading} type="submit" value="Log in" />
        </p>
      </form>
    </div>
  );
  
}
/*
console.log(res.data);
localStorage.setItem("authorization", res.data.token);
if (res.data.token != null) {
  history.push(this.inputField.current.value)
  */
 
 /* state = {
   type: '',
   name: '',
   password: '',
   
  }
  */
 /*
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
  
  
}).catch(res => {
console.log(res.data);
  
  
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
*/

export default Login;
/*<Seexport default App;lect ref={this.inputField} onChange={e=>this.handleT(e)}>
    <option  disabled >--Select type--</option>
    <option value='ADMIN' >-Admin</option>
    <option value ='COMPANY'>-Company</option>
    <option value='CUSTOMER'>-Customer</option>
</Select>
*/