import React from "react";
import { Container, Accordion } from "react-bootstrap";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "What educational programs does EduCam offer?",
      answer:
        "EduCam offers a wide range of educational programs including standardized test preparation, STEM education, language learning, and more, all tailored to fit students' individual learning styles.",
    },
    {
      id: 2,
      question: "How are tutors selected at EduCam?",
      answer:
        "Our tutors are selected through a rigorous vetting process that includes academic verification, teaching experience assessment, and a personal interview to ensure they meet our high standards.",
    },
    {
      id: 3,
      question: "Can I change my tutor if I'm not satisfied?",
      answer:
        "Yes, if you feel that your tutor isn't a good fit, you can request a change. We strive to ensure that all student-tutor matches are successful and conducive to learning.",
    },
    {
      id: 4,
      question: "What are the qualifications of your tutors?",
      answer:
        "Our tutors typically have at least a bachelor's degree in their teaching field, many with master's degrees or higher. They also have extensive tutoring or teaching experience.",
    },
    {
      id: 5,
      question: "How does online tutoring work at EduCam?",
      answer:
        "Online tutoring sessions are conducted using our interactive learning platform that includes video calling, a virtual whiteboard, and session recording features, allowing for a dynamic and engaging learning experience.",
    },
    {
      id: 6,
      question: "What is your refund policy?",
      answer:
        "We offer a satisfaction guarantee with a refund for the first tutoring session if you're not completely satisfied with our service.",
    },
    {
      id: 7,
      question: "How can I track my child's progress?",
      answer:
        "Parents can track their child's progress through our parent portal which provides detailed reports on performance, session notes, and assessment outcomes.",
    },
    {
      id: 8,
      question: "Are group sessions available?",
      answer:
        "Yes, we offer both one-on-one and group session formats. Group sessions are a great way to learn collaboratively and can be more cost-effective.",
    },
    {
      id: 9,
      question: "Do you offer any preparatory materials?",
      answer:
        "Yes, we provide a range of preparatory materials including practice tests, worksheets, and interactive exercises designed to complement our tutoring sessions.",
    },
    {
      id: 10,
      question:
        "What measures do you take to ensure the safety of online sessions?",
      answer:
        "We prioritize safety with all online sessions encrypted and monitored under strict data protection regulations. Tutors also undergo background checks.",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-3">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        {faqData.map((faq, index) => (
          <Accordion.Item eventKey={`${index}`} key={faq.id}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQ;
