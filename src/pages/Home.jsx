import React from "react";
import "../css/Home.css"; 
 
const Home = () => {
  return (
    <div className="home-main">
        <div>
        <h1>Student Connect</h1>
        <h2>The AI Code Editor</h2>
        <p>Built to make you extraordinarily productive, Student Connect is the best way to code with AI.</p>
        </div>
      
        <div className="button-group">
          <button className="btn white-btn">Download for Windows</button>
          <button className="btn black-btn">Download for MacOS</button>
        </div>

      
    </div>
  );
};

export default Home;
