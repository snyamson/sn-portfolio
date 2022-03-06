import React from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import Wrapper from "../containers/wrapper";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navigation />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
