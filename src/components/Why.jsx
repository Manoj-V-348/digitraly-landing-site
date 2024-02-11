import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import "./Why.css";

import background from "../images/greengraph.jpeg";

import aos from "aos";
import "aos/dist/aos.css";

function Why() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const [design1, changeDesign1] = useState(true);
  const [design2, changeDesign2] = useState(true);
  const [design3, changeDesign3] = useState(true);

  const toggleDesign = (designFunction) => {
    designFunction((prev) => !prev);
  };

  return (
    <>
      <LazyLoad>
        <div>
          <div className="why--section--container" loading="lazy">
            <div className="why--front--area">
              <h1 data-aos="fade-down">Why choose Us?</h1>
              <h2 data-aos="fade-up">
                "Redefine Possibilities: Digitraly, Where Digital Transformation
                Finds Its True Voice”
              </h2>
              <div className="why--details--container">
                <div className="why--details why1">
                  <h1 data-aos="fade-left">01</h1>
                  <h2 data-aos="fade-left">Our Commitment to Innovation</h2>
                  <p
                    className="mild--color details--text"
                    data-aos="fade-left"
                    style={{ display: design1 ? "-webkit-box" : "block" }}
                  >
                    At Digitraly, ingenuity fuels the core of our mission. We
                    harness cutting-edge technologies and employ
                    forward-thinking strategies to drive{" "}
                    <span className="bold--text">digital transformation</span>{" "}
                    for our clients. Our commitment to innovation goes beyond
                    the ordinary, ensuring that our tailored solutions propel
                    businesses into the future. By seamlessly integrating
                    advanced technologies, we empower organizations to adapt,
                    thrive, and stay ahead in today's dynamic digital landscape.
                    With Digitraly, innovation is not just a goal; it's{" "}
                    <span className="bold--text">
                      a commitment that propels businesses toward sustained
                      success
                    </span>{" "}
                    in an ever-evolving digital ecosystem.
                  </p>
                  <div onClick={() => toggleDesign(changeDesign1)}>
                    <p className="read--more">
                      {design1 ? "read more..." : "show less..."}
                    </p>
                  </div>
                </div>
                <div className="why--details why2">
                  <h1 data-aos="fade-up">02</h1>
                  <h2 data-aos="fade-up">
                    Tailored Strategies for Your Success
                  </h2>
                  <p
                    className="mild--color details--text"
                    data-aos="fade-up"
                    style={{ display: design2 ? "-webkit-box" : "block" }}
                  >
                    Digitraly crafts bespoke strategies designed to propel your
                    business to new heights of success. Our dedicated team of
                    experts works closely with clients to understand their
                    unique needs, challenges, and objectives. Using a wealth of
                    experience and a deep understanding of advanced digital
                    technologies, we create{" "}
                    <span className="bold--text">personalized strategies</span>{" "}
                    that align with your business goals. From optimizing
                    processes to enhancing customer experiences, our tailored
                    approaches ensure that every facet of your digital journey
                    is meticulously planned and executed. At Digitraly, success
                    is not just a destination; it's a journey tailored to your
                    unique aspirations.
                  </p>
                  <div onClick={() => toggleDesign(changeDesign2)}>
                    <p className="read--more">
                      {design2 ? "read more..." : "show less..."}
                    </p>
                  </div>
                </div>
                <div className="why--details why3">
                  <h1 data-aos="fade-left">03</h1>
                  <h2 data-aos="fade-left">On-Time Delivery,<br/> Every Time</h2>
                  <p
                    className="mild--color details--text"
                    data-aos="fade-left"
                    style={{ display: design3 ? "-webkit-box" : "block" }}
                  >
                    At Digitraly, timeliness is an integral part of our ethos.
                    We recognize the critical importance of timely delivery in
                    the fast-paced digital realm. With an unwavering commitment
                    to meeting deadlines, we leverage{" "}
                    <span className="bold--text">
                      advanced project management methodologies
                    </span>{" "}
                    and digital tools to ensure on-time delivery, every time.
                    Our efficient processes, coupled with a team that excels in
                    resourcefulness and expertise, guarantee that your digital
                    initiatives stay on track. Trust Digitraly for precision in
                    project timelines, allowing you to experience the full
                    potential of your digital transformation journey without
                    compromise.
                  </p>
                  <div onClick={() => toggleDesign(changeDesign3)}>
                    <p className="read--more">
                      {design3 ? "read more..." : "show less..."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="saturation">
              <img src={background} alt="bg" className="background--img" />
            </div>
          </div>
        </div>
      </LazyLoad>
    </>
  );
}

export default Why;
