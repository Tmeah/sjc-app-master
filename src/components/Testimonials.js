import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/style.css";

const testimonials = [
  {
    id: 1,
    text: "My daughter is currently a registered student with EDUCAM tuition. She has  progressed well in all her subjects  like triple sciences and maths. The teacher is an excellent young man who has experience  to deliver the teaching system very well and he is  kind and respectful .I recommend students who want to do better in their GCSE to join educam tuition.",
    author: "Satisfied Parent",
    rating: 5,
  },
  {
    id: 2,
    text: "My child is attending lessons from educam, she really looks forward to her lessons, which I never thought would happen, the teachers have such a positive attitude and genuinely care about the students. Along with academic lessons they also give advice about time management and revision techniques. It has given my daughter a really positive approach to learning. I already have recommended educam to my friends and family.",
    author: "Satisfied Parent",
    rating: 5,
  },
  // ... add more testimonials
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const goToPrev = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <Container className="min-vh-100 text-center d-flex flex-column justify-content-center">
      <Row>
        <h1>
          Our <span className="green-txt">Testimonials</span>
        </h1>
      </Row>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={10}>
          <div className="testimonial-wrapper d-flex align-items-center">
            <button className="arrow-btn left-arrow" onClick={goToPrev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <Card
              className={`testimonial-card flex-grow-1 shadow-sm transition-${index}`}
            >
              <Card.Body>
                <Card.Text className="testimonial-text">
                  {testimonials[index].text}
                </Card.Text>
                <div className="testimonial-rating">
                  {"★".repeat(testimonials[index].rating)}
                </div>
                <Card.Footer className="text-muted testimonial-author">
                  {testimonials[index].author}
                </Card.Footer>
              </Card.Body>
            </Card>
            <button className="arrow-btn right-arrow" onClick={goToNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
