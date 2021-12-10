import Head from "next/dist/shared/lib/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
