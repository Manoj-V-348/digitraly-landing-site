import React, { useEffect, useState } from "react";

import "./Blog.css";

import video from "../images/blog/video.png";

import aos from "aos";
import "aos/dist/aos.css";

function Blog2() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="blog--contents--wrapper">
        <div className="blog--details--container" data-aos="fade-right">
          <img src={video} alt="" />
          <p className="blog--heading">
            The Editor's Eye: Why You Need a Pro to Refine Your Content
          </p>
          <p className="blog--text">
            In today's content-driven world, high-quality writing is essential
            for brand success. But even the most brilliant ideas can fall flat
            without proper editing. Here's why a good editor is an invaluable
            asset:
          </p>

          <div className="blog--sub--container">
            <div className="blog--sub--heading">
              <h1>Error-Free Communication</h1>
              <p>
                A skilled editor ensures your content is free of grammatical
                errors, typos, and inconsistencies. This maintains
                professionalism and ensures your message is clear and impactful.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Clarity & Concision</h1>
              <p>
                Editors help refine your writing for clarity and conciseness.
                They ensure your message is delivered effectively and resonates
                with your target audience.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Enhanced Flow & Readability</h1>
              <p>
                A good editor improves the flow and structure of your content,
                making it engaging and enjoyable to read. This keeps your
                audience captivated and wanting more.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>SEO Optimization</h1>
              <p>
                Editors can optimize your content for search engines by
                incorporating relevant keywords naturally. This increases your
                website's visibility and attracts organic traffic.
              </p>
            </div>

            <div className="blog--sub--heading">
              <h1>Stronger Brand Voice</h1>
              <p>
                Editors help you develop and maintain a consistent brand voice
                across all your content. This strengthens brand recognition and
                builds trust with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="blog--description">
        SAMP IT boasts a team of experienced editors with a keen eye for detail.
        We'll refine your content, ensuring it's polished, persuasive, and
        achieves your marketing goals.
      </h1>
    </>
  );
}

export default Blog2;
