import Link from "next/dist/client/link";
import { API_URL } from "src/utils/const";
import { useFetchArray } from "src/hooks/useFetchArray";



export const CommentList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/comments`);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    <div>データはカラです。</div>;
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
