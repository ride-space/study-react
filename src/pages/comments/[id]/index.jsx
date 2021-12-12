import { useRouter } from "next/dist/client/router";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import { SWRConfig } from "swr";

//SSGを行う際、サーバー側で動くコード
export const getStaticProps = async (ctx) => {
  const { id } = ctx.query;
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        COMMENTS_API_URL: commentsData,
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
