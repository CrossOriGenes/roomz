import React from "react";

const AboutUs = () => {
  return (
    <section id="landing-body" className="container position-relative">
      <div className="row d-flex text-center mb-4">
        <h1 className="heading text-light">
          Why <span>Us</span>?
        </h1>
      </div>
      <p className="fs-5 text-secondary mt-3 mb-3" data-aos="fade-up">
        <br /> In today&apos;s fast-paced digital world, seamless communication
        is essential for businesses, educators, and teams worldwide. Our
        advanced video conferencing web application offers a high-performance,
        secure, and user-friendly platform designed to enhance collaboration and
        productivity.
      </p>
      <div className="container mt-4 mb-3 pt-4">
        <div className="row d-flex">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 py-3">
            <div className="card info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="fa fa-ruler" />
                <h3>Scalability</h3>
                <p>
                  Perfect for individuals, startups, and enterprises looking for
                  a reliable and flexible solution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 py-3">
            <div className="card info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="fa fa-users" />
                <h3>User-Friendly</h3>
                <p>
                  A simple and intuitive UI ensures effortless navigation and
                  usage.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 py-3">
            <div className="card info-card" data-aos="fade-up" data-aos-delay="300">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="fa fa-globe" />
                <h3>Global Connectivity</h3>
                <p>
                  Enjoy a stable and efficient connection from anywhere in the
                  world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 py-3">
            <div className="card info-card" data-aos="fade-up" data-aos-delay="400">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="fa fa-dollar" />
                <h3>Affordability</h3>
                <p>
                  Choose from our flexible subscription models tailored to
                  different business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 pt-5 mx-4">
        <div className="row d-flex mx-2">
          <div className="col-lg-5 col-md-12 mt-4">
            <h2 className="heading features-title">
              Key <span>Features</span>
            </h2>
            <p className="mt-4 pt-4" data-aos="fade-right">
              Whether you're conducting business meetings, virtual classrooms,
              or social gatherings, our video conferencing platform ensures an
              immersive and secure experience. Stay connected, collaborate
              effortlessly, and achieve more with our powerful solution.
              <br /> Get started today and transform the way you communicate!
            </p>
          </div>
          <div className="col-lg-7 col-md-12 mt-4">
            <div className="key-features-accordian" id="accordionExample" data-aos="fade-left">
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="100">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    HD Video & Audio Calls
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Experience crystal-clear video and audio quality for
                    uninterrupted meetings and conversations.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="200">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Secure & Encrypted Communication
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>Built with end-to-end encryption</strong>, ensuring
                    that your meetings remain private and protected from
                    unauthorized access.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="300">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Screen Sharing & Real-Time Collaboration
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Share your screen, documents, and presentations effortlessly
                    for interactive discussions and brainstorming sessions.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="400">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Multi-User & Large Meeting Support
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Host meetings with multiple participants and enjoy a smooth,
                    lag-free experience, whether it&apos;s a one-on-one call or
                    a large conference.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="500">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Cloud Recording & Playback
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Never miss a meeting! Record your sessions securely on the
                    cloud and access them anytime for review.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="600">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Chat & File Sharing
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Engage in real-time text conversations and share important
                    files without switching between multiple applications.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="700">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Cross-Platform Accessibility
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Use our platform on any device—desktop, tablet, or
                    mobile—without the need for additional installations.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="800">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    AI-Powered Background Noise Reduction
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Focus on conversations without distractions, thanks to
                    intelligent background noise suppression.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="900">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    Virtual Backgrounds & Customization
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Personalize your video calls with virtual backgrounds and
                    branding options.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="fade-down" data-aos-delay="1000">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    Easy Integration & API Support
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Seamlessly integrate with third-party applications and
                    enhance your workflow with our robust API support.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
