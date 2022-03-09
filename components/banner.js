const Banner = ({ resume }) => {
  return (
    <>
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, my name is Solomon Nyamson</h1>
          </header>
          <div className="content">
            <p>
              I am a Data Scientist, a Research Fellow at
              <br />
              TechLeeds and a Web Developer.
              <br />
              My Portfolio consist of different projects.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  View Projects
                </a>
              </li>
              <li>
                <a
                  href={`${resume[0]?.resumeUrl}?dl=Solomon-Nyamson-Resume.pdf`}
                  className="button primary scrolly"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
