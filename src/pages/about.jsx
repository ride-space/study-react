import Head from "next/head";
import { Footer } from "src//components/Footer";
import { Main } from "src//components/Main";
import { Header } from "src/components/Header";

import styles from "src/styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      <Main page="about" />

      <Footer />
    </div>
  );
}
