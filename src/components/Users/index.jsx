import { useUsers } from "src/hooks/useFetchArray";
import Link from "next/dist/client/link";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
