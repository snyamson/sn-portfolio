/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const TileItem = ({ project }) => {
  return (
    <article>
      <span className="image">
        <img src="/assets/images/project.svg" alt="" />
      </span>
      <header className="major">
        <h3>
          <a className="link">{project.title}</a>
        </h3>
        <p>{project.description}</p>
        <br />
        <ul className="actions fit small">
          <li>
            <a href="#" className="button fit small">
              project
            </a>
          </li>
          <li>
            <a href="#" className="button fit small">
              report
            </a>
          </li>
        </ul>
      </header>
    </article>
  );
};

TileItem.propTypes = {};

TileItem.defaultProps = {
  project: {
    title: "Name of Project",
    description: "One line Project Description",
  },
};

export default TileItem;
