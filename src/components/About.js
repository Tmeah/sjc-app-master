import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

const problems = [
  {
    id: 1,
    title: "Struggling with Complex Concepts?",
    description:
      "If you find yourself baffled by complex subjects, our tailored tutoring breaks down tough topics into manageable, understandable parts. EduCam is for students who need that extra bit of guidance to grasp challenging material.",
  },
  {
    id: 2,
    title: "Worried About Your Next Exam?",
    description:
      "Feel underprepared and anxious about upcoming exams? EduCam's comprehensive preparation courses are designed to boost your confidence and help you secure the best possible results.",
  },
  {
    id: 3,
    title: "Disengaged with Classroom Learning?",
    description:
      "If traditional classroom lessons don’t capture your interest, our interactive sessions are designed to keep you engaged and make learning enjoyable. EduCam is perfect for students who need a more dynamic learning environment.",
  },
  {
    id: 4,
    title: "Can't Find Time to Study?",
    description:
      "Struggling to fit study time into your busy schedule? EduCam offers flexible scheduling to adapt to your lifestyle, allowing you to learn at your pace, on your time.",
  },
  {
    id: 5,
    title: "Concerned About Learning Gaps?",
    description:
      "Our personalized assessments identify and target your specific learning gaps, providing a solid foundation and tailored educational support. EduCam is here to ensure you have no gaps in your understanding.",
  },
  {
    id: 6,
    title: "Need a Motivation Boost?",
    description:
      "If you're losing motivation and need inspiration, our supportive tutors are skilled at rekindling a love for learning and keeping you motivated. EduCam is for anyone who needs that extra push to succeed.",
  },
];

function About() {
  return (
    <Container className="min-vh-100 d-flex align-items-center flex-column justify-content-center">
      <Row>
        <h1 className="text-center my-5">Who is EduCam for?</h1>
      </Row>
      <Row>
        {problems.map((problem, index) => (
          <Col md={4} key={problem.id} className="mb-4">
            <Card className="edu-card">
              <Card.Body className="edu-card-body">
                <Card.Title className="edu-card-title">
                  {problem.title}
                </Card.Title>
                <Card.Text className="edu-card-text">
                  {problem.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
