import styles from "src/components/Main/Main.module.css";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation \u2192",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn \u2192",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples \u2192",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy \u2192",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);
  const HandleReduce = useCallback(() => {
    setItems((prevItem) => {
      return prevItem.slice(0, prevItem.length - 1);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Headline page={props.page} items={items} HandleReduce={HandleReduce}>
        <code className={styles.code}>{items.length}</code>
      </Headline>
      <Links items={items}/>
    </main>
  );
}
