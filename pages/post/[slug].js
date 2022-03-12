import groq from "groq";
import Image from "next/image";
import client, { ptComponents } from "../../client";
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";

const PostDetail = ({ post }) => {
  const imageProps = useNextSanityImage(client, post.mainImage);

  const RenderMeta = ({ children }) => {
    return (
      <>
        <div
          className="col-12"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      </>
    );
  };

  const RenderCategory = ({ title }) => {
    return (
      <div
        style={{
          padding: "0 2rem",
          background: "#fff",
          color: "#212121",
          marginLeft: "2rem",
        }}
      >
        {title}
      </div>
    );
  };

  return (
    <>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1 className="post_title">{post?.title}</h1>
            </header>
            <span className="image main">
              <Image
                {...imageProps}
                layout="responsive"
                alt={`${post?.title}'s image`}
              />
              <div
                className="row"
                style={{
                  marginTop: "1rem",
                }}
              >
                <RenderMeta>
                  By {post?.name} on{" "}
                  {new Date(post?.publishedAt).toDateString()}
                  {post?.categories.map((category, index) => (
                    <RenderCategory key={index} title={category} />
                  ))}
                </RenderMeta>
              </div>
            </span>

            <PortableText value={post?.body} components={ptComponents} />
          </div>
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

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
