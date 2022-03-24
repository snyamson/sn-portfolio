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
