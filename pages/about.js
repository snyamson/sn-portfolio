/* eslint-disable @next/next/no-img-element */
import groq from "groq";
import { PortableText } from "@portabletext/react";
import client, { ptComponents } from "../client";
import EducationItem from "../components/educationItem";
import SkillItem from "../components/skillItem";

const Detail = ({ skills, education, aboutMe }) => {
  // const skills = [
  //   "html5",
  //   "css3",
  //   "js",
  //   "node",
  //   "react",
  //   "excel",
  //   "rproj",
  //   "postgres",
  //   "git",
  // ];

  return (
    <>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>About Me</h1>
            </header>
            <span className="image main">
              <img src="assets/images/about-me.svg" alt="" />
            </span>
            {/* <p>
              I had my undergraduate degree from Kwame Nkrumah University of
              Science and Technology (KNUST) - Ghana there I studied Economics.
              I possess great analytical and problem-solving skills. I enjoy
              working alone and also in teams. My hobbies are coding and
              researching.
            </p> */}
            <p>{aboutMe[0]?.description}</p>

            {aboutMe[0]?.body !== null && (
              <PortableText
                value={aboutMe[0]?.body}
                components={ptComponents}
              />
            )}
            <hr className="major" />

            <div className="row">
              <div className="col-4 col-12-small">
                <header className="major">
                  <h3>Skills</h3>
                </header>
                <div className="box alt">
                  <div className="row gtr-50 gtr-uniform">
                    {skills.map((skill, index) => (
                      <SkillItem key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-8 col-12-small ">
                <header className="major">
                  <h3>Education and Certifications</h3>
                </header>

                {education.map((item, index) => (
                  <EducationItem key={index} item={item} />
                ))}

                {/* <EducationItem
                  title="Alison - Advanced Diploma in Data Science with R"
                  logo="alison"
                />
                <EducationItem
                  title="Udemy - Google Big Query and PostgreSQL: Big Query for Data Analysis"
                  logo="udemy"
                /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Detail;

export async function getStaticProps() {
  const skills = await client.fetch(groq`
      *[_type == "skill"]
      {
          title,
           slug, 
          skillIcon 
      }
    `);

  const education = await client.fetch(groq`
      *[_type == "education"]
      {
          title,
           slug, 
          institutionImage,
          certType,
          "docFileUrl": docFile.asset->url,
          body
      }
    `);

  const aboutMe = await client.fetch(groq`
      *[_type == "aboutMe"]
      {
        description,
        body
      }
    `);

  return {
    props: {
      skills,
      education,
      aboutMe,
    },
  };
}
