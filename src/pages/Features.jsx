import React from "react";
import "../css/Features.css";

const Features = () => {
  return (
    <div className="main-feature">
      <div className="container">

        <div className="feature-intro">
          <h2>Code with rich features</h2>
          <p>
            There's a lot more to an editor. Whether it's using built-in features or rich extensions, there's something for everyone.
          </p>
        </div>

        <ul className="cards">
          {/* Original Cards */}
          <li className="card cards__item card--design">
            <div className="card__frame">
              <div className="card__picture">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1496/1496034.png"
                  alt="Design Icon"
                  width="120"
                />
              </div>
              <h2 className="card__title">Design</h2>
            </div>
            <div className="card__overlay"></div>
            <div className="card__content">
              <h2>Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                ipsum veritatis id quia cupiditate sed architecto aliquam nostrum
                unde nam minima voluptas dicta, beatae sint reprehenderit sit
                ducimus officiis ratione?
              </p>
            </div>
          </li>

          <li className="card cards__item card--code">
            <div className="card__frame">
              <div className="card__picture">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png"
                  alt="Code Icon"
                  width="120"
                />
              </div>
              <h2 className="card__title">Code</h2>
            </div>
            <div className="card__overlay"></div>
            <div className="card__content">
              <h2>Code</h2>
              <p>
                Dignissimos ipsam culpa vitae vel hic harum omnis doloremque
                debitis laudantium neque quos iure voluptates quidem ratione esse
                modi, rerum illum facere eius accusantium dolorem incidunt beatae
                officiis voluptatem? Nostrum.
              </p>
            </div>
          </li>

          <li className="card cards__item card--launch">
            <div className="card__frame">
              <div className="card__picture">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/478/478543.png"
                  alt="Launch Icon"
                  width="120"
                />
              </div>
              <h2 className="card__title">Launch</h2>
            </div>
            <div className="card__overlay"></div>
            <div className="card__content">
              <h2>Launch</h2>
              <p>
                Asperiores, harum dignissimos at neque quaerat, excepturi, ipsa in
                consectetur blanditiis tempore error! Libero fuga possimus qui
                saepe temporibus praesentium, ut ratione facere rem distinctio,
                beatae omnis officiis illum animi.
              </p>
            </div>
          </li>

          {/* New Cards */}
          <li className="card cards__item card--collaborate">
            <div className="card__frame">
              <div className="card__picture">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                  alt="Collaborate Icon"
                  width="120"
                />
              </div>
              <h2 className="card__title">Collaborate</h2>
            </div>
            <div className="card__overlay"></div>
            <div className="card__content">
              <h2>Collaborate</h2>
              <p>
                Work together in real-time with ease. From live sharing to pair programming, collaboration has never been smoother or faster.
              </p>
            </div>
          </li>

          <li className="card cards__item card--debug">
            <div className="card__frame">
              <div className="card__picture">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/726/726442.png"
                  alt="Debug Icon"
                  width="120"
                />
              </div>
              <h2 className="card__title">Debug</h2>
            </div>
            <div className="card__overlay"></div>
            <div className="card__content">
              <h2>Debug</h2>
              <p>
                Powerful debugging tools are built right in. Set breakpoints, inspect variables, and step through your code with ease.
              </p>
            </div>
          </li>

          <li className="card cards__item card--customize">
            <div className="card__frame">
              <div className="card__picture">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/126/126472.png"
                  alt="Customize Icon"
                  width="120"
                />
              </div>
              <h2 className="card__title">Customize</h2>
            </div>
            <div className="card__overlay"></div>
            <div className="card__content">
              <h2>Customize</h2>
              <p>
                Tailor the editor to your workflow. Themes, keybindings, layouts — it’s your playground, your rules.
              </p>
            </div>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Features;
