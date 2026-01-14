import { useState } from "react";
import "./Skill.css";

function Skills() {
  return (
    <div className="skills ">
      <div className="skills-grid">
        <div className="skill-card">
          <div className="icon">{`</>`}</div>
          <h3>HTML / CSS</h3>

          <div className="progress">
            <span style={{ width: "95%" }}></span>
          </div>

          <p>95%</p>
        </div>

        <div className="skill-card">
          <div className="icon">JS</div>
          <h3>JavaScript</h3>

          <div className="progress">
            <span style={{ width: "90%" }}></span>
          </div>

          <p>90%</p>
        </div>

        <div className="skill-card">
          <div className="icon">⚛</div>
          <h3>React</h3>

          <div className="progress">
            <span style={{ width: "92%" }}></span>
          </div>

          <p>92%</p>
        </div>

        <div className="skill-card">
          <div className="icon">⚛</div>
          <h3>React</h3>

          <div className="progress">
            <span style={{ width: "92%" }}></span>
          </div>

          <p>92%</p>
        </div>

        <div className="skill-card">
          <div className="icon">⚛</div>
          <h3>React</h3>

          <div className="progress">
            <span style={{ width: "92%" }}></span>
          </div>

          <p>92%</p>
        </div>

        <div className="skill-card">
          <div className="icon">⚛</div>
          <h3>React</h3>

          <div className="progress">
            <span style={{ width: "92%" }}></span>
          </div>

          <p>92%</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
