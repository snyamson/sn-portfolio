import React from "react";
import PropTypes from "prop-types";

const About = ({ about }) => {
  return (
    <>
      <section
        id="one"
        style={{
          backgroundColor: "#1d1d24",
        }}
      >
        <div className="inner">
          <header className="major">
            <h2>About</h2>
          </header>
          <p>{about}</p>
          <ul className="actions">
            <li>
              <a className="button next">Read More</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

About.propTypes = {};

About.defaultProps = {
  about:
    " I had my undergraduate degree from Kwame Nkrumah University of Science and Technology (KNUST) - Ghana there I studied Economics. I possess great analytical and problem-solving skills. I enjoy working alone and also in teams. My hobbies are coding and researching.",
};

export default About;
