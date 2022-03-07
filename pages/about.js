/* eslint-disable @next/next/no-img-element */
import React from "react";
import EducationItem from "../components/educationItem";
import SkillItem from "../components/skillItem";

const Detail = () => {
  return (
    <>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>About Me</h1>
            </header>
            <span className="image main">
              <img src="assets/images/pic11.jpg" alt="" />
            </span>
            <p>
              I had my undergraduate degree from Kwame Nkrumah University of
              Science and Technology (KNUST) - Ghana there I studied Economics.
              I possess great analytical and problem-solving skills. I enjoy
              working alone and also in teams. My hobbies are coding and
              researching.
            </p>

            <hr className="major" />

            <div className="row">
              <div className="col-4 col-12-small">
                <header className="major">
                  <h3>Skills</h3>
                </header>
                <div className="box alt">
                  <div className="row gtr-50 gtr-uniform">
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                  </div>
                </div>
              </div>
              <div className="col-8 col-12-small ">
                <header className="major">
                  <h3>Education and Certifications</h3>
                </header>
                <EducationItem btnDesc="transcript" />
                <EducationItem title="Alison - Advanced Diploma in Data Science with R" />
                <EducationItem title="Udemy - Google Big Query and PostgreSQL: Big Query for Data Analysis" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Detail;
