import groq from "groq";
import Image from "next/image";
import client, { ptComponents } from "../../client";
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";
import Reveal from "react-reveal/Reveal";
import styles from "../../styles/slug.module.css";
import Pagination from "../../components/pagination";

const PostDetail = ({ post, paginationPost }) => {
  const imageProps = useNextSanityImage(client, post.mainImage);

  const RenderMeta = ({ author, publishedAt }) => {
    return (
      <>
        <div className={`col-12 ${styles.meta}`}>
          <div>By {author}</div>
          <span className={styles.pipe}>|</span>
          <div>{publishedAt}</div>
        </div>
      </>
    );
  };

  const RenderCategory = ({ title }) => {
    return (
      <div
        style={{
          padding: "0 2rem",
          background: "#9bf1ff",
          color: "#121212",
        }}
      >
        {title}
      </div>
    );
  };

  return (
    <>
      <div id="main" className="alt">
        <section>
          <div className="inner">
            <header className="title">
              <h1>{post?.title}</h1>
            </header>

            <span className="image main">
              <Image
                {...imageProps}
                layout="responsive"
                alt={`${post?.title}'s image`}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                {post?.categories.map((category, index) => (
                  <RenderCategory key={index} title={category} />
                ))}
              </div>

              <div
                className="row"
                style={{
                  marginTop: "1rem",
                }}
              >
                <RenderMeta
                  author={post?.name}
                  publishedAt={new Date(post?.publishedAt).toDateString()}
                />
              </div>
            </span>
            <Reveal effect="fadeInUp">
              <PortableText value={post?.body} components={ptComponents} />
            </Reveal>
          </div>
          <Pagination paginationPost={paginationPost} />
        </section>
      </div>
    </>
  );
};

export default PostDetail;

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

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // it is important to default the slug so that it doesn't return an error

  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });

  const paginationPost = await client.fetch(pagiQuery, { slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      paginationPost,
    },
  };
}
