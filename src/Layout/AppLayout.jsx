import classes from "src/Layout/Layout.module.css";
import { Header } from "src/Layout/Header";

export const AppLayout = (props) => {
  return (
  <div className={classes.container }>
    <Header />
    {props.children}
  </div>
  );
};
