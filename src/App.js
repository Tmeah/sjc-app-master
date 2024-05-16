import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cards from "./components/Cards";
import About from "./components/About";
import "./styles/style.css";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Process />
      <Cards />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
