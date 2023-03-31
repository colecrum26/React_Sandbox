import React from "react";
import Thermostat from "./components/Thermostat";
import AboutMe from "./components/aboutMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
        path = "/"
        element = {<Thermostat />}
        />
        <Route
        path = "/About"
        element = {<AboutMe />}
        />
      </Routes>
      <Link to="/About">About</Link>
    </Router>
  );
}

export default App;
