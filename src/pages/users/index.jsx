import Head from "next/dist/shared/lib/head";
import { UserList } from "src/components/User/UserList";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";


// SSR(サーバーサイドレンダリング)
// サーバー側でリクエストを行い事前にデータを取得する
// CSRなどでクライアントフェッチではデータが後から呼ばれるためブラウザのmeta dataとしては値が認識されていない
// SSRは裏でフェッチが行われた後に表示するため、フラウザがデータをmeta的にも認識できる
// クライアントがこのページに来た時に毎回サーバー側でフェッチする
// データの読み込みが終わってから画面遷移するのでユーザビリティ的にはあまり良くなくなることもある
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

// SWRConfigでssgの値をプロップスで渡さなくても扱えるようにしている
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
