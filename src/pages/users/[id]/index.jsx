import { Header } from "src/components/Header";
import { User } from "src/components/User";
import { SWRConfig } from "swr";

//SSRを行う際、サーバー側で動くコード
export const getServerSideProps = async (ctx) => {
  //user一覧のfetch
  const { id } = ctx.query;
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();
  //userの投稿一覧のfetch
  const { id: postId } = ctx.query;
  const POST_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${postId}`;
  const post = await fetch(POST_API_URL);
  const postData = await post.json();

  return {
    props: {
      fallback: {
        USER_API_URL: userData,
        POST_API_URL: postData,
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
