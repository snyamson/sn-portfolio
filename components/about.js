import Link from "next/link";

const About = ({ about }) => {
  return (
    <>
      <section
        id="one"
        style={{
          backgroundColor: "#121515",
        }}
      >
        <div className="inner">
          <header className="major">
            <h2>About</h2>
          </header>
          <p>{about[0]?.description}</p>
          <ul className="actions">
            <li>
              <Link href="/about">
                <a className="button next">Read More</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

About.defaultProps = {
  about:
    " I had my undergraduate degree from Kwame Nkrumah University of Science and Technology (KNUST) - Ghana there I studied Economics. I possess great analytical and problem-solving skills. I enjoy working alone and also in teams. My hobbies are coding and researching.",
};

export default About;
