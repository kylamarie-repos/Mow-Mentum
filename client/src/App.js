import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Header /> {/*Make sure it's always displayed*/}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer /> {/*Make sure it's always displayed*/}
    </Router>
    </>
  );
}

export default App;
