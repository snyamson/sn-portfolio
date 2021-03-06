const SocialLink = ({ link }) => {
  const { title, url, icon } = link;
  return (
    <>
      <li>
        <a href={url} className={`icon brands alt ${icon}`}>
          <span className="label">{title}</span>
        </a>
      </li>
    </>
  );
};

export default SocialLink;

SocialLink.defaultProps = {
  title: "LinkedIn",
  url: "https://www.linkedin.com/in/solomon-nyamson-9a093517b/",
  icon: "fa-linkedin-in",
};
