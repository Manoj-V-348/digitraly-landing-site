import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import App from "./App.jsx";
import Blogpage from "./Blogpage.jsx";
import Servicepage from "./Servicepage.jsx";

import logo from "/logo.svg";
import { Icon } from "@iconify/react";
import { Element } from "react-scroll";

import "./Navbar.css";

const toggleNavLinks = () => {
  const navLinks = document.querySelector(".nav--links");
  const currentTransform = window.getComputedStyle(navLinks).transform;
  if (window.screen.width < 769) {
    navLinks.style.transform =
      currentTransform === "none" ? "translateX(-100%)" : "none";
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <header className="header--nav">
        <nav>
          <Link to="/" className="company--name--logo">
            <img src={logo} alt="digitraly" />
          </Link>

          <Icon
            icon="fluent:navigation-16-filled"
            color="#79b401"
            className="hamburger"
            width="24"
            onClick={toggleNavLinks}
          />

          <div className="nav--links">
            <Link to="/blog" onClick={toggleNavLinks}>
              Blog
            </Link>
            <Link to="/services" onClick={toggleNavLinks}>
              Services
            </Link>

            {/* Use ScrollLink for smooth scrolling */}
            <ScrollLink
              to="get-in-touch"
              smooth={true}
              duration={500}
              className="get--in--touch--button"
              onClick={toggleNavLinks}
            >
              Get in Touch
            </ScrollLink>
            <Icon
              icon="mingcute:close-fill"
              color="#79b401"
              width="24"
              className="close"
              onClick={toggleNavLinks}
            />
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/services" element={<Servicepage />} />
      </Routes>
    </BrowserRouter>
  </>
);
