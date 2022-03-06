import React from "react";
import PropTypes from "prop-types";
import TileItem from "../components/tileItem";

const Tiles = (props) => {
  return (
    <div id="main">
      <section id="one" className="tiles">
        <TileItem />
        <TileItem />
        <TileItem />
        <TileItem />
        <TileItem />
        <TileItem />
      </section>
    </div>
  );
};

Tiles.propTypes = {};

export default Tiles;
