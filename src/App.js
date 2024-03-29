import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router/AppRoutes"; // Adjust the path as necessary
import Navbar from "./components/navbar/navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
