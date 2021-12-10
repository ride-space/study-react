import { useRouter } from "next/dist/client/router";
import { fetcher } from "src/utills/fetcher";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${router.query.id}`,
    fetcher
  );

  return { data, error, isLoading: !error && !data };
};
