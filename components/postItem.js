/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import { urlFor } from "../lib/imageUrl";

const PostItem = ({ post }) => {
  //  data-position="center center"
  //   data-position="top center"
  //      data-position="25% 25%"

  const imageProps = useNextSanityImage(client, post.thumbnail);

  return (
    <>
      <section>
        <a className="image">
          <img
            src={urlFor(post?.thumbnail).width(576).url()}
            alt={`${post?.title}'s image`}
            dataPosition="top center"
          />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major tile">
              <h3>{post?.title}</h3>
            </header>
            <p>{post?.description}</p>
            <ul className="actions">
              <li>
                <Link href="/post/[slug]" as={`/post/${post?.slug.current}`}>
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
