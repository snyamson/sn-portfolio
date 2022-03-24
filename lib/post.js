import groq from "groq";
import client from "../client";

export async function getAllPost() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]
    {
      publishedAt,
      title,
      slug,
      description,
      body,
      thumbnail,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    } | order(publishedAt desc)
  `);
  return posts;
}

export async function getAboutMe() {
  const aboutMe = await client.fetch(groq`
      *[_type == "aboutMe"]
      {
        description,
      }
    `);
  return aboutMe;
}

export async function getResume() {
  const resume = await client.fetch(groq`
      *[_type == "resume"]
      {
        "resumeUrl": resumeDoc.asset->url,
      }
    `);
  return resume;
}

export async function getProjects() {
  const projects = await client.fetch(groq`
      *[_type == "project"]
      {
        title,
        description,
        mainImage,
        projectLink,
        reportLink,
        viewLink
      }
    `);
  return projects;
}

export async function getPost() {
  const post = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]
      {
         publishedAt,
          title,
           slug,
           description, 
           body,
           thumbnail,
          "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
      } | order(publishedAt desc)[0] 
    `);
  return post;
}
