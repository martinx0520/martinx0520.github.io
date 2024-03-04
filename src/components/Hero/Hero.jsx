import "./Hero.css";

import React from "react";

const Hero = () => {
  return (
    <section className="hero-container" id="Home">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Fullstack Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solution
        </p>
      </div>
      <div className="hero-img">
        <div>
          <img src="/assets/img01.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
