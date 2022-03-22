import PostItem from "./postItem";

const Post = ({ post }) => {
  return (
    <>
      <section
        id="one"
        style={{
          backgroundColor: "#060707",
        }}
      >
        <div className="inner">
          <header className="major">
            <h2>Blog</h2>
          </header>
          {/* Render one post item */}

          <section id="two" className="spotlights">
            <PostItem key={post} post={post} />
          </section>
        </div>
      </section>
    </>
  );
};

export default Post;
