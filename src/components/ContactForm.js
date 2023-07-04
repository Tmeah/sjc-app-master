import React, { useState } from "react";
import "../styles/contactform.css";
import {
  FaSpinner,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaInstagram,
  FaFacebook,
  FaMapMarked,
} from "react-icons/fa";
// import emailjs from "emailjs-com";

const ContactForm = ({ onClose, isModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const [success /*setSuccess] */] = useState(false);

  const handleContact = (event) => {
    event.preventDefault();
    setLoading(true);

    //     emailjs
    //       .sendForm(
    //         "service_3z6t7ek",
    //         "template_xpg0xms",
    //         event.target,
    //         "user_BBq1wqUbR0NpeCxXj9acX"
    //       )
    //       .then(() => {
    //         setLoading(false);
    //         setSuccess(true);
    //       })
    //       .catch(() => {
    //         setLoading(false);
    //         alert(
    //           "The email service is temporarily unavailable. Please contact me directly on tausifmeah@gmail.com"
    //         );
    //       });
  };

  const toggleModal = () => {
    onClose();
  };

  return (
    <div>
      <div className={`modal ${isModalOpen ? "modal--open" : "modal--closed"}`}>
        <div className="modal-holder">
          <FaTimes
            className="fas fa-times modal__exit click"
            click
            onClick={toggleModal}
          ></FaTimes>{" "}
          <div className="modal__about">
            <div className="about__titles">
              <h3 className="modal__title  modal__title--about red">
                {" "}
                Contact Us.
              </h3>
              <h4 className="modal__subtitle modal__subtitle--about">
                {" "}
                Fill in the Form for any enquiries and our team will get back to
                you within 24 hours.
              </h4>
            </div>
            <div className="contact__links--div">
              <ul className="contact__links">
                <a href="tel:01633 276682" className="contact__link">
                  <li className="contact__link--li">
                    <FaPhone className="contact__icon"></FaPhone>
                    01633 276682
                  </li>
                </a>
              </ul>
              <a href="mailto:info@sjconcepts.co.uk" className="contact__link">
                <li className="contact__link--li">
                  <FaEnvelope className="contact__icon"></FaEnvelope>
                  info@sjconcepts.co.uk{" "}
                </li>
              </a>
              <a
                href="http://maps.google.com/?q=Unit 1 Leeway Court Leeway Industrial Estate Newport NP194SJ"
                className="contact__link"
                target="_blank"
                rel="noreferrer"
              >
                <li className="contact__link--li">
                  <FaLocationArrow className="contact__icon"></FaLocationArrow>
                  Unit 1 Leeway Court Leeway Industrial Estate Newport NP194SJ{" "}
                </li>
              </a>
            </div>

            <div className="modal__languages">
              <figure className="modal__language">
                <FaFacebook className="modal__langauage--img"></FaFacebook>
              </figure>{" "}
              <figure className="modal__language">
                <FaInstagram className="modal__langauage--img"></FaInstagram>
              </figure>
              <figure className="modal__language">
                <FaMapMarked className="modal__langauage--img"></FaMapMarked>
              </figure>
            </div>
          </div>
          <div className="modal__half modal__contact">
            <div className="modal__title modal__title--contact">
              <h3 className="modal__sub--title modal__subtitle--contact">
                Let's have a chat!
              </h3>
              <h3 className="modal__subtitle modal__subtitle--contact">
                {" "}
                Book in your installation today.
              </h3>
              <form id="contact__form" onSubmit={handleContact}>
                <div className="form__item">
                  <label className="form__item--label">Name</label>
                  <input
                    className="input"
                    name="user_name"
                    type="text"
                    required
                  ></input>
                </div>
                <div className="form__item">
                  <label className="form__item--label">E-mail</label>
                  <input
                    className="input"
                    name="user_email"
                    type="email"
                    required
                  ></input>
                </div>
                <div className="form__item">
                  <label className="form__item--label">Message</label>
                  <textarea
                    className="input"
                    name="message"
                    type="text"
                    required
                  ></textarea>
                </div>
                <button id="contact__submit" className="form__submit">
                  Send it my way
                </button>
              </form>
              <div
                className={`modal__overlay ${
                  loading ? "modal__overlay--visible" : ""
                } modal__overlay--loading`}
              >
                <FaSpinner className="icon"></FaSpinner>
              </div>
              <div
                className={`modal__overlay ${
                  success ? "modal__overlay--visible" : ""
                } modal__overlay--success`}
              >
                Thanks for the message! looking forward to speaking to you soon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
