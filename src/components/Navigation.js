import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // import HashLink from react-router-hash-link
import logo from "../images/sjclogo.png";
import "../styles/nav.css";
import ContactForm from "./ContactForm";

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="navbar-div">
      <div className="nav-logo-div">
        <img src={logo} alt="" className="nav-logo" />
      </div>
      <div className="navbar-links-div">
        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              smooth
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              smooth
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              smooth
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/#about-us"
              smooth
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/#contact-us"
              onClick={toggleModal}
              smooth
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        {isModalOpen && (
          <ContactForm onClose={toggleModal} isModalOpen={isModalOpen} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
