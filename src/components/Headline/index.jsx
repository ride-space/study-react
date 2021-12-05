import styles from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>
        {props.title}
        {props.page} page
      </h1>

      <p className={styles.description}>アイテムの数は{props.children}です。</p>

      <button onClick={props.HandleReduce}>減らす</button>
    </div>
  );
}
