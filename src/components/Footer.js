import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription"></section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>pade</h2>
            <p>
              Discover locations according to your preference(s) and the nearest
              point to meet between yourself and a loved one.
            </p>
          </div>
          <div className="footer-link-items">
            <h2>Connect</h2>
            <p>hello@padeapp.com</p>
            <p>+234(0) 901 446 2443</p>
            <div className="social-icons">
              {" "}
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">
            © padeapp 2021. All rights reserved
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
