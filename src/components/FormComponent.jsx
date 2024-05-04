import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import aos from "aos";
import "aos/dist/aos.css";

import FormImg from "../images/corporate-meeting-change.jpg";

import "./FormComponent.css";

import gmail from "../images/social/gmail.png";
import insta from "../images/social/instagram.png";
import facebook from "../images/social/facebook.png";
import linkedin from "../images/social/linkedin.png";
import x from "../images/social/x.png";

function FormComponent() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="form--container" id="form" loading="lazy">
      <img src={FormImg} alt="form-img" />
      <section className="page--form" id="page-form">
        <h1 className="form--header" data-aos="fade-up">
          Connect Now
        </h1>

        <a
          className="social--media"
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhfdCxWfzzPRjbDPgqgxXzDLvZsZXwhPXfNvZcNSSngTlZkcqfMbHqZgJkJxWltkwlSV"
        >
          <img src={gmail} alt="" className="social--img" />
          <p className="social--name">Gmail</p>
        </a>

        <a
          className="social--media"
          href="https://www.instagram.com/sampitofficial/"
        >
          <img src={insta} alt="" className="social--img" />
          <p className="social--name">Instagram</p>
        </a>

        <a
          className="social--media"
          href="https://www.facebook.com/profile.php?id=61559128370952"
        >
          <img src={facebook} alt="" className="social--img" />
          <p className="social--name">Facebook</p>
        </a>

        <a
          className="social--media"
          href="https://www.linkedin.com/in/manoj-v-38a047220/"
        >
          <img src={linkedin} alt="" className="social--img" />
          <p className="social--name">LinkedIn</p>
        </a>

        <a className="social--media" href="https://twitter.com/home">
          <img src={x} alt="" className="social--img" />
          <p className="social--name">X</p>
        </a>
      </section>
    </div>
  );
}

export default FormComponent;
