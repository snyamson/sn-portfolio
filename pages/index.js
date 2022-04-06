import dynamic from "next/dynamic";
const About = dynamic(() => import("../components/about"));
const Banner = dynamic(() => import("../components/banner"));
const Contact = dynamic(() => import("../components/contact"));
const Tiles = dynamic(() => import("../containers/tiles"));
const SEO = dynamic(() => import("../components/SEO"));
const Post = dynamic(() => import("../components/post"));
import {
  getAboutMe,
  getPost,
  getProjectCategories,
  getProjects,
  getResume,
} from "../lib/post";
import seoData from "../lib/seoData";

export default function Home({
  aboutMe,
  resume,
  projects,
  post,
  projectCategories,
}) {
  return (
    <>
      <SEO data={seoData} />
      <Banner resume={resume} />
      <Tiles projects={projects} categories={projectCategories} />
      <About about={aboutMe} />
      <Post post={post} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const aboutMe = await getAboutMe();
  const resume = await getResume();
  const projects = await getProjects();
  const post = await getPost();
  const projectCategories = await getProjectCategories();

  return {
    props: {
      aboutMe,
      resume,
      projects,
      post,
      projectCategories,
    },
  };
}
