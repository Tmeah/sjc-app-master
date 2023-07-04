import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";
import "@fontsource/roboto";
import "@fontsource/nunito";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Router>
      <ScrollToTop />
      <React.Fragment>
        <div style={{ zIndex: 10, position: "relative" }}>
          <Navigation toggleModal={toggleModal} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        {isModalOpen && <ContactForm onClose={toggleModal} />}
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
