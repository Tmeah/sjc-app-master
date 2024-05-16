import { Container, Row, Col, Image } from "react-bootstrap";

import potentialImage from "../imgs/potential.svg";
import supportImage from "../imgs/support.svg";
import examImage from "../imgs/exam.svg";
import flyImage from "../imgs/fly.svg";
import connectedImage from "../imgs/connected.svg";
import educationImage from "../imgs/education.svg";

const valuePoints = [
  {
    id: 1,
    title: "Unlock Your Full Potential",
    description:
      "Imagine a learning process so tailored that every session builds your strengths and addresses your weaknesses. Our personalized plans use adaptive learning techniques to ensure maximum comprehension and retention, setting you up for lifelong success.",
    image: potentialImage,
    reverse: false,
  },
  {
    id: 2,
    title: "Support Anytime, Anywhere",
    description:
      "Never feel stuck again, whether it's late night study sessions or early morning queries. Our 24/7 support system means expert help is always a click away, ensuring you can learn on your schedule without any interruptions.",
    image: supportImage,
    reverse: true,
  },
  {
    id: 3,
    title: "Conquer Every Exam",
    description:
      "Step into your exams with confidence. Our comprehensive preparation strategies and materials are crafted from the latest educational research, providing you with all the tools needed to excel under any testing conditions.",
    image: examImage,
    reverse: false,
  },
  {
    id: 4,
    title: "Reach Academic Excellence",
    description:
      "Our commitment to educational excellence means we only rest when you achieve top grades. With advanced learning methodologies and performance tracking, we ensure your academic goals aren't just met—they're exceeded.",
    image: flyImage,
    reverse: true,
  },
  {
    id: 5,
    title: "Global Learning, Local Connection",
    description:
      "Access world-class education from anywhere in the world and connect with local study groups and tutors. Our global network supports a vibrant community of learners, making education both accessible and community-oriented.",
    image: connectedImage,
    reverse: false,
  },
  {
    id: 6,
    title: "Exclusive Learning Materials",
    description:
      "Gain an edge with our exclusive study materials, including custom tutorials, practice tests, and learning aids not available anywhere else. Tailored to fit the curriculum you're mastering, these resources transform your educational experience.",
    image: educationImage,
    reverse: true,
  },
];

function Cards() {
  return (
    <Container className="min-vh-100 d-flex flex-column justify-content-center my-5">
      <Row className="my-5 text-center">
        <Col>
          <h1>Transform Your Life with EduCam</h1>
          <p>
            Discover how our unique approach to learning can dramatically
            improve your academic and personal success.
          </p>
        </Col>
      </Row>

      {valuePoints.map((point) => (
        <Row
          key={point.id}
          className={point.reverse ? "flex-md-row-reverse" : ""}
        >
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div>
              <h2>{point.title}</h2>
              <p>{point.description}</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              src={point.image}
              alt={point.title}
              width={300}
              height={300}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Cards;
