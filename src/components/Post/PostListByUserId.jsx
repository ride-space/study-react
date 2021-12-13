import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const PostListByUserId = (props) => {
  const { data: userPost, error: userPostError, isLoading: isUserPostLoading, isEmpty} = useFetchArray(props.id ? `${API_URL}/users/${props.id}/posts` : null);

  if (isUserPostLoading) {
    return <div>ローディング中です。</div>;
  }

  if (userPostError) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>投稿はありません</div>;
  }

  return (
    <ul>
    {userPost.map(post => {
      return (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
          <a>
          <h3>{post.title}</h3>
          <p>{post.body}</p>

          </a>
          </Link>
        </li>
      );
    })}
  </ul>
  );
}
