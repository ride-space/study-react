import { useRouter } from "next/dist/client/router";
import { API_URL } from "src/utills/const";
import { fetcher } from "src/utills/fetcher";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `${API_URL}/comments/${router.query.id}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
