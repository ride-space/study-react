import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useFetch = (url) => {
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
