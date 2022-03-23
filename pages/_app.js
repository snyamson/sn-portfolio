import dynamic from "next/dynamic";
import { useState } from "react";
import { Router } from "next/router";
const Layout = dynamic(() => import("../layout/layout"));
const Spinner = dynamic(() => import("../components/spinner"));

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeError", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <>
      {loading && <Spinner />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
