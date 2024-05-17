import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import aqaLogo from "../imgs/2-removebg-preview.png";
import edexcelLogo from "../imgs/pearson-edexcel-igcse-schools.png";
import ocrLogo from "../imgs/3-removebg-preview.png";
import wjecLogo from "../imgs/WJEC_Logo_Black.png";
import logo from '../imgs/logo.png'

function Home() {
  return (
    <Container fluid className="home-container">
      <Container>
        <Row className="d-flex align-center ">
          <Col
            md={12}
            className="d-flex align-center justify-content-center flex-column text-center"
          >
            <h1 className="landing-header">
            <img src={logo} width={320} height={180} alt="educam-logo" />
            
            </h1>
            <p className="landing-text my-3">
SPECIALIST'S IN CAR AUDIO, SECURITY AND CUSTOMISATIONS
            </p>

            {/* <div className="landing-btn-div">
              <Button className="landing-btn mb-4" onClick={console.log("1")}>
                Book a FREE consultation now!
              </Button>
            </div> */}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <div className="marquee">
              <div className="marquee-content">
                {[...Array(25)].map(
                  (
                    _,
                    index // Repeat images to fill the marquee
                  ) => (
                    <React.Fragment key={index}>
                      <img src={aqaLogo} alt="AQA Exam Board" />
                      <img
                        src={wjecLogo}
                        alt="WJEC Exam Board"
                        className="wjec-logo"
                      />
                      <img src={edexcelLogo} alt="Edexcel Exam Board" />
                      <img src={ocrLogo} alt="OCR Exam Board" />
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
