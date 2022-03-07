/* eslint-disable @next/next/no-img-element */
import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <>
      <div className="col-4">
        <span className="image fit">
          <img
            src={`/assets/images/icons/${skill}.svg`}
            alt={`${skill} icon`}
          />
        </span>
      </div>
    </>
  );
};

SkillItem.defaultProps = {
  skill: "rproj",
};

export default SkillItem;
