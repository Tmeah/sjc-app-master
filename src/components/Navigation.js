import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../imgs/logo.png";
import { Col } from "react-bootstrap";

function Navigation() {
  return (
    <Col md={12} className="nav-col">
      <Navbar expand="lg" className="" variant="dark">
        <Container>
      
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto mt-4">
              <Nav.Link href="#home" className="mx-5 link">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="mx-5 link">
                About
              </Nav.Link>
              <Nav.Link href="#link1" className="mx-5 link">
                Services
              </Nav.Link>
              <Nav.Link href="#link2" className="mx-5 link">
                Testimonials
              </Nav.Link>
              <Nav.Link href="#link3" className="ms-5 link">
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
