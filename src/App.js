import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Generate from "../src/pages/Home"
import Navbar from "./components/Navbar";

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <Router>
      <div>
        <Navbar />
          <Generate />
          {/* <Route exact path="/" component={Generate} />   */}
      </div>
    // </Router>
  );
}

export default App;
