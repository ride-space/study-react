import { useRouter } from "next/dist/client/router";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  //ctxにわたすためのIDを取得するfetch
  const comments = await fetch('https://jsonplaceholder.typicode.com/comments');
  const commentsData = comments.json();
  const paths = commentsData.map((comment) => ({
    params: {id: comment.id.String()},
  }));

  return {
    paths,
    fallback: false,
  };
};

//SSGを行う際、サーバー側で動くコード
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    }
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <SWRConfig value={{fallback}}>
        <Header />
        <Comment />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
