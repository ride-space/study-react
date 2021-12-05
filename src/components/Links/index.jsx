import styles from "src/components/Links/Links.module.css";

export function Links({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </a>
        );
      })}
      ;
    </div>
  );
}
