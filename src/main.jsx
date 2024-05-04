import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import App from "./App.jsx";
import Blogpage from "./Blogpage.jsx";
import Servicepage from "./Servicepage.jsx";

import logo from "/samp-it-logo.png";
import { Icon } from "@iconify/react";
import { Element } from "react-scroll";

import "./Navbar.css";
import "./App.css";

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

          <div className="nav--links ">
            <Link to="/blog" onClick={toggleNavLinks} className="green--color">
              Blog
            </Link>
            <Link
              to="/services"
              onClick={toggleNavLinks}
              className="green--color"
            >
              Services
            </Link>

            {/* Use ScrollLink for smooth scrolling */}
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhfdCxWfzzPRjbDPgqgxXzDLvZsZXwhPXfNvZcNSSngTlZkcqfMbHqZgJkJxWltkwlSV"
              smooth={true}
              duration={500}
              className="get--in--touch--button green--color"
              onClick={toggleNavLinks}
            >
              Get in Touch
            </a>
            <Icon
              icon="mingcute:close-fill"
              color="#ef3f38"
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
