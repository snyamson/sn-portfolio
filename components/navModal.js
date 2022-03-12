import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { urlState } from "../atoms/urlState";

const NavModal = ({ style }) => {
  const url = useRecoilValue(urlState);

  return (
    <nav id="menu" style={style}>
      <ul className="links">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/post">
            <a>Blog</a>
          </Link>
        </li>
      </ul>

      <ul className="actions stacked">
        <li>
          <a
            href={`${url}?dl=Solomon-Nyamson-Resume.pdf`}
            className="button primary fit"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavModal;
