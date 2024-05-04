import React, { useState } from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./Servicepage.css";

import "aos/dist/aos.css";

import social from "./images/blog/social.png";
import video from "./images/blog/video.png";
import website from "./images/blog/website.png";

function Servicepage() {
  return (
    <>
      <div className="services">
        <div className="services--header" data-aos="fade-left">
          <h1>Services</h1>
          <p>
            At SAMP IT, we believe in the power of strategic storytelling and
            exceptional digital experiences. We partner with brands to craft
            engaging content, amplify their social media presence, and design
            websites that convert.
            <br />
            <br />
            <span className="explore">Explore our services below :</span>
          </p>
        </div>

        <div className="services--container">
          <div className="services--box">
            <img src={social} alt="" />
            <p className="services--heading">Social Media Management</p>
            <p className="services--description"></p>
          </div>

          <div className="services--box">
            <img src={video} alt="" />
            <p className="services--heading">Video Editing Services</p>
            <p className="services--description"></p>
          </div>

          <div className="services--box">
            <img src={website} alt="" />
            <p className="services--heading">Website Development</p>
            <p className="services--description"></p>
          </div>
        </div>

        <h1 className="service--bottom">
          Ready to take your brand online? Contact SAMP IT today for a free
          consultation!
        </h1>
      </div>
    </>
  );
}

export default Servicepage;
