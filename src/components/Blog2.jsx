import React, { useEffect, useState } from "react";

import "./Blog.css";

import blogImg2 from "../images/blog2.png";

import aos from "aos";
import "aos/dist/aos.css";

function Blog2() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const [readMore, setReadMore] = useState(false);

  function readMoreText() {
    return (
      <>
        <p className="blog--text" data-aos="fade-right">
          Execute seamless technology initiatives on a global scale. Navigate
          diverse markets and regulatory landscapes for unified solutions.
          Ensure consistent and scalable implementation across geographies.
        </p>

        <div className="blog2--image--wrapper" data-aos="fade-up">
          <img src={blogImg2} alt="blog-image" className="blog--image" />
        </div>

        <p className="blog--text" data-aos="fade-right">
          <span className="bold--text">Holistic Cybersecurity Solutions:</span>
          <br /> Develop and implement robust cybersecurity frameworks. Protect
          organizations against evolving cyber threats. Safeguard critical
          assets and maintain data integrity.
        </p>

        <p className="blog--text" data-aos="fade-right">
          <span className="bold--text">Stakeholder Collaboration:</span>
          <br /> Foster collaborative relationships with key stakeholders. Align
          technology initiatives with broader business objectives. Ensure that
          IT strategies deliver tangible value to the entire organization.
        </p>

        <p className="blog--text" data-aos="fade-right">
          <span className="bold--text">Industry Recognition:</span>
          <br /> Digitraly is celebrated for its impact on businesses worldwide.
          Our commitment to excellence and innovation positions us as a trusted
          partner for CXOs seeking transformative solutions.
        </p>

        <div className="connect--with--digitraly" data-aos="fade-up">
          <p className="bold--text">Connect with Digitraly:</p>
          <p className="blog--text">
            Digitraly stands at the forefront of CXO consulting, dedicated to
            shaping the digital future of businesses by providing strategic
            technology and resource optimization services.
          </p>
        </div>
      </>
    );
  }

  function toggleReadMore() {
    setReadMore((prev) => !prev);
  }

  return (
    <div className="blog--contents--wrapper">
      <p className="blog2--main--heading" data-aos="fade-down">
        <span className="main--green">Digitraly</span> - Empowering CXOs in the
        Digital Realm
      </p>
      <div className="blog--details--container" data-aos="fade-right">
        <p className="blog--heading">
          Transformative CXO Consulting for Strategic Technology & Resource
          Optimization
        </p>

        <p className="blog--text">
          <span className="bold--text">Agency Overview:</span>
          <br /> Digitraly is a leading consultancy firm specializing in CXO
          advisory services, offering unparalleled expertise in technology and
          resource optimization. Our mission is to empower business leaders with
          innovative solutions, enabling them to navigate the complexities of
          the digital landscape with confidence and strategic foresight.
        </p>

        <p className="blog--text">
          <span className="bold--text">Strategic Technology Consulting:</span>
          <br />
          Craft bespoke technology roadmaps aligned with business objectives.
          Provide visionary insights on emerging technologies and industry
          trends. Optimize IT strategies for scalability, efficiency, and
          competitive advantage.
        </p>

        <p className="blog--text">
          <span className="bold--text">Resource Optimization:</span>
          <br />
          Streamline resource allocation for maximum efficiency and
          cost-effectiveness. Design and implement scalable solutions to meet
          evolving business needs. Leverage technology to enhance resource
          productivity and collaboration.
        </p>

        {readMore ? readMoreText() : ""}
        <p className="blog--read--more--button" onClick={toggleReadMore}>
          {readMore ? "show less..." : "read more..."}
        </p>
      </div>
    </div>
  );
}

export default Blog2;
