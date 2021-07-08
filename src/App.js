import React, { useState } from "react";

// components
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Hero />
      <About />
    </>
  );
}

export default App;
