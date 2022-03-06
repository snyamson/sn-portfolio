import NavModal from "./navModal";

const Navigation = () => {
  return (
    <>
      <header id="header" className="alt">
        <a className="logo">
          <strong>S - N</strong>
        </a>

        <nav>
          <a href="#menu"></a>
        </nav>
      </header>

      <NavModal />
    </>
  );
};

export default Navigation;
