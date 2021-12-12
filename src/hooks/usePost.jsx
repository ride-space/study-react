import { useRouter } from "next/dist/client/router";
import { API_URL } from "src/utills/const";
import { fetcher } from "src/utills/fetcher";
import useSWR from "swr";

export const usePost = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `${API_URL}/posts/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
