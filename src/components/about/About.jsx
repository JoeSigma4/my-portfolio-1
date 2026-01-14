import { useState } from "react";

import "./About.css";
import aboutImg from "../../assets/about.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-right">
        <h2>Passionate about creating exceptional digital experiences</h2>
        <p>
          I'm a frontend developer with a keen eye for design and a passion for
          writing clean, efficient code. With over 5 years of experience, I've
          worked on diverse projects ranging from responsive websites to complex
          web applications.
        </p>
        <p>
          My expertise lies in modern JavaScript frameworks, particularly React,
          and I'm committed to staying current with the latest web technologies
          and best practices.
        </p>
        <p>
          When I'm not coding, you'll find me contributing to open-source
          projects, writing technical articles, or exploring new frameworks and
          tools to enhance my development workflow
        </p>
      </div>
      <div className="about-left">
        <img src={aboutImg} alt="" className="about-img" />
      </div>
    </div>
  );
};

export default About;
