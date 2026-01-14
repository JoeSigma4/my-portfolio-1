import { useState } from "react";
import "./Project.css";
const Project = () => {
  return (
    <div className="projects">
      <div className="projects-grid">
        <div className="project-card">
          <div className="show"></div>
          <div className="project-content">
            <h3 className="content">Ecommerce</h3>
            <p className="content">
              Amodern fully responsive e-commerce website with cart
              functionality, product filltering,and checkout flow.
            </p>
            <span className="content">MongoDb</span>
            <span className="content">Express.js</span>
            <span className="content">Chart.js</span>
          </div>
        </div>
        <div className="project-card">
          <div className="show"></div>
          <div className="project-content">
            <h3 className="content">Ecommerce</h3>
            <p className="content">
              A modern fully responsive e-commerce website with cart
              functionality, product filltering,and checkout flow.
            </p>
            <span className="content">MongoDb</span>
            <span className="content">Express.js</span>
            <span className="content">Next.js</span>
          </div>
        </div>
        <div className="project-card">
          <div className="show"></div>
          <div className="project-content">
            <h3 className="content">Ecommerce</h3>
            <p className="content">
              A modern fully responsive e-commerce website with cart
              functionality, product filltering,and checkout flow.
            </p>
            <span className="content">MongoDB</span>
            <span className="content">Node.js</span>
            <span className="content">Reac.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
