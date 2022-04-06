import dynamic from "next/dynamic";
import { useState } from "react";
const Filter = dynamic(() => import("../components/filter"));
const TileItem = dynamic(() => import("../components/tileItem"));

const Tiles = ({ projects, categories }) => {
  const [selected, setSelected] = useState("All");

  const filteredProjects = projects?.filter((project) =>
    project?.categories?.includes(selected)
  );

  console.log(projects, selected, filteredProjects);

  const handleSelect = (name) => {
    setSelected(name);
  };

  return (
    <>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Project</h2>
          </header>
          <Filter
            data={categories}
            selected={selected}
            handleSelect={handleSelect}
          />
        </div>
        <div id="main">
          <section id="one" className="tiles">
            {projects?.length > 0 && filteredProjects.length > 0
              ? filteredProjects.map((project, index) => (
                  <TileItem key={index} project={project} />
                ))
              : projects.map((project, index) => (
                  <TileItem key={index} project={project} />
                ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default Tiles;
