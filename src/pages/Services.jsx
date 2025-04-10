import React from "react";
import "../css/Services.css";

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-header">
        <h2>🚀 Our Services</h2>
        <p>
          We provide <strong>top-notch solutions</strong> to bring your ideas to life — from design to deployment,
          with <strong>real-world impact</strong>.
        </p>
      </div>

      <div className="container">
        <div className="card">
          <div className="inner-card">
            <div className="face front">
              <h3>🎨 Design</h3>
            </div>
            <div className="face back">
              <p>
                We craft stunning, user-friendly designs that resonate with your brand.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="inner-card">
            <div className="face front">
              <h3>💻 Code</h3>
            </div>
            <div className="face back">
              <p>
                We write clean, scalable, and maintainable code for all your project needs.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="inner-card">
            <div className="face front">
              <h3>🚀 Launch</h3>
            </div>
            <div className="face back">
              <p>
                From deployment to monitoring, we ensure your product hits the ground running.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
