import axios from "axios";

const authFetch = axios.create( {
baseURL : "https://real-pear-fly-kilt.cyclic.app"
     
})

let userItem =  JSON.parse(localStorage.getItem("userItem"))?.jwtToken;

  
  authFetch.interceptors.request.use(
    (request) => {

     
      
      request.headers["Authorization"] =
      `Bearer ${userItem} `
      console.log('request sent');
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );
  
  authFetch.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something
        console.log('NOT FOUND');
      }
      return Promise.reject(error);
    }
  );
  

export default authFetch;