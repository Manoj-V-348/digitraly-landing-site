import React, { useEffect, useState } from "react";

import "./Blog.css";

import website from "../images/blog/website.png";

import aos from "aos";
import "aos/dist/aos.css";

function Blog3() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="blog--contents--wrapper">
        <div className="blog--details--container" data-aos="fade-right">
          <img src={website} alt="" />
          <p className="blog--heading">
            How a Great Website Makes All the Difference for Your Brand Visitors
          </p>
          <p className="blog--text">
            Your website is your digital storefront, and first impressions
            matter significantly. A well-designed website can transform a casual
            visitor into a loyal customer. Here's how a great website elevates
            your brand:
          </p>

          <div className="blog--sub--container">
            <div className="blog--sub--heading">
              <h1>Positive User Experience</h1>
              <p>
                A user-friendly website with intuitive navigation and clear
                calls to action keeps visitors engaged and encourages them to
                explore further. This positive user experience fosters trust and
                leaves a lasting impression.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Enhanced Brand Image</h1>
              <p>
                A visually appealing website that reflects your brand identity
                strengthens your brand image. High-quality visuals and a
                cohesive design aesthetic portray professionalism and build
                trust.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Improved Credibility & Authority</h1>
              <p>
                A well-optimized website with valuable content positions you as
                an authority in your industry. This enhances brand credibility
                and attracts potential customers seeking expertise.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Lead Generation & Conversions</h1>
              <p>
                A strategically designed website with clear calls to action
                encourages visitors to take the desired action, whether it's
                subscribing to your newsletter, contacting you for a
                consultation, or making a purchase. This translates to increased
                leads and conversions.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Measurable Results</h1>
              <p>
                Website analytics provide valuable data on user behavior,
                allowing you to track visitor engagement and optimize your
                website for better performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="blog--description">
        SAMP IT creates beautiful, user-friendly websites that convert visitors
        into customers. We combine stunning design with strategic SEO
        optimization to ensure your website attracts the right audience and
        drives results.
      </h1>
    </>
  );
}

export default Blog3;
