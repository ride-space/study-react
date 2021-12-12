import Head from "next/dist/shared/lib/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";
import { SWRConfig } from "swr";
import { API_URL } from "src/utills/const";


export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
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

const Comments = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Comments</title>
      </Head>
      <SWRConfig value={{fallback}}>

      <Header />
      <CommentsComponent />
      </SWRConfig>

    </div>
  );
};

export default Comments;
