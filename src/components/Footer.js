import React, { useState } from "react";
import { Row, Col, Image, Nav } from "react-bootstrap";
import logo from "../imgs/EduCam-dark.png";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="footer-div ">
      <Row>
        <Col>
          <Image
            src={logo}
            alt=""
            className="footer-logo"
            width={240}
            height={100}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Nav className="text-center footer-links">
            <Nav.Link href="/" onClick={toggleModal} className="footer-link">
              Home
            </Nav.Link>
            <Nav.Link href="/#services" className="footer-link">
              Services
            </Nav.Link>
            <Nav.Link href="/gallery" className="footer-link">
              Gallery
            </Nav.Link>
            <Nav.Link href="/#about-us" className="footer-link">
              About Us
            </Nav.Link>
            <Nav.Link href="/shop" className="footer-link">
              {" "}
              Shop
            </Nav.Link>
            <Nav.Link href="/#contact-us" className="footer-link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col className="text-center copyright ">
          <span className="">
            Website Developed & Maintained by{" "}
            <a
              href="https://tausifmeah.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="footer-link--t"
            >
              Tausif Meah
            </a>
          </span>
        </Col>
      </Row>
      {/* Modal implementation can be added here */}
    </div>
  );
}

export default Footer;
