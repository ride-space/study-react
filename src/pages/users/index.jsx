import Head from "next/dist/shared/lib/head";
import { UserList } from "src/components/User/UserList";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  //user一覧のfetch
  const USERS_API_URL = `${API_URL}/users`;
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
      <UserList />
    </SWRConfig>
  );
};

export default Users;
