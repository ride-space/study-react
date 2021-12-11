import Link from "next/link";
import { useCommentsByPostsId } from "src/hooks/useFetchArray";


export const CommentsByPostsId = (props) => {
  const {
    data,
    error,
    isLoading,
    isEmpty,
  } = useCommentsByPostsId(props.id);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データはカラです</div>;
  }

  return (
    <ol>
      {data.map((comments) => {
        return (
          <li key={comments.id}>
            <Link href={`/comments/${comments.id}`}>
              <a>{comments.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
