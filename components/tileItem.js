import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const TileItem = ({ project }) => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    return builder.image(source);
  };

  return (
    <article>
      <span className="image">
        <img
          src={urlFor(project?.mainImage).width(576).url()}
          alt={`${project?.title} image`}
        />
      </span>
      <header className="major">
        <h3>
          <a className="link">{project.title}</a>
        </h3>
        <p>{project.description}</p>
        <br />
        <ul className="actions fit small">
          {project?.projectLink && (
            <li>
              <Link href={project?.projectLink}>
                <a className="button fit small">project</a>
              </Link>
            </li>
          )}
          {project?.reportLink && (
            <li>
              <Link href={project?.reportLink}>
                <a className="button fit small">report</a>
              </Link>
            </li>
          )}
          {project?.viewLink && (
            <li>
              <Link href={project?.viewLink}>
                <a className="button fit small">view</a>
              </Link>
            </li>
          )}
        </ul>
      </header>
    </article>
  );
};

TileItem.propTypes = {};

TileItem.defaultProps = {
  project: {
    title: "Name of Project",
    description: "One line Project Description",
  },
};

export default TileItem;
