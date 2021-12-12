import Head from "next/dist/shared/lib/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  //user一覧のfetch
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        USERS_API_URL: usersData,
      },
    },
  };
};

const Users = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Users</title>
      </Head>
      <Header />
      <UsersComponent />
    </SWRConfig>
  );
};

export default Users;
