import React from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useLightBlue } from "src/hooks/useLightBlue";

export default function Home() {
  const { count, isShow, HandleClick, HandleDisplay } = useCounter();
  const { text, array, HandleChange, HandleAdd } = useInputArray();
  useLightBlue();


  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={HandleClick}>ボタン</button>
      <button onClick={HandleDisplay}>{isShow ? "表示" : "非表示"}</button>

      <input type="text" value={text} onChange={HandleChange} />
      <button onClick={HandleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />
      <Footer />
    </div>
  );
}
