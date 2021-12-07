import Head from "next/head";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";

const Index = (props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Nextjsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを色々叩いているよ！</p>
    </div>
  );
}

export default Index;

