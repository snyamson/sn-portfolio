import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="#" className="icon brands alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-linkedin-in">
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; 2022</li>
            <li>
              Design: <a href="https://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
