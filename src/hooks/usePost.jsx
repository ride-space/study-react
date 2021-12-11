import { useRouter } from "next/dist/client/router";
import { fetcher } from "src/utills/fetcher";
import useSWR from "swr";

export const usePost = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
