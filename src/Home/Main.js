import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Ride } from "../Ride/Ride";
import { Drive } from "../Drive/Drive";
import { About } from "../About/About";
import { Help } from "../Help/Help";
import { Home } from "./Home";
import { Navbar } from "../Navbar/navbar";
import "../App.css";

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

export const Main = () => {
  return (
    <div className="App">
      <Navbar />
      <ScrollToSection />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ride" element={<Ride />} />
        <Route exact path="/drive" element={<Drive />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/help" element={<Help />} />
      </Routes> */}
      <main>
        <Home />
        <Ride />
        <Drive />
        <About />
        <Help />
      </main>
    </div>
  );
};
