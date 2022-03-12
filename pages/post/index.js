import groq from "groq";
import client from "../../client";
import PostItem from "../../components/postItem";

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
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]
      {
         publishedAt,
          title,
           slug,
           description, 
           body,
           thumbnail,
      } | order(publishedAt desc) 
    `);

  return {
    props: {
      posts,
    },
  };
}
