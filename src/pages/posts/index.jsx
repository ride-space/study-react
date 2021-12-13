import React from "react";
import Head from "next/head";
import { PostList } from "src/components/Post/PostList";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <PostList />
    </div>
  );
};

export default Posts;
