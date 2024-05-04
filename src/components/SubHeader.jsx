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
              <span className="big--text">4</span>+
            </p>
            <p id="years">Years Of Experience</p>
          </div>
          <div className="about--heading--container">
            <h1>Clickworthy Craftsmanship:</h1>
            <p className="about--sub--heading">
              SAMP IT - Your trusted partner in the digital world
            </p>
            <p className="mild--color company--about--details">
              SAMP IT is a full-service digital marketing agency specializing in
              Social Media Management, Content Creation (written and visual),
              and Website Design & Development. We empower businesses to build a
              strong online presence, engage with their target audience, and
              achieve their marketing goals.
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
            <h2 data-aos="fade-up">
              Engage. Inform. Convert. Your online marketing goals, achieved.
            </h2>
            <p className="mild--color" data-aos="fade-up">
              By collaborating with SAMP IT, you'll gain a dedicated team of
              experts who are passionate about helping you achieve your online
              marketing goals. We'll work closely with you to understand your
              brand, target audience, and objectives, and develop a customized
              strategy that delivers results.
            </p>
          </div>
          <div className="mail--support" data-aos="fade-up">
            <Icon
              icon="icon-park-outline:mail-review"
              color="#ef3f38"
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
