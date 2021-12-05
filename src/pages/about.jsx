import Head from "next/head";
import { Footer } from "src//components/Footer";
import { Main } from "src//components/Main";
import { Header } from "src/components/Header";


import styles from "src/styles/Home.module.css";

const About = (props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      {props.isShow ? <h1>{props.doubleCounter}</h1> : null}
      <button onClick={props.HandleClick}>ボタン</button>
      <button onClick={props.HandleDisplay}>{props.isShow ? "表示" : "非表示"}</button>

      <input type="text" value={props.text} onChange={props.HandleChange} />
      <button onClick={props.HandleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>


      <Main page="about" />

      <Footer />
    </div>
  );
}

export default About;

