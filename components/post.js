import Link from "next/link";
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

      <div className="row">
        <div className="col-12">
          <ul
            className="actions"
            style={{
              justifyContent: "center",
            }}
          >
            <li>
              <Link href="/post">
                <a className="button primary">Load More Post</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Post;
