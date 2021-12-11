import Head from "next/head";
import { CommentsByPostsId } from "src/components/Comments/CommentsByPostsId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { fetcher } from "src/utills/fetcher";

export const Post = () => {
  const router = useRouter();
  const { data, error} = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  if (!data) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(data.userId);

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data?.userId}/>
      <CommentsByPostsId id={data?.id} />
    </div>
  );
};
