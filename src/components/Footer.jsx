import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

import { Element } from "react-scroll";

import aos from "aos";
import "aos/dist/aos.css";

import bgImg1 from "../images/contactbg1.jpg";
import bgImg2 from "../images/officebg.jpeg";
import bgImg3 from "../images/malaysiabg.jpeg";

import "./Footer.css";
import FormComponent from "./FormComponent";

export default function Footer() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <footer>
        <Element name="get-in-touch">
          <div
            className="get--in--touch--container"
            id="get--in--touch--container"
          >
            <div className="get--in--touch--text" data-aos="fade-right">
              <h1>Get In Touch</h1>
              <p>Contact Us</p>
              <img src={bgImg1} alt="bg--image" className="bg--image--footer" />
            </div>

            <div className="info company--mail" data-aos="fade-up">
              <Icon
                icon="icon-park-outline:mail-review"
                color="#ef3f38"
                width="60"
              />
              <p>sampitoffl@gmail.com</p>
              <img
                src={bgImg2}
                alt="bg--image"
                className="bg--image--footer footer-2"
              />
            </div>

            <div className="info company--location" data-aos="fade-up">
              <Icon
                icon="mingcute:location-3-fill"
                color="#ef3f38"
                width="60"
              />
              <p>India</p>
              <img
                src={bgImg3}
                alt="bg--image"
                className="bg--image--footer footer-2"
              />
            </div>
          </div>
        </Element>

        <FormComponent />

        <div className="bottom--container">
          <div className="bottom--info">
            <div className="contact">
              <h2 className="bold--text">Contact Us</h2>
              <p>
                Reach out to us today, and let's initiate your digital
                transformation journey together, guided by our exceptional team.
              </p>
            </div>
            <div className="copyright">
              <p>Copyright By@ SAMP IT - 2024</p>
              <a href="#">Get Support</a>
            </div>
          </div>
          <a className="scroll--top" href="#header">
            <Icon icon="bxs:home" color="#ef3f38" width="50" />
          </a>
        </div>
      </footer>
    </>
  );
}
