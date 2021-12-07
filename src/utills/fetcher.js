export const fetcher = async (url) => {
  const respons = await fetch(url);

  if(!respons.ok) {
    throw new Error('エラーが発生したため、データの取得に失敗しました。');
  }
  const json = await respons.json();
  return json;
};
