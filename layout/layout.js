import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/footer"));
const Navigation = dynamic(() => import("../components/navigation"));
const Wrapper = dynamic(() => import("../containers/wrapper"));
const ScrollToTop = dynamic(() => import("../components/scrollToTop"));

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navigation />
        {children}
        <Footer />
      </Wrapper>
      <ScrollToTop />
    </>
  );
};

export default Layout;
