import React from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const Home = (props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.HandleClick}>ボタン</button>
      <button onClick={props.HandleDisplay}>{props.isShow ? "表示" : "非表示"}</button>

      <input type="text" value={props.text} onChange={props.HandleChange} />
      <button onClick={props.HandleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />
      <Footer />
    </div>
  );
}

export default Home;
