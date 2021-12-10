import Head from "next/dist/shared/lib/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
