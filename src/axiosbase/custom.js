import axios from 'axios';

let userItem =  JSON.parse(localStorage.getItem("userItem"))?.jwtToken;
const authFetch = axios.create({
  baseURL: 'https://real-pear-fly-kilt.cyclic.app',
  headers: {
    Accept: 'application/json',
    Authorization : "bearer " + userItem
  },
});

export default authFetch;