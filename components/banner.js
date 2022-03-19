const Banner = ({ resume }) => {
  return (
    <>
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>
              Hi, <span className="name"> My Name is Solomon Nyamson</span>
            </h1>
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
                  className="button primary"
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
