import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const Landing = () => {
  const [scrlVal, setScrlVal] = useState(900);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrlVal(900 - window.scrollY));
  }, []);

  return (
    <>
      <div
        className="banner"
        style={{ clipPath: `circle(${scrlVal}px at center center)` }}
      >
        <video src="/images/landing-bg.mp4" muted autoPlay loop />
        <div className="title-block">
          <div
            className="container d-flex flex-column"
            style={{ placeItems: "center" }}
          >
            <h1 className="heading text-light" data-aos="fade-up">
              Welcome to <span>ROOMZ</span>!
            </h1>
            <h4
              className="subtitle mb-3"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Revolutionize Remote Collaboration with Our Cutting-Edge Video
              Conferencing Solution.
            </h4>
            <Link
              to="home"
              className="btn btn-warning size-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Start a meeting
            </Link>
          </div>
        </div>
      </div>

      {/* About-us section */}
      <AboutUs />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Landing;
