import React from "react";
import appLogo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="pt-4">
      <div className="container row d-flex mt-2">
        <div className="column col-lg-3 col-md-6 col-sm-12 mx-auto mt-3 mb-0 px-4">
          <div className="app-logo">
            <img src={appLogo} className="img-fluid" />
          </div>
          <p className="footer-description">
            In today&apos;s fast-paced digital world, seamless communication is
            essential for businesses, educators, and teams worldwide. Our
            advanced video conferencing web application offers a
            high-performance, secure, and user-friendly platform designed to
            enhance collaboration and productivity.
          </p>
        </div>
        <div className="column col-lg-3 col-md-6 col-sm-12 mx-auto mt-3 mb-0 px-4">
          <h3 className="heading">Reach Us</h3>
          <ul className="address-links mt-3">
            <li>
              <a href="mailto:roomz.26@gmail.com">roomz.25@gmail.com</a>
            </li>
            <li>
              <a href="tel:(+91) 9123944263">(+91) 9123944263</a>
            </li>
            <li>
              <p>
                6th-Floor, The Meridian, GP Block, Salt Lake, Sector-V,
                Kolkata-700019.
              </p>
            </li>
          </ul>
        </div>
        <div className="column col-lg-3 col-md-6 col-sm-12 mx-auto mt-3 mb-0 px-4">
          <h3 className="heading">Links</h3>
          <ul className="section-links mt-3">
            <li>
              <a href="#0">Home</a>
            </li>
            <li>
              <a href="#0">Meeting Room</a>
            </li>
            <li>
              <a href="#0">Pricing</a>
            </li>
            <li>
              <a href="#0">Contact</a>
            </li>
          </ul>
        </div>
        <div className="column col-lg-3 col-md-6 col-sm-12 mx-auto mt-3 mb-0 px-4">
          <div className="column">
            <h3 className="heading">Newsletter</h3>
            <div className="newsletter-form">
              <form>
                <input type="email" placeholder="Email address" />
                <button>
                  <i className="fa fa-paper-plane" />
                </button>
              </form>
            </div>
            <strong className="label">
              Subscribe by joining our newsletter
            </strong>
          </div>
          <div className="column mt-4">
            <h3 className="heading">Media</h3>
            <ul className="d-flex sc-icons">
              <li>
                <a href="#0">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
        <p className="mb-0 mt-4 text-secondary">&copy; 2025-26 ROOMZ &nbsp; | &nbsp; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
