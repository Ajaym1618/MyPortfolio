import './App.css';
import Header from './components/Header/header';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skill from './components/Skills/skill';
import Project from './components/projecks/project';
import Education from './components/Education/education';
import Internship from './components/Internship/internship';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
    <div className="mainContainer">
      <Header/>
      <Intro/>
    </div>
    <About/>
    <Skill/>
    <Education/>
    <Project/>
    <Internship/>
    <Footer/>
    </>
  );
}

export default App;


