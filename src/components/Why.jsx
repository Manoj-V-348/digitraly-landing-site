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
                  <h2 data-aos="fade-left">
                    Unleash the Power of Storytelling: Content that Captivates &
                    Converts
                  </h2>
                  <p
                    className="mild--color details--text"
                    data-aos="fade-left"
                    style={{ display: design1 ? "-webkit-box" : "block" }}
                  >
                    Today's consumers crave authenticity and connection. SAMP IT
                    empowers your brand to tell its unique story through
                    captivating content that resonates with your target
                    audience. We don't just create content; we craft strategic
                    narratives that inform, educate, and entertain, ultimately
                    driving conversions. Our team of skilled writers and content
                    creators will develop engaging blog posts, social media
                    content, and website copy that speaks directly to your
                    audience's needs and desires.{" "}
                    <span className="bold--text">
                      Partner with SAMP IT and watch your brand engagement soar.
                    </span>
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
                    Amplify Your Voice and Reach: Social Media Strategies that
                    Ignite Engagement
                  </h2>
                  <p
                    className="mild--color details--text"
                    data-aos="fade-up"
                    style={{ display: design2 ? "-webkit-box" : "block" }}
                  >
                    The social media landscape is constantly evolving, and
                    navigating it effectively can be a challenge. SAMP IT takes
                    the guesswork out of your social media strategy. Our experts
                    will develop a data-driven plan to identify where your
                    target audience lives online and craft engaging content that
                    sparks conversations and builds a loyal following. We'll
                    manage your social media channels, schedule captivating
                    posts, and foster meaningful interactions with your
                    audience.{" "}
                    <span className="bold--text">
                      SAMP IT helps you amplify your brand voice and reach,
                      putting you front and center in the online conversation.
                    </span>
                  </p>
                  <div onClick={() => toggleDesign(changeDesign2)}>
                    <p className="read--more">
                      {design2 ? "read more..." : "show less..."}
                    </p>
                  </div>
                </div>
                <div className="why--details why3">
                  <h1 data-aos="fade-left">03</h1>
                  <h2 data-aos="fade-left">
                    Craft a Website that Converts: User-Friendly Design Meets
                    Strategic Optimization
                  </h2>
                  <p
                    className="mild--color details--text"
                    data-aos="fade-left"
                    style={{ display: design3 ? "-webkit-box" : "block" }}
                  >
                    Your website is your online storefront, and first
                    impressions matter. SAMP IT designs and develops beautiful,
                    user-friendly websites that not only showcase your brand but
                    also drive results. We'll create a website that's visually
                    appealing, easy to navigate, and optimized for search
                    engines. Our focus is on converting website visitors into
                    loyal customers. SAMP IT implements best practices for user
                    experience and search engine optimization (SEO), ensuring
                    your website attracts the right audience and converts them
                    into paying customers.{" "}
                    <span className="bold--text">
                      Partner with SAMP IT and watch your website become a
                      powerful sales engine for your brand.
                    </span>
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
