import { useRouter } from "next/dist/client/router";
import { API_URL } from "src/utills/const";
import { fetcher } from "src/utills/fetcher";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `${API_URL}/users/${router.query.id}`,
    fetcher
  );

  return { data, error, isLoading: !error && !data };
};
