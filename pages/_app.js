import { useState } from "react";
import Layout from "../layout/layout";
import nProgress from "nprogress";
import { Router } from "next/router";
import Spinner from "../components/spinner";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeError", () => {
    setLoading(false);
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
