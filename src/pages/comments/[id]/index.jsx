import { useRouter } from "next/dist/client/router";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
const CommentsId = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Header />
      <Comment />
    </div>
  );
};

export default CommentsId;
