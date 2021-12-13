import { PostTitleByCommentsId } from "src/components/Post/PostTitleByCommentsId";
import { useRouter } from "next/dist/client/router";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const CommentDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(`${API_URL}/comments/${router.query.id}`);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.body}</p>
      <h2>元の記事</h2>
      <PostTitleByCommentsId id={data.postId} />
    </div>
  );
};
