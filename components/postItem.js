import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const PostItem = ({ post }) => {
  //  data-position="center center"
  //   data-position="top center"
  //      data-position="25% 25%"

  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    return builder.image(source);
  };

  return (
    <>
      <section>
        <Link href="/detail">
          <a className="image">
            <img
              src={urlFor(post?.mainImage).width(576).url()}
              alt={`${post?.title} image`}
            />
          </a>
        </Link>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{post?.title}</h3>
            </header>
            <p>{post?.description}</p>
            <ul className="actions">
              <li>
                <Link href="/detail ">
                  <a className="button">Learn more</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostItem;
