import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const HandleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const HandleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return prevArray;
    }
    setText(e.target.value.trim());
  }, []);

  const HandleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

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
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.borderColor = "";
    };
  }, []);

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
