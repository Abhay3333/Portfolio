import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import "./App.css";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
