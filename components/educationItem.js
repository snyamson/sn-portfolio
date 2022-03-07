/* eslint-disable @next/next/no-img-element */
import React from "react";

const EducationItem = ({ title, btnDesc }) => {
  return (
    <>
      <div>
        <p>
          <h2>{title}</h2>
          <span className="image left" style={{ paddingRight: 20 }}>
            <img src="/assets/images/pic09.jpg" alt="" />
          </span>
          <div>
            <ul>
              <li>Dolor etiam magna etiam.</li>
              <li>Sagittis lorem eleifend.</li>
              <li>Felis feugiat viverra.</li>
              <li>Dolor etiam magna etiam.</li>
              <li>Sagittis lorem eleifend.</li>
              <li>Felis feugiat viverra.</li>
              <li>Dolor etiam magna etiam.</li>
            </ul>
          </div>
          <br />
          <ul style={{ marginTop: -20 }} className="actions fit small">
            <li>
              <a href="#" className="button fit small solid ">
                {btnDesc}
              </a>
            </li>
          </ul>
        </p>
      </div>
      <hr />
    </>
  );
};

EducationItem.defaultProps = {
  title: "KNUST - Economics (2017 - 2021)",
  btnDesc: "certificate",
};

export default EducationItem;
