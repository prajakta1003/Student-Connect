import React from "react";
import "../css/Docs.css";

const Docs = () => {
  return (
    <div className="docs-main">
      <h1>Getting Started with Student Connect</h1>
      <p className="docs-intro">
        Follow the steps below to install and start using Student Connect on your system. Whether you're on Windows or Mac, these quick instructions will get you up and running in no time!
      </p>

      <h2>🚀 Installation Steps</h2>
      <ol>
        <li>
          <div className="icon"><i className="fa-solid fa-bicycle"></i></div>
          <div className="title">Step 1</div>
          <div className="descr">Download the appropriate installer for your OS from the homepage.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-car"></i></div>
          <div className="title">Step 2</div>
          <div className="descr">Run the installer and follow the on-screen setup instructions.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-helicopter"></i></div>
          <div className="title">Step 3</div>
          <div className="descr">Launch the application once installation is complete.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-plane"></i></div>
          <div className="title">Step 4</div>
          <div className="descr">Sign in using your school email or create a new account.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-rocket"></i></div>
          <div className="title">Step 5</div>
          <div className="descr">Explore the dashboard and start using the AI-powered code editor.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-bus"></i></div>
          <div className="title">Step 6</div>
          <div className="descr">Need help? Visit the support section or contact our team directly.</div>
        </li>
      </ol>
    </div>
  );
};

export default Docs;
