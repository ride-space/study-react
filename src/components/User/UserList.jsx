import Link from "next/dist/client/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const UserList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/users`);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データはカラです。</div>;
  }

  return (
    <ol>
      {data.map((users) => {
        return (
          <li key={users.id}>
            <Link href={`/users/${users.id}`}>
              <a>{`${users.name} (${users.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
