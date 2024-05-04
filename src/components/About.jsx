import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

import "./About.css";
import SubHeader from "./SubHeader";

import dataImg from "../images/about/data.png";
import contentImg from "../images/about/content.png";
import WebImg from "../images/about/website.png";

function About() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main loading="lazy" data-aos="fade-up">
        <div className="welcome--text" id="main--container">
          <h1>
            Welcome to SA<span className="green--color">M</span>P IT
          </h1>
          <p className="mild--color">
            "At SAMP IT, we combine strategic thinking, creative flair, and
            technical expertise to deliver exceptional results. We offer a
            one-stop solution for all your digital marketing needs, saving you
            time and resources."
            <br />
            <br />
          </p>
          <p className="bold--text" id="sets--apart">
            Here's what sets us apart:
          </p>
          <div className="sets--us--apart--container">
            <div className="sets--us--points">
              <img src={dataImg} alt="" />
              <h2>Data-driven approach</h2>
              <p className="mild--color">
                We analyze your target audience and competition to create
                effective strategies.
              </p>
            </div>

            <div className="sets--us--points">
              <img src={contentImg} alt="" />
              <h2>High-quality content</h2>
              <p className="mild--color">
                We craft engaging content that resonates with your audience.
              </p>
            </div>

            <div className="sets--us--points">
              <img src={WebImg} alt="" />
              <h2>Beautiful & functional websites</h2>
              <p className="mild--color">
                Our websites are user-friendly and optimized for search engines.
              </p>
            </div>
          </div>
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
