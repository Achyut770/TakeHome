import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TopNavbar from "./Components/Navbar/TopNavbar";
import NavRoutes from "./Components/Route";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="routesNadNavbar">
        <Navbar />
        <div className="Other_Routes">
          <NavRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
