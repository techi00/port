import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Title from "./components/title";
import About from "./components/about";
import Footer from "./components/footer";
import ProjectSection from "./components/projectSection";
import Tech from "./components/tech";


function App() {
  return (
  <div>
    <Navbar />
    <Title name="chinoy tech" leadText="I am a freelance developer from India" />
    <About />
    <Tech />
    <ProjectSection />
    <Footer />
    

    </div>
  );
}

export default App;
