import React from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import Wrapper from "../containers/wrapper";

const Layout = ({ children, resume }) => {
  return (
    <>
      <Wrapper>
        <Navigation resume={resume} />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
