import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home() {
  const [count,setCount] = useState(1);

  const HandleClick = useCallback((e) => {
    console.log(count);

    if(count <= 10) {
      setCount(count => count +1);
    }
  },[count]);

  useEffect(() => {
    console.log('マウント時');
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log('アンマウント時');
      document.body.style.borderColor = "";
    };
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={HandleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
