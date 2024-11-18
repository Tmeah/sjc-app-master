import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import logo from "../images/sjclogo.png";
import "../styles/nav.css";
import ContactForm from "./ContactForm";

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" className="navbar-div">
      <Container>
        <NavbarBrand className="nav-logo-div">
          <img src={logo} alt="" className="nav-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-links" navbar>
            <NavItem>
              <NavLink
                tag={Link}
                to="/"
                smooth
                className="navbar-link link__hover--effect link__hover--effect--white"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/#services"
                smooth
                className="navbar-link link__hover--effect link__hover--effect--white"
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/#about-us"
                smooth
                className="navbar-link link__hover--effect link__hover--effect--white"
              >
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/gallery"
                smooth
                className="navbar-link link__hover--effect link__hover--effect--white"
              >
                Our Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/#contact-us"
                onClick={toggleModal}
                smooth
                className="navbar-link link__hover--effect link__hover--effect--white"
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>

      <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        {isModalOpen && (
          <ContactForm onClose={toggleModal} isModalOpen={isModalOpen} />
        )}
      </div>
    </Navbar>
  );
}

export default Navigation;
