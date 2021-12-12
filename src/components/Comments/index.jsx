import { useComments } from "src/hooks/useFetchArray";
import Link from "next/dist/client/link";



export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
