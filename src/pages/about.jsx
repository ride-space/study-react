import Head from "next/head";
import { Footer } from "src//components/Footer";
import { Main } from "src//components/Main";
import { Header } from "src/components/Header";


import styles from "src/styles/Home.module.css";

export default function About(props) {
  const { count,doubleCounter, isShow, HandleClick, HandleDisplay, text, array, HandleChange, HandleAdd } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{doubleCounter}</h1> : null}
      <button onClick={HandleClick}>ボタン</button>
      <button onClick={HandleDisplay}>{isShow ? "表示" : "非表示"}</button>

      <input type="text" value={text} onChange={HandleChange} />
      <button onClick={HandleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>


      <Main page="about" />

      <Footer />
    </div>
  );
}
