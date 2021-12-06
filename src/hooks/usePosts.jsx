import useSWR from 'swr'

const fatcher = async (url) => {
  const respons = await fetch(url);

  if(!respons.ok) {
    throw new Error('エラーが発生したため、データの取得に失敗しました。');
  }
  const json = await respons.json();
  return json;
};

export const usePosts = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts',fatcher)
  return {
    data,
    error,
    isLoading:!error && !data,
    isEmpty:data && data.length === 0,
  }
};
