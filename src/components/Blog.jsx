import React, { useState, useEffect } from "react";

import "./Blog.css";

import aos from "aos";
import "aos/dist/aos.css";

import social from "../images/blog/social.png";

function Blog() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="blog--contents--wrapper">
        <div className="blog--details--container" data-aos="fade-right">
          <img src={social} alt="" />
          <p className="blog--heading">
            Why Social Media is a Must-Have for Modern Brands
          </p>
          <p className="blog--text">
            In today's digital age, consumers are constantly connected, and
            social media has become an undeniable force. It's no longer a
            "maybe" for brands; it's a resounding MUST. Here's why social media
            is crucial for your brand's success:
          </p>

          <div className="blog--sub--container">
            <div className="blog--sub--heading">
              <h1>Unmatched Brand Awareness</h1>
              <p>
                Social media platforms allow you to reach a vast audience and
                build brand recognition. By consistently creating and sharing
                engaging content, you stay top-of-mind with potential customers.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Direct Communication & Community Building</h1>
              <p>
                Social media fosters two-way communication, allowing you to
                connect directly with your audience, answer questions, and
                address concerns. This builds trust and loyalty, fostering a
                thriving brand community.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Targeted Marketing & Increased Sales</h1>
              <p>
                Social media platforms offer powerful targeting tools to reach
                your ideal customer. By creating targeted campaigns, you can
                promote your products and services to the most relevant
                audience, driving conversions and sales.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Real-Time Customer Insights</h1>
              <p>
                Social media listening allows you to gather valuable insights
                into customer sentiment, preferences, and brand perception. This
                data is invaluable for informing your marketing strategies and
                product development.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Boost Brand Authority & Credibility</h1>
              <p>
                Consistent engagement on social media positions your brand as a
                thought leader in your industry. By sharing valuable content and
                insights, you establish trust and credibility, attracting
                potential customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="blog--description">
        SAMP IT can help you navigate the ever-evolving social media landscape.
        We develop data-driven strategies, create engaging content, and manage
        your social media channels, allowing you to focus on what you do best –
        running your business.
      </h1>
    </>
  );
}

export default Blog;
