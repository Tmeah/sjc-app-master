import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../imgs/EduCam-dark.png";
import { Col } from "react-bootstrap";

function Navigation() {
  return (
    <Col md={12} className="nav-col">
      <Navbar expand="lg" className="" variant="">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width={180} height={80} alt="educam-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-4">
              <Nav.Link href="#home" className="mx-4 link">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="mx-4 link">
                About
              </Nav.Link>
              <Nav.Link href="#link1" className="mx-4 link">
                Services
              </Nav.Link>
              <Nav.Link href="#link2" className="mx-4 link">
                Testimonials
              </Nav.Link>
              <Nav.Link href="#link3" className="ms-4 link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
  );
}

export default Navigation;
