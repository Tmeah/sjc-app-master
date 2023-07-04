import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // import HashLink
import logo from "../images/sjclogo-removebg.png";
import "../styles/footer.css";

import ContactForm from "./ContactForm";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="footer-div">
      <div className="footer-logo-div">
        <img src={logo} alt="" className="footer-logo" />
      </div>
      <div className="footer-links-div">
        <ul className="footer-links">
          <li>
            <Link
              to="/"
              smooth
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              smooth
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              smooth
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/#about-us"
              smooth
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/#contact-us"
              onClick={toggleModal}
              smooth
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <span className="copyright">
          Website Developed & Maintained by &copy;{" "}
          <a
            href="https://tausifmeah.co.uk/"
            target="_blank"
            className="footer-link--t"
            rel="noreferrer"
          >
            <u>Tausif Meah.</u>
          </a>
        </span>
      </div>
      <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        {isModalOpen && (
          <ContactForm onClose={toggleModal} isModalOpen={isModalOpen} />
        )}
      </div>
    </div>
  );
}

export default Footer;
