/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#060707" />

          {/* Libraries Stylesheet  */}
          <link rel="icon" href="/favicon.svg" />

          {/* Libraries Stylesheet  */}

          <link rel="stylesheet" href="../assets/css/main.css" />
          <noscript>
            <link rel="stylesheet" href="../assets/css/noscript.css" />
          </noscript>

          {/* JavaScript Libraries  */}

          <script async src="../assets/js/jquery.min.js"></script>
          <script async src="../assets/js/jquery.scrolly.min.js"></script>
          <script async src="../assets/js/jquery.scrollex.min.js"></script>
          <script async src="../assets/js/browser.min.js"></script>
          <script async src="../assets/js/breakpoints.min.js"></script>
          <script async src="../assets/js/util.js"></script>

          {/* Javascript  */}
          <script async src="../assets/js/main.js"></script>
        </Head>
        <body className="is-preload">
          <Main />
          <NextScript />
          {/* Tidio Chat Bot */}
          <script
            src="//code.tidio.co/4fbls9mxgr5dtarodeddjz1ynirdlhuf.js"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
