import Link from "next/link";
import NavModal from "./navModal";

const Navigation = () => {
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

      <NavModal />
    </>
  );
};

export default Navigation;
