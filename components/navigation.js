import dynamic from "next/dynamic";
import Link from "next/link";
const NavModal = dynamic(() => import("./navModal"));

const Navigation = ({ resume }) => {
  return (
    <>
      <header id="header" className="alt">
        <Link href="/">
          <a className="logo">
            <strong>S - N</strong>
          </a>
        </Link>

        <nav>
          <a href="#menu"></a>
        </nav>
      </header>

      <NavModal resume={resume} />
    </>
  );
};

export default Navigation;
