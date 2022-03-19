import Link from "next/link";

const NavModal = ({ style }) => {
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
    </nav>
  );
};

export default NavModal;
