import dynamic from "next/dynamic";
const SocialLink = dynamic(() => import("../components/socialLink"));

const socialLinks = [
  {
    title: "Twitter",
    url: "https://twitter.com/solomonnyamson",
    icon: "fa-twitter",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/solomonnyamson",
    icon: "fa-facebook-f",
  },
  {
    title: "GitHub",
    url: "https://github.com/snyamson",
    icon: "fa-github",
  },

  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/solomon_nyamson/",
    icon: "fa-linkedin-in",
  },
];

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} link={link} />
            ))}
          </ul>
          <ul className="copyright">
            <li>&copy; 2022</li>
            <li>Design: Solomon Nyamson</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
