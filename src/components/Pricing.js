import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const pricingOptions = [
  {
    id: 1,
    title: "Group Sessions",
    subtitle: "£15",
    description: [
      "Personalized small-group tutoring.",
      "Inclusive environment boosting confidence.",
      "Effective study and exam techniques.",
      "Regular progress tracking with parental feedback.",
      "Simplifying complex concepts.",
    ],
  },
  {
    id: 2,
    title: "Pay as you go",
    subtitle: "£25",
    description: [
      "Flexible 'Pay-as-you-go' sessions.",
      "No long-term commitments required.",
      "Convenient scheduling for spontaneous learning needs.",
      "Customizable content to focus on immediate goals.",
    ],
  },
  {
    id: 3,
    title: "1 on 1 Tutoring",
    subtitle: "£30",
    description: [
      "Comprehensive learning for deep understanding.",
      "Highly personalized classes to target specific needs or explore new areas.",
      "Individualized feedback and advice to meet educational goals.",
      "Flexible scheduling tailored to student preferences and availability.",
    ],
  },
];

function Pricing() {
  return (
    <Container className="min-vh-100 d-flex align-items-center flex-column justify-content-center">
      <Row>
        <h1 className="text-center my-5">Our Pricing</h1>
      </Row>
      <Row>
        {pricingOptions.map((option) => (
          <Col md={4} key={option.id} className="mb-4">
            <Card
              className={
                option.id === 2 ? "edu-card special-color" : "edu-card"
              }
            >
              <Card.Body className="edu-card-body">
                <Card.Title className="edu-card-title">
                  {option.title}
                </Card.Title>
                <Card.Subtitle className="edu-card-subtitle mb-2">
                  {option.subtitle}
                </Card.Subtitle>
                <Card.Text className="edu-card-text">
                  <ul>
                    {option.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Button className="custom-btn mt-auto">Get Started</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Pricing;
