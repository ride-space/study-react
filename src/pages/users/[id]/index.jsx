import { Header } from "src/components/Header";
import { User } from "src/components/User";
import { SWRConfig } from "swr";

const sleep = (ms) => {new Promise((resolve) => setTimeout(resolve,ms))};

//SSRを行う際、サーバー側で動くコード
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const userData = await user.json();

  return {
    props: {
      fallback: {
        API_URL: userData,
      },
    },
  };
};

const UsersId = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <User />
    </SWRConfig>
  );
};

export default UsersId;
