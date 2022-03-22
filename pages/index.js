import dynamic from "next/dynamic";
import groq from "groq";
import ScrollToTop from "react-scroll-to-top";
const About = dynamic(() => import("../components/about"));
const Banner = dynamic(() => import("../components/banner"));
const Contact = dynamic(() => import("../components/contact"));
const Tiles = dynamic(() => import("../containers/tiles"));
const SEO = dynamic(() => import("../components/SEO"));
import client from "../client";
import Post from "../components/post";

export default function Home({ aboutMe, resume, projects, post }) {
  return (
    <>
      <SEO
        data={{
          title: "Solomon Nyamson",
          description:
            "A passionate Data Scientist, Research Fellow and Web Developer.",
          image: "/assets/images/author.jpg",
          url: "https://solomonnyamson.vercel.app",
          keywords: [
            "Solomon",
            "Solomon Nyamson",
            "@snyamson",
            "snyamson",
            "Portfolio",
            "Solomon Portfolio ",
            "Solomon Nyamson Portfolio",
            "data scientist",
            "data analyst",
            "machine learning",
            "excel",
            "tableau",
            "full stack web developer",
            "web developer",
            "nextjs",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
          ],
        }}
      />
      <Banner resume={resume} />
      <Tiles projects={projects} />
      <About about={aboutMe} />
      <Post post={post} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const aboutMe = await client.fetch(groq`
      *[_type == "aboutMe"]
      {
        description,
      }
    `);

  const resume = await client.fetch(groq`
      *[_type == "resume"]
      {
        "resumeUrl": resumeDoc.asset->url,
      }
    `);

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

  const post = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]
      {
         publishedAt,
          title,
           slug,
           description, 
           body,
           thumbnail,
      } | order(publishedAt desc)[0] 
    `);

  return {
    props: {
      aboutMe,
      resume,
      projects,
      post,
    },
  };
}
