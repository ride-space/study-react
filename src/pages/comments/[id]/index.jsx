import { useRouter } from "next/dist/client/router";
import { CommentDetail } from "src/components/Comment/CommentDetail";
import { SWRConfig } from "swr";
import { API_URL } from "src/utils/const";

//動的なページのSSG
// SSGのページで動的なページを作成するのに必要な値(id)などを取得してgetStaticPropsに渡す

// getStaticPathsのfallbackで挙動を変化させる
// fallback: false -> build時に生成されていないページは404を返す。
// fallback: true -> build時に生成されていないページはユーザが訪れた時に始めて生成されるそれ以降は使いまわし
// fallback: "blocking" -> build時に生成されていないページはSSRのように事前にbuildして表示(ユーザの画面にこのページに遷移できるリンクが表示されたとき)
// blockingでユーザの画面に入ったときにbuildされてリクエスト回数が多くいやな場合はこのページのリンク(このアプリでは,CommentList component)で
// prefetch={false}を指定する(この場合リンクにホバーされたタイミングでbuildで生成されるのでレンダリングは抑えられる)
export const getStaticPaths = async () => {
  //ctxにわたすためのIDをすべて取得するfetch
  const comments = await fetch(`${API_URL}/comments?_limit=10`);// ?_limit=10でSSG処理を10件に指定
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },//getStaticPathsで渡すようのidは、文字列.toStringをつける。
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

//SSGを行う際、build時に動くコード
// build時のみデータを取得して静的ページを作成する
// 一度build時に生成してあるページを表示するだけなので、フェッチ回数を抑えられる
// SSRのようにmeta的にもデータが認識されるのでSSRとSSGどちらでもいい場合のみSSGを基本的に使用したほうがいい
// ページの生成はbuild時にしかされないのでデータの更新はbuildされるまで反映されない
// リアルタイムで値が変更される要件の場合はあまり向いていない
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  // 存在しないデータをURIで指定されたときに404を返す処理
  // getStaticPathsでfallback trueかblockingの場合にデータがないページでも表示しようとするので
  // データがないページが404ページを表示するように変更
  if (!comment.ok) {
    return {
      notFound: true,
      // ISR下記とともに追記
      revalidate: 60,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },

    // ISR <-SSGでは更新をbuildされるまで反映されない
    // ISRでは下記で数字(秒)を指定して指定した時間が過ぎた初めてのリクエスト時に再度buildするようにできる
    // 上記によって更新も反映できる
    revalidate: 60,
  };
};



const CommentsId = (props) => {
  const { fallback } = props;
  const router = useRouter();


  // getStaticPathsでfallbackがtrueのときbuild中に表示するコンポーネント(loadingなど)を下記で表示できる
  // if(router.isFallback) {
  //   return <div>Loading</div>
  // }

  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <CommentDetail />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
