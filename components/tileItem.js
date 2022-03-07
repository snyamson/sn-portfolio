/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const TileItem = (props) => {
  return (
    <article>
      <span className="image">
        <img src="/assets/images/project.svg" alt="" />
      </span>
      <header className="major">
        <h3>
          <Link href="/detail">
            <a className="link">Name of Project</a>
          </Link>
        </h3>
        <p>One line Project Description</p>
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

export default TileItem;
