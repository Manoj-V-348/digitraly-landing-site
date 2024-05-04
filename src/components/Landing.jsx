import React, { useState, useEffect } from "react";
import "./Landing.css";

import HeaderCaption from "./HeaderCaption";
import HeaderCaption2 from "./HeaderCaption2";
import HeaderbgImg from "./HeaderbgImg";
import HeaderbgImg2 from "./HeaderbgImg2";

import aos from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  const [text1, setText1] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText1((prevText) => !prevText);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleToggleText1 = () => {
    setText1(true);
  };

  const handleToggleText2 = () => {
    setText1(false);
  };

  const linkColor1 = text1 ? { color: "#ef3f38" } : { color: "#000000" };
  const linkColor2 = text1 ? { color: "#000000" } : { color: "#ef3f38" };

  return (
    <>
      <header>
        <div className="header" id="header">
          <div className="company--details">
            {text1 == true ? <HeaderCaption /> : <HeaderCaption2 />}
          </div>

          <div className="control--buttons">
            <a href="#" style={linkColor1} onClick={handleToggleText1}>
              _____
            </a>
            <a href="#" style={linkColor2} onClick={handleToggleText2}>
              _____
            </a>
          </div>

          <div className="landing--image--container"></div>

          {text1 ? <HeaderbgImg /> : <HeaderbgImg2 />}
        </div>
      </header>
    </>
  );
}
