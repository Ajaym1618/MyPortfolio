import React from "react";
import Header from './pages/Header';
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const App = () => {
  return <div className="w-[100%] h-auto bg-white">
    <Header/>
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
  </div>;
};

export default App;
