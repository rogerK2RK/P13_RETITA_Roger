
import Home from "./pages/Home/index.jsx";
import User from "./pages/User/index.jsx";
import LogIn from "./pages/SignIn/index.jsx";
import ErrorPage from "./pages/Erreur/index.jsx";
import argentBankLogo from './assets/img/argentBankLogo.png';
import { isLogged, firstName } from "./selectors.js";
import { useSelector, useDispatch  } from 'react-redux';
import { clearSession } from './actions';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";



function App() {
  const isLoggedEx = useSelector(isLogged);
  const firstNameEx = useSelector(firstName);
  const dispatch = useDispatch();

  function logout(e){
    dispatch(clearSession());
    e.preventDefault();
  };
  // console.log(firstNameEx);

  return ( 
    <Router>
      <React.StrictMode>
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
              { !isLoggedEx ? 
              <a className="main-nav-item" href="/sign-in">
                <i className="fa fa-user-circle"></i>
                Sign In
              </a> 
              : <div className="bx-sgn-name">
              <p className="main-nav-item" >
                <i className="fa fa-user-circle"></i>
                {firstNameEx}
              </p> 
              <a href="/sign-in" className="btn-lgout" >
                se deconnecter
              </a> 
              </div>
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
      </React.StrictMode>
    </Router>
  );
}

export default App;
