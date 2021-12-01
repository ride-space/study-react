import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home() {
  const [count,setCount] = useState(1);
  const [text,setText] = useState("");
  const [isShow,setIsShow] = useState(true);

  const HandleClick = useCallback((e) => {
    if(count < 10) {
      setCount(count => count +1);
    }
  },[count]);

  const HandleAdd = useCallback(
    function () {
      setArray((prevArray) => {
        if (prevArray.some((item) => item === text)) {
          alert("同じ要素が存在します。");
        }
        return [...prevArray, text];;
      });
    },
    [text]
  );

  useEffect(() => {
    console.log('マウント時');
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log('アンマウント時');
      document.body.style.borderColor = "";
    };
  },[]);

  const HandleChange = useCallback((e) => {
    if (e.target.value.length > 5 ) {
      alert('5文字以内にしてください')
    }
    setText(e.target.value.trim());
  },[]);

  console.log(text);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}

      <button onClick={HandleClick}>ボタン</button>
      <button onClick={HandleDisplay}>{isShow ? "表示":"非表示"}</button>
      <input type="text" value={text} onChange={HandleChange}/>
      <Main page="index" />
      <Footer />
    </div>
  );
}
