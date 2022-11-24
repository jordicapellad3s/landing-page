import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/aboutus";
import Masthead from "../components/masthead";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Margelo</title>
        <meta
          name="description"
          content="App development, done right. We will help you ship better apps, faster. Our team of expert engineers has created the best user experiences in some of the most popular apps worldwide. We specialize in app development (from Idea to AppStore), as well as performance optimizations, custom module development and consulting."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
    </div>
  );
}
