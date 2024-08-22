import React from "react";
import Header from './pages/Header';
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return <div className="w-[100%] h-auto bg-white">
    <Header/>
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </div>;
};

export default App;
