import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <title>Esther Lizardo | Front-End Developer</title>
        <meta name="description" content="Online Porfolio - Esther Lizardo is a front-end developer, here you can get to know about her." />
        <link rel="icon"type="" href="" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
