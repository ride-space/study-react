import { useRouter } from "next/dist/client/router";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import { SWRConfig } from "swr";
import { API_URL } from "src/utills/const";

//動的なページのSSG
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

//SSGを行う際、サーバー側で動くコード
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  // 存在しないデータをURIで指定されたときに404を返す処理
  if (!comment.ok) {
    return {
      notFound: true,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Header />
        <Comment />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
