import groq from "groq";
import client from "../client";

export async function getSkills() {
  const skills = await client.fetch(groq`
      *[_type == "skill"]
      {
          title,
           slug, 
          skillIcon 
      }
    `);
  return skills;
}

export async function getEducation() {
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
  return education;
}

export async function getAboutMe() {
  const aboutMe = await client.fetch(groq`
      *[_type == "aboutMe"]
      {
        description,
        body
      }
    `);
  return aboutMe;
}
