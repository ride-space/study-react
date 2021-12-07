import { usePost } from "src/hooks/usePost";
import Head from "next/head";

export const Post = () => {
  const { user, post, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div> Created by {user.name}.</div> : null}
    </div>
  );
};
