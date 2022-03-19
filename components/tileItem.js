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
      <header className="major tile">
        <h3>
          <div className="link">{project.title}</div>
        </h3>
        <p>{project.description} </p>
        <br />
        <ul className="actions fit small">
          {project?.projectLink && (
            <li>
              <a href={project?.projectLink} className="button  small">
                project
              </a>
            </li>
          )}
          {project?.reportLink && (
            <li>
              <a href={project?.reportLink} className="button  small">
                report
              </a>
            </li>
          )}
          {project?.viewLink && (
            <li>
              <a href={project?.viewLink} className="button  small">
                view
              </a>
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
