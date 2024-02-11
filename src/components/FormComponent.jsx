import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import aos from "aos";
import "aos/dist/aos.css";

import FormImg from "../images/corporate-meeting-change.jpg";

import "./FormComponent.css";

function FormComponent() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const [state, handleSubmit] = useForm("mzbndzdb");
  if (state.succeeded) {
    return (
      <div className="form--container" id="form" loading="lazy">
        <img src={FormImg} alt="form-img" />
        <form
          onSubmit={handleSubmit}
          className="page--form"
          id="page-form"
          name="formtag"
          method="POST"
        >
          <p className="submitted--success">FORM SUBMITTED SUCCESSFULLY</p>
          <h1 className="form--header" data-aos="fade-up">
            Enquire Now
          </h1>

          <div className="name--container">
            <input
              type="text"
              placeholder="Name"
              name="username"
              id="username"
              required
              className="form--input"
              data-aos="fade-up"
            />
          </div>

          <div className="mail--number--container">
            <div className="mail">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="E-mail"
                className="form--input"
                data-aos="fade-up"
              />
            </div>
            <div className="number">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="E.g.+91 1122334455"
                className="form--input"
                data-aos="fade-up"
              />
            </div>
          </div>

          <div className="message--container">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your Message..."
              className="form--input textarea"
              rows={4}
              data-aos="fade-up"
            ></textarea>
          </div>

          <button data-aos="fade-up">Send Message</button>
        </form>
      </div>
    );
  }

  return (
    <div className="form--container" id="form" loading="lazy">
      <img src={FormImg} alt="form-img" />
      <form
        onSubmit={handleSubmit}
        className="page--form"
        id="page-form"
        name="formtag"
        method="POST"
      >
        <h1 className="form--header" data-aos="fade-up">
          Enquire Now
        </h1>

        <div className="name--container">
          <input
            type="text"
            placeholder="Name"
            name="username"
            id="username"
            required
            className="form--input"
            data-aos="fade-up"
          />
        </div>

        <div className="mail--number--container">
          <div className="mail">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="E-mail"
              className="form--input"
              data-aos="fade-up"
            />
          </div>
          <div className="number">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="E.g.+91 1122334455"
              className="form--input"
              data-aos="fade-up"
            />
          </div>
        </div>

        <div className="message--container">
          <textarea
            name="message"
            id="message"
            placeholder="Enter your Message..."
            className="form--input textarea"
            rows={4}
            data-aos="fade-up"
          ></textarea>
        </div>

        <button data-aos="fade-up">Send Message</button>
      </form>
    </div>
  );
}

export default FormComponent;
