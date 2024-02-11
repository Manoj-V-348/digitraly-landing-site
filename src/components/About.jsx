import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

import "./About.css";
import SubHeader from "./SubHeader";

function About() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main loading="lazy" data-aos="fade-up">
        <div className="welcome--text" id="main--container">
          <h1>
            Welcome to Digi<span className="green--color">traly</span>
          </h1>
          <p className="mild--color">
            At Digitraly, we transcend traditional digital services - we become
            your ally in unlocking the boundless potential of the digital era.
            With a commitment to innovation, personalized strategies, and
            steadfast reliability, we're on a mission to empower businesses not
            just to survive but thrive in today's ever-evolving landscape.
            <br />
            <br /> Embark on a transformative voyage with us, where the horizons
            of possibilities stretch far and wide, and success is redefined
            without limits. Explore the myriad ways Digitraly can propel your
            business towards digital excellence and unparalleled growth.
          </p>
        </div>
        <p className="about--our--company">About Our Company</p>
        <div className="sub--wrapper">
          <SubHeader />
        </div>
      </main>
    </>
  );
}

export default About;
