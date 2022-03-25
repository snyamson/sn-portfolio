import groq from "groq";
import client from "../client";

const query = groq`*[_type == "post" && slug.current == $slug][0] { 
  title, 
  mainImage,
  body,
    "name": author->name,
    "categories": categories[]->title, 
    publishedAt,
}`;

const pagiQuery = groq`
      *[_type == "post" && slug.current == $slug]{
      "currentPost" : {
        title
      },
      "previousPost": *[_type == "post" && ^.publishedAt > publishedAt]|order(publishedAt desc)[0]{"slug":slug.current}, 
       "nextPost": *[_type == "post" && ^.publishedAt < publishedAt]|order(publishedAt asc)[0]{"slug":slug.current} 
      } | order(publishedAt)[0] 
    `;

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

export async function getPostBySlug(slug) {
  const post = await client.fetch(query, { slug });
  return post;
}

export async function getPaginationPost(slug) {
  const paginationPost = await client.fetch(pagiQuery, { slug });
  return paginationPost;
}

export async function getPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return paths;
}
