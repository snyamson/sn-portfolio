import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>About</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et
            feugiat tempus.
          </p>
          <ul className="actions">
            <li>
              <a href="landing.html" className="button next">
                Read More
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

About.propTypes = {};

export default About;
