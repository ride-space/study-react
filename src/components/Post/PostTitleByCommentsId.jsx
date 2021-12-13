import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";
import Link from "next/link";

export const PostTitleByCommentsId = (props) => {
  const { data, error, isLoading } = useFetch(
    props.id ? `${API_URL}/posts/${props.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data.id}`}>
      <a>{data.title}</a>
    </Link>
  );
};
