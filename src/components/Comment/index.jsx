import { useComment } from "src/hooks/useComment";
import { usePostByComments } from "src/hooks/useFetchArray";

export const Comment = () => {
  const { data, error, isLoading } = useComment();
  const { data: postData, error: postDataError, isLoading: isPostData, isEmpty} = usePostByComments(data?.postId);

  if (isPostData) {
    return <div>ローディング中です。</div>;
  }
  if (postDataError) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データはカラです</div>;
  }

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
      <h2>投稿内容</h2>
      <h3>{postData.title}</h3>
      <p>{postData.body}</p>
    </div>
  );
}
