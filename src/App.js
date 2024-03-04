import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
