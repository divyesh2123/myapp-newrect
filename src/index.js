import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Emplopyee from './pages/Emplopyee';
import Display from './components/Display';
import TutorialForm from './components/TutorialForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
// import './axiosbase/global';
import Accounts from './pages/Accounts';
import Comments from './pages/Comments';
import Student from './pages/Student';
import MyForm from './components/MyForm';
import FullFormFunction from './pages/FullFormFunction';
import SimpleFormik from './pages/SimpleFormik';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    {/* <Login />  */}
    {/* <Student/>  */}
  
    <SimpleFormik/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
