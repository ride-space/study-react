import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { useCommentsByPostsId } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";


export const CommentListByPostsId = (props) => {
  const {
    data,
    error,
    isLoading,
    isEmpty,
  } = useFetchArray(props.id ?`${API_URL}/posts/${props.id}/comments`: null);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>コメントはありません。</div>;
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
