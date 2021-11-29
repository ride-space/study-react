import Link from "next/link";
import styles from "src/components/Header/Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <Link  href="/">
      <a className={styles.anchor}>index</a>
      </Link>
      <Link href="/about">
      <a className={styles.anchor}>about</a>
      </Link>
    </header>
  );
}

