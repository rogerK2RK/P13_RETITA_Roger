
import Home from "./pages/Home/index.jsx";
import User from "./pages/User/index.jsx";
import LogIn from "./pages/SignIn/index.jsx";
import ErrorPage from "./pages/Erreur/index.jsx";
import argentBankLogo from './assets/img/argentBankLogo.png';
import { useSelector } from 'react-redux';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isLogged = useSelector((state)=> state.user.isLogged);

  //faire une function seulement quand le statut est connecter
  const firstName = useSelector((state)=> {
    console.log(state)
    return state.user.firstName
  });
  // // console.log("ici c'est pour voir si il est connecter" + isLogged);
  // firstName == "" ? 
  console.log(firstName);

  // useEffect(() => {
    
  //   firstName.then(() =>  setIsLoading(false))
  // },[]);

  return ( 
    <React.StrictMode>
      <Router>
      <div className="App">
        <nav className="main-nav">
          <a className="main-nav-logo" href="/">
            <img
              className="main-nav-logo-image"
              src={argentBankLogo}
              
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
            { !isLogged ? <a className="main-nav-item" href="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a> : <a className="main-nav-item" href="/sign-in">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </a> 
            }
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}/>
        <Route path="/sign-in" element={<LogIn />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </Router>
    </React.StrictMode>
  );
}

export default App;
