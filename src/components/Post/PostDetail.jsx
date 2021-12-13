import Head from "next/head";
import { CommentListByPostsId } from "src/components/Comment/CommentListByPostsId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { useRouter } from "next/dist/client/router";
import { API_URL } from "src/utils/const";
import { useFetch } from "src/hooks/useFetch";

export const PostDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data?.userId} />
      <CommentListByPostsId id={data?.id} />
    </div>
  );
};
