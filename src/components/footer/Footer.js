import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">
          BE MORE <span role="img">🔥</span> Every success is built on the
          ability to do better than good enough!
        </p>
      </Fade>
    </div>
  );
}
