//import "../styles/globals.css";

import groq from "groq";
import client from "../client";
import Layout from "../layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

// export async function getStaticProps() {
//   const resume = await client.fetch(groq`
//       *[_type == "resume"]
//       {
//         "resumeUrl": resumeDoc.asset->url,
//       }
//     `);

//   return {
//     props: {
//       resume,
//     },
//   };
// }
