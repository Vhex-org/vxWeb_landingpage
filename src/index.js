import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import Account from './components/Account';
import Story from './components/Story';

const Routing = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/vxWeb_landingpage" element={<App />} />
        <Route path="/vxWeb_landingpage/contact" element={<ContactForm />} />
        <Route path="/vxWeb_landingpage/login" element={<Login />} />
        <Route path="/vxWeb_landingpage/account" element={<Account />} />
        <Route path="/vxWeb_landingpage/story" element={<Story />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
