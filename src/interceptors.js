import Cookies from 'js-cookie';
var axios = require("axios");
export const jwtToken =Cookies.get("token") ;


axios.interceptors.request.use(
  function(config) {
    if (jwtToken) {
      config.headers["authorization"] ="Bearer " + jwtToken;
      
    }
    return config;
  },

  function(err) {
     
    return Promise.reject(err);
  }
);