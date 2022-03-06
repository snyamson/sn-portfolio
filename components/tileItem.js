/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const TileItem = (props) => {
  return (
    <article>
      <span className="image">
        <img src="/assets/images/pic01.jpg" alt="" />
      </span>
      <header className="major">
        <h3>
          <Link href="/detail">
            <a className="link">Aliquam</a>
          </Link>
        </h3>
        <p>Ipsum dolor sit amet</p>
      </header>
    </article>
  );
};

TileItem.propTypes = {};

export default TileItem;
