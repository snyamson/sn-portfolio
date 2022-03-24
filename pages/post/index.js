import dynamic from "next/dynamic";
const PostItem = dynamic(() => import("../../components/postItem"));
import { getAllPost } from "../../lib/post";

const Index = ({ posts }) => {
  return (
    <>
      <div id="wrapper">
        <section id="banner" className="style2">
          <div className="inner">
            <span className="image">
              <img src="/assets/images/banner.svg" alt="hero" />
            </span>
            <header className="major">
              <h1>Blog</h1>
            </header>
            <div className="content">
              <blockquote>
                &quot; Show me what you can do;
                <br />
                dont tell me what you can do &quot;
                <br />
                -- John Wooden
              </blockquote>
            </div>
          </div>
        </section>

        <div id="main">
          <section id="two" className="spotlights">
            {posts.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const posts = await getAllPost();

  return {
    props: {
      posts,
    },
  };
}
