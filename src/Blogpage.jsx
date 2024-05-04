import "./Blogpage.css";
import Blog from "./components/Blog";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";

import social from "./images/blog/social.png";
import video from "./images/blog/video.png";
import website from "./images/blog/website.png";

import React, { useState } from "react";

function Blogpage() {
  const [blog1, setblog1] = useState(false);

  function toggleBlog1() {
    setblog1(true);
  }

  const [blog2, setblog2] = useState(false);

  function toggleBlog2() {
    setblog2(true);
  }

  const [blog3, setblog3] = useState(false);

  function toggleBlog3() {
    setblog3(true);
  }

  return (
    <>
      <h1 id="blog--heading--text">
        SA<span className="green--color ">M</span>P IT Blogs
      </h1>

      <div className="blog--overview--container">
        <div className="blog--overview" onClick={toggleBlog1}>
          <img src={social} alt="" />
          <p className="blog--overview--heading">
            Why Social Media is a Must-Have for Modern Brands
          </p>
        </div>

        <div className="blog--overview" onClick={toggleBlog2}>
          <img src={video} alt="" />
          <p className="blog--overview--heading">
            The Editor's Eye: Why You Need a Pro to Refine Your Content
          </p>
        </div>

        <div className="blog--overview" onClick={toggleBlog3}>
          <img src={website} alt="" />
          <p className="blog--overview--heading">
            How a Great Website Makes All the Difference for Your Brand Visitors
          </p>
        </div>
      </div>
      {blog1 && <Blog />}
      {blog2 && <Blog2 />}
      {blog3 && <Blog3 />}
    </>
  );
}

export default Blogpage;
