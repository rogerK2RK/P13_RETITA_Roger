
import Home from "./pages/Home/index.jsx";
import User from "./pages/User/index.jsx";
import LogIn from "./pages/SignIn/index.jsx";
import ErrorPage from "./pages/Erreur/index.jsx";
import argentBankLogo from './assets/img/argentBankLogo.png';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
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
            <a className="main-nav-item" href="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
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
