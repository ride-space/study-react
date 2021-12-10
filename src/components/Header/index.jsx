import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" }, //userのname一覧を表示//
  { href: "/comments", label: "Comments" }, //commentsのbody一覧を表示
  //余裕があれば一覧の子ページも！！
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className={styles.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
