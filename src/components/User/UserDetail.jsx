import { PostListByUserId } from "src/components/Post/PostListByUserId";
import { useRouter } from "next/dist/client/router";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(`${API_URL}/users/${router.query.id}`);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>詳細</h2>
      <ul>
        <li>{data.email}</li>
        <li>{data.username}</li>
        <li>{data.address.city}</li>
        <li>{data.phone}</li>
        <li>{data.website}</li>
        <li>{data.company.name}</li>
      </ul>
      <h2>投稿</h2>
      <PostListByUserId id={data.id} />
    </div>
  );
};
