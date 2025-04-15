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
            <div className="face front front-collab">
              <h3>🔧 Real-Time Code Collaboration</h3>
            </div>
            <div className="face back">
              <p>
                Collaborate with team members live — see changes in real-time with synced code editing.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="inner-card">
            <div className="face front front-debug">
              <h3>🧪 Built-in Debugger</h3>
            </div>
            <div className="face back">
              <p>
                Instantly find and fix bugs using our intuitive debugging tools built right into the editor.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="inner-card">
            <div className="face front front-cicd">
              <h3>🔁 CI/CD Pipeline Integration</h3>
            </div>
            <div className="face back">
              <p>
                Automate builds, tests, and deployments directly from your editor using powerful pipelines.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="inner-card">
            <div className="face front front-practice">
              <h3>📝 Live Coding Questions</h3>
            </div>
            <div className="face back">
              <p>
                Practice with real-time coding challenges and test your knowledge with instant feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="inner-card">
            <div className="face front front-theme">
              <h3>🎨 Customizable Editor</h3>
            </div>
            <div className="face back">
              <p>
                Switch between dark and light modes, adjust font size, and personalize your editor experience.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="inner-card">
            <div className="face front front-cloud">
              <h3>🔐 Secure Cloud-Based Storage</h3>
            </div>
            <div className="face back">
              <p>
                Save and access your projects securely from anywhere with encrypted cloud storage.
              </p>
            </div>
          </div>
        </div>

       
       

       
      </div>
    </div>
  );
};

export default Services;
