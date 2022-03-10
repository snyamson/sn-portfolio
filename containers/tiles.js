import React from "react";
import TileItem from "../components/tileItem";

const Tiles = ({ projects }) => {
  return (
    <div id="main">
      <section id="one" className="tiles">
        {projects.map((project, index) => (
          <TileItem key={index} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Tiles;
