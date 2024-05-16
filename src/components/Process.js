import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import bookImg from "../imgs/book.svg";
import calendarImg from "../imgs/calendar.svg";
import resultsImg from "../imgs/results.svg";

const reasons = [
  {
    id: 1,
    icon: bookImg, // Path to the image used for personalized learning
    title: "Personalized Learning",
    description:
      "Customized sessions that adapt to your learning style and pace, ensuring you grasp complex concepts more effectively.",
  },
  {
    id: 2,
    icon: calendarImg, // Path to the image used for scheduling
    title: "Flexible Scheduling",
    description:
      "Learn at your convenience with our flexible scheduling options that fit into your busy lifestyle.",
  },
  {
    id: 3,
    icon: resultsImg, // Path to the image used for guarantee
    title: "Satisfaction Guaranteed",
    description:
      "Our commitment to quality ensures you are satisfied with your learning progress, or your money back.",
  },
];

const reviews = [
  {
    id: 1,
    name: "James Lee",
    comment:
      "The personalized attention I received helped me excel in subjects I used to struggle with. EduCam is just fantastic!",
    course: "Math Mastery Series",
  },
  {
    id: 2,
    name: "Erica Wells",
    comment:
      "Thanks to EduCam, I topped my class in History this semester! Their program really works.",
    course: "History Prep",
  },
  {
    id: 3,
    name: "Carlton Banks",
    comment:
      "Their flexible schedule was perfect for my busy lifestyle, and the tutors are top-notch. Highly recommend!",
    course: "Flexible Learning Paths",
  },
];

function Process() {
  return (
    <Container className="why-eduCam-container min-vh-100">
      <Row className="section-header">
        <Col>
          <h1 className="text-center">Why Join EduCam?</h1>
        </Col>
      </Row>
      <Row className="justify-content-center reason-row">
        {reasons.map((reason) => (
          <Col md={4} className="reason-col" key={reason.id}>
            <div className="reason-content">
              <img
                src={reason.icon}
                alt={reason.title}
                className="reason-icon"
              />
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center reviews-row my-4">
        {reviews.map((review) => (
          <Col md={4} key={review.id} className="text-center">
            <blockquote className="review">
              <p>"{review.comment}"</p>
              <footer className="review-footer">
                - {review.name},{" "}
                <cite title="Source Title">{review.course}</cite>
              </footer>
            </blockquote>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Button variant="success" size="lg" className="cta-button">
            Join EduCam Now!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Process;
