import React from "react";
import { Icon } from "@iconify/react";

import "./About.css";

import employee from "../images/change-image1.jpg";

function SubHeader() {
  return (
    <>
      <div className="details--wrapper">
        <div className="top--details">
          <div className="experience" data-aos="fade-right">
            <p>
              <span className="big--text">45</span>+
            </p>
            <p id="years">Years Of Experience</p>
          </div>
          <div className="about--heading--container">
            <h1>Beyond Boundaries:</h1>
            <p className="about--sub--heading">
              Digitraly - Your Partner in Unleashing the Digital Transformation
            </p>
            <p className="mild--color company--about--details">
              Digitraly thrives on the dynamic synergy of industry experts,
              innovators, and visionaries, propelling us towards unparalleled
              performance. Our devoted professionals ardently strive to deliver
              remarkable outcomes, embodying a culture of excellence, perpetual
              learning, and collaborative brilliance.
            </p>
          </div>
        </div>
        <p className="mild--color company--about--details para2">
          <br />
          <br /> Recognizing the paramount importance of timely delivery, our
          team not only excels in expertise but also in resourcefulness. We
          pledge to unearth optimal solutions, deploying essential resources to
          meet your deadlines seamlessly. Your success stands as our paramount
          goal, and we undertake every measure not just to meet but surpass your
          expectations.
        </p>
      </div>
      <div className="sub--wrapper--tailored">
        <div className="about--image" data-aos="fade-down">
          <img src={employee} alt="worker" />
        </div>
        <div className="tailored--digital">
          <div>
            <h2 data-aos="fade-up">Tailored digital solutions</h2>
            <p className="mild--color" data-aos="fade-up">
              Begin your digital journey with us, where limitless possibilities
              unfold, and success transforms into an unexplored realm. Discover
              how Digitraly can propel your business toward digital excellence.
            </p>
          </div>
          <div className="mail--support" data-aos="fade-up">
            <Icon
              icon="icon-park-outline:mail-review"
              color="#79b401"
              width="14"
            />
            <a href="#get--in--touch--container">Get Support</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHeader;
