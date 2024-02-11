import React, { useState } from "react";

import "./Servicepage.css";

import aos from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";

import digital from "./images/services/digitaltransformation.png";
import development from "./images/services/appdevelopment.png";
import security from "./images/services/appsecurity.png";
import cloud from "./images/services/cloud.png";
import analytics from "./images/services/analytics.png";
import augmentation from "./images/services/allocation.png";
import consulting from "./images/services/consulting.png";

function Servicepage() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);

  const styles = show ? { display: "block" } : { display: "none" };
  const styles2 = show2 ? { display: "block" } : { display: "none" };
  const styles3 = show3 ? { display: "block" } : { display: "none" };
  const styles4 = show4 ? { display: "block" } : { display: "none" };
  const styles5 = show5 ? { display: "block" } : { display: "none" };
  const styles6 = show6 ? { display: "block" } : { display: "none" };
  const styles7 = show7 ? { display: "block" } : { display: "none" };

  const Cardstyles = show ? { height: "auto" } : {};
  const Cardstyles2 = show2 ? { height: "auto" } : {};
  const Cardstyles3 = show3 ? { height: "auto" } : {};
  const Cardstyles4 = show4 ? { height: "auto" } : {};
  const Cardstyles5 = show5 ? { height: "auto" } : {};
  const Cardstyles6 = show6 ? { height: "auto" } : {};
  const Cardstyles7 = show7 ? { height: "auto" } : {};

  function toggleStyles() {
    setShow((prev) => !prev);
  }
  function toggleStyles2() {
    setShow2((prev) => !prev);
  }
  function toggleStyles3() {
    setShow3((prev) => !prev);
  }
  function toggleStyles4() {
    setShow4((prev) => !prev);
  }
  function toggleStyles5() {
    setShow5((prev) => !prev);
  }
  function toggleStyles6() {
    setShow6((prev) => !prev);
  }
  function toggleStyles7() {
    setShow7((prev) => !prev);
  }

  return (
    <>
      <div className="services">
        <div className="services--header" data-aos="fade-left">
          <h1>Services</h1>
          <p>
            Welcome to <span className="main--green">Digitraly</span>, where
            innovation meets expertise! With a highly experienced technical team
            boasting over 40 years of collective knowledge, we offer a suite of
            cutting-edge services designed to catapult your business into the
            digital future. At Digitraly, we don't just provide solutions; we
            architect success.
            <br />
            <span className="explore">Explore our services below :</span>
          </p>
        </div>

        <div className="services--card--container">
          {/* Services Card*/}

          <div className="services--card" data-aos="fade-up" style={Cardstyles}>
            <p className="services--card--text">Digital Transformation</p>

            <div className="services--more--info" onClick={toggleStyles}>
              {show ? (
                <>
                  <p>show less</p>
                  <Icon
                    icon="icon-park-solid:up-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              ) : (
                <>
                  <p>more details</p>
                  <Icon
                    icon="icon-park-solid:down-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              )}
            </div>

            <img src={digital} alt="cardImg" style={styles} />
            <p className="services--card--description" style={styles}>
              Embark on a journey of digital evolution with Digitraly. Our
              seasoned team crafts comprehensive digital transformation
              strategies tailored to your unique business needs. From
              reimagining processes to integrating emerging technologies, we
              pave the way for your organization's seamless transition into the
              digital era.
            </p>
          </div>

          <div
            className="services--card"
            data-aos="fade-up"
            style={Cardstyles2}
          >
            <p className="services--card--text">CXO Consulting</p>

            <div className="services--more--info" onClick={toggleStyles2}>
              {show2 ? (
                <>
                  <p>show less</p>
                  <Icon
                    icon="icon-park-solid:up-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              ) : (
                <>
                  <p>more details</p>
                  <Icon
                    icon="icon-park-solid:down-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              )}
            </div>

            <img src={consulting} alt="cardImg" style={styles2} />
            <p className="services--card--description" style={styles2}>
              Navigate the complexities of the digital landscape with our CXO
              consulting services. Backed by decades of experience, our team
              provides strategic guidance to C-level executives, ensuring that
              technology aligns seamlessly with business objectives. From
              technology roadmaps to cybersecurity, we're your trusted advisors
              in the digital realm.
            </p>
          </div>

          <div
            className="services--card"
            data-aos="fade-up"
            style={Cardstyles3}
          >
            <p className="services--card--text">Application Security</p>

            <div className="services--more--info" onClick={toggleStyles3}>
              {show3 ? (
                <>
                  <p>show less</p>
                  <Icon
                    icon="icon-park-solid:up-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              ) : (
                <>
                  <p>more details</p>
                  <Icon
                    icon="icon-park-solid:down-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              )}
            </div>
            <img src={security} alt="cardImg" style={styles3} />
            <p className="services--card--description" style={styles3}>
              Security is at the heart of our development philosophy. Digitraly
              integrates security into every layer of application development.
              Our team employs industry-best practices, conducts thorough
              security assessments, and implements measures to ensure that your
              applications are not just functional but also fortified against
              potential threats.
            </p>
          </div>

          <div
            className="services--card"
            data-aos="fade-up"
            style={Cardstyles4}
          >
            <p className="services--card--text">Analytics / Dashboard</p>

            <div className="services--more--info" onClick={toggleStyles4}>
              {show4 ? (
                <>
                  <p>show less</p>
                  <Icon
                    icon="icon-park-solid:up-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              ) : (
                <>
                  <p>more details</p>
                  <Icon
                    icon="icon-park-solid:down-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              )}
            </div>
            <img src={analytics} alt="cardImg" style={styles4} />
            <p className="services--card--description" style={styles4}>
              Make informed decisions with our advanced analytics and dashboard
              solutions. Digitraly leverages data to provide actionable
              insights, empowering you to drive business strategy and
              performance. Our custom dashboards are designed for clarity and
              usability, turning complex data into valuable information.
            </p>
          </div>

          <div
            className="services--card"
            data-aos="fade-up"
            style={Cardstyles5}
          >
            <p className="services--card--text">Application Development</p>

            <div className="services--more--info" onClick={toggleStyles5}>
              {show5 ? (
                <>
                  <p>show less</p>
                  <Icon
                    icon="icon-park-solid:up-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              ) : (
                <>
                  <p>more details</p>
                  <Icon
                    icon="icon-park-solid:down-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              )}
            </div>
            <img src={development} alt="cardImg" style={styles5} />
            <p className="services--card--description" style={styles5}>
              Turn your ideas into reality with our expert application
              development services. Whether it's a robust web application or a
              sleek mobile solution, our development team combines creativity
              with technical prowess to deliver applications that captivate
              users and drive business growth.
            </p>
          </div>

          <div
            className="services--card"
            data-aos="fade-up"
            style={Cardstyles6}
          >
            <p className="services--card--text">Resource Augmentation</p>

            <div className="services--more--info" onClick={toggleStyles6}>
              {show6 ? (
                <>
                  <p>show less</p>
                  <Icon
                    icon="icon-park-solid:up-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              ) : (
                <>
                  <p>more details</p>
                  <Icon
                    icon="icon-park-solid:down-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              )}
            </div>
            <img src={augmentation} alt="cardImg" style={styles6} />
            <p className="services--card--description" style={styles6}>
              Supplement your team with top-tier talent through Digitraly's
              resource augmentation services. Our vast network of skilled
              professionals ensures that you have the right expertise when you
              need it, allowing your organization to thrive in the face of
              dynamic challenges.
            </p>
          </div>

          <div
            className="services--card"
            data-aos="fade-up"
            style={Cardstyles7}
          >
            <p className="services--card--text">
              Cloud Migration and Management
            </p>

            <div className="services--more--info" onClick={toggleStyles7}>
              {show7 ? (
                <>
                  <p>show less</p>
                  <Icon
                    icon="icon-park-solid:up-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              ) : (
                <>
                  <p>more details</p>
                  <Icon
                    icon="icon-park-solid:down-c"
                    color="#79b401"
                    width="24"
                  />
                </>
              )}
            </div>
            <img src={cloud} alt="cardImg" style={styles7} />
            <p className="services--card--description" style={styles7}>
              Unlock the power of the cloud with Digitraly's seamless migration
              and management services. Whether you're transitioning to the cloud
              or optimizing your existing cloud infrastructure, our team ensures
              a smooth journey, enhancing scalability, efficiency, and
              cost-effectiveness.
            </p>
          </div>
        </div>
        {/* <div className="services--details--container">
          <div
            className="services--details"
            id="digital-transformation"
            data-aos="fade-up"
          >
            <p className="services--details--heading">Digital Transformation</p>
            <p className="services--details--text">
              Embark on a journey of digital evolution with Digitraly. Our
              seasoned team crafts comprehensive digital transformation
              strategies tailored to your unique business needs. From
              reimagining processes to integrating emerging technologies, we
              pave the way for your organization's seamless transition into the
              digital era.
            </p>
            <img src={digital} alt="cardImg" />
          </div>

          <div
            className="services--details"
            id="app-development"
            data-aos="fade-up"
          >
            <p className="services--details--heading">
              Application Development (Web and Mobile)
            </p>
            <p className="services--details--text">
              Turn your ideas into reality with our expert application
              development services. Whether it's a robust web application or a
              sleek mobile solution, our development team combines creativity
              with technical prowess to deliver applications that captivate
              users and drive business growth.
            </p>
            <img src={development} alt="cardImg" />
          </div>

          <div
            className="services--details"
            id="app-security"
            data-aos="fade-up"
          >
            <p className="services--details--heading">Application Security</p>
            <p className="services--details--text">
              Security is at the heart of our development philosophy. Digitraly
              integrates security into every layer of application development.
              Our team employs industry-best practices, conducts thorough
              security assessments, and implements measures to ensure that your
              applications are not just functional but also fortified against
              potential threats.
            </p>
            <img src={security} alt="cardImg" />
          </div>

          <div
            className="services--details"
            id="cloud-migration"
            data-aos="fade-up"
          >
            <p className="services--details--heading">
              Cloud Migration and Management
            </p>
            <p className="services--details--text">
              Unlock the power of the cloud with Digitraly's seamless migration
              and management services. Whether you're transitioning to the cloud
              or optimizing your existing cloud infrastructure, our team ensures
              a smooth journey, enhancing scalability, efficiency, and
              cost-effectiveness.
            </p>
            <img src={cloud} alt="cardImg" />
          </div>

          <div className="services--details" id="analytics" data-aos="fade-up">
            <p className="services--details--heading">
              Analytics and Dashboard
            </p>
            <p className="services--details--text">
              Make informed decisions with our advanced analytics and dashboard
              solutions. Digitraly leverages data to provide actionable
              insights, empowering you to drive business strategy and
              performance. Our custom dashboards are designed for clarity and
              usability, turning complex data into valuable information.
            </p>
            <img src={analytics} alt="cardImg" />
          </div>

          <div
            className="services--details"
            id="augmentation"
            data-aos="fade-up"
          >
            <p className="services--details--heading">Resource Augmentation</p>
            <p className="services--details--text">
              Supplement your team with top-tier talent through Digitraly's
              resource augmentation services. Our vast network of skilled
              professionals ensures that you have the right expertise when you
              need it, allowing your organization to thrive in the face of
              dynamic challenges.
            </p>
            <img src={augmentation} alt="cardImg" />
          </div>

          <div className="services--details" id="consulting" data-aos="fade-up">
            <p className="services--details--heading">CXO Consulting</p>
            <p className="services--details--text">
              Navigate the complexities of the digital landscape with our CXO
              consulting services. Backed by decades of experience, our team
              provides strategic guidance to C-level executives, ensuring that
              technology aligns seamlessly with business objectives. From
              technology roadmaps to cybersecurity, we're your trusted advisors
              in the digital realm.
            </p>
            <img src={consulting} alt="cardImg" />
          </div>
        </div> */}

        <div className="why--services">
          <p className="why--services--heading" data-aos="fade-right">
            Why Digitraly?
          </p>
          <div className="why--services--text">
            <ul>
              <li data-aos="fade-left">
                <span>Proven Expertise</span>
                <p>40+ years of combined technical experience.</p>
              </li>
              <li data-aos="fade-left">
                <span>Innovation-Driven</span>
                <p>We infuse creativity into every solution we deliver.</p>
              </li>
              <li data-aos="fade-left">
                <span>Security-Centric</span>
                <p>
                  Your digital assets are in safe hands with our robust security
                  measures.
                </p>
              </li>
              <li data-aos="fade-left">
                <span>Global Impact</span>
                <p>We've left our mark on businesses worldwide.</p>
              </li>
              <li data-aos="fade-left">
                <span>Timely Delivery</span>
                <p>
                  We meet your deadlines, ensuring your projects are on track
                  and on time.
                </p>
              </li>
            </ul>
            <p>
              Ready to embark on a transformative journey? Contact Digitraly
              today and let's build a future-ready digital landscape together.
              <br />
              Your success, our passion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicepage;
