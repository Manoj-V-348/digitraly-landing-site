import React, { useState, useEffect } from "react";

import "./Blog.css";

import blogImg from "../images/blogImg.png";

import aos from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const [readMore, setReadMore] = useState(false);

  function readMoreText() {
    return (
      <>
        <p className="blog--subheading" data-aos="fade-right">
          <span className="bold--text">1. Amplified Engagement: </span>
          Frictionless experiences are the gateway to sustained user engagement,
          driving exploration and higher conversion rates.
        </p>
        <p data-aos="fade-right">
          <span className="bold--text">2. Brand Harmony: </span>
          Positive interactions lay the foundation for trust and loyalty,
          ensuring users repeatedly choose your brand.
        </p>
        <p data-aos="fade-right">
          <span className="bold--text">3. Growth in Every Note: </span>
          Streamlined workflows and minimized errors result in cost savings and
          operational excellence.
        </p>
        <p data-aos="fade-right">
          <span className="bold--text">4. Competitive Edge: </span>
          An intuitive and delightful experience becomes your brand's signature,
          drawing and retaining users unlike ever before.
        </p>
        <div className="blog--image--container" data-aos="fade-right">
          <div className="image--wrapper">
            <img src={blogImg} alt="blog-image" className="blog--image" />
          </div>

          <p>
            The true transformational journey prioritizes user-centricity,
            weaving UI/UX into the very fabric of strategy. Remember, it's not
            technology replacing users; it's users inspiring technology. UI/UX
            bridges this gap, resonating with hearts and minds, creating an
            unforgettable digital transformation. Numbers unveil the narrative:
            <br />
            • 75% judge credibility by design: Your website's look isn't just
            aesthetics; it's trust (Stanford Web).
            <br /> • 80% value great experiences: Keeping users happy ensures
            they return (Qualtrics).
            <br />• SEO rewards good design: Google favors fast, intuitive
            sites. Excellent UI/UX aligns with Core Web Vitals.
            <br />• Apps thrive on good UI/UX: Mobile app popularity hinges on
            an elevated User eXperience in limited real estate.
            <br />
            When brands prioritize UI/UX in their digital metamorphosis, they
            embark on a journey beyond technological upgrades. It becomes a
            transformative process that deeply connects with the audience,
            fostering enduring relationships beyond the digital realm.
            Integrating UI/UX principles marks a pivotal shift—an acknowledgment
            of empathetic design's profound impact on customer relationships. By
            embracing this ethos, brands not only navigate the digital landscape
            effectively but also carve a permanent place in the hearts and minds
            of their audience, ensuring enduring relevance and success in an
            ever-evolving digital sphere.
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
      <h1 data-aos="fade-right">Blog</h1>
      <div className="blog--details--container" data-aos="fade-right">
        <p className="blog--heading">
          UI/UX: The Driver of Digital Transformation
        </p>
        <p className="blog--text">
          Discover why UI/UX leads the way in shaping intuitive brand journeys
          during digital transformation.
        </p>
        <p className="blog--text">
          In the realm of digital transformation, aesthetics take a back seat to
          the essence of understanding user needs and delivering intuitive,
          efficient, and delightful experiences. Integrating UI/UX as a focal
          point in digital transformation strategies empowers brands to not just
          enhance customer engagement but also foster brand loyalty, culminating
          in enduring business success.
          <br />
          <br /> Crafting interactions that are effortless, efficient, and
          delightful epitomizes the power of UI/UX. Picture a website guiding
          you like a trusted friend, an app anticipating your needs, a product
          sparking joy with every interaction. This is the transformative
          potential of UI/UX in digital evolution.
        </p>
        {readMore ? readMoreText() : ""}
        <p className="blog--read--more--button" onClick={toggleReadMore}>
          {readMore ? "show less..." : "read more..."}
        </p>
      </div>
    </div>
  );
}

export default Blog;
