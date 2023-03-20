import React from "react";
import Signin from "./components/signin";
import Signup from "./components/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/home";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
    <div>
          <div>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/sign-in" element={<Signin/>} />
              <Route path="/sign-up" element={<Signup/>} />
              <Route path="/home" element={<Home/>} />
            </Routes>
          </div>
    </div>
    
    </Router>
    
  );
}

export default App;
