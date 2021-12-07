// import React, { useCallback, useEffect, useReducer } from "react";
import { usePosts } from "src/hooks/usePosts";
import Link from 'next/link'

// const initialState = {
//   data: [],
//   loading: true,
//   error: null,
// }

// const reducer = (state, action ) => {
//   switch (action.type) {
//     case "end": {
//       return {
//         ...state,
//         data: action.data,
//         loading: false,
//       }
//     }
//     case "error": {
//       return {
//         ...state,
//         loading: false,
//         error: action.error,
//       }
//     }
//     default:
//       throw new Error("no such action type!");
//   }
// }

export const Posts = () => {
  const {data, error, isLoading, isEmpty} = usePosts();

  // const [state, dispatch] = useReducer(reducer, initialState);

  // const getPosts = useCallback(async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     if (!res.ok) {
  //       throw new Error("エラーが発生しました。データの称徳に失敗しました。");
  //     }
  //     const json = await res.json();
  //     dispatch({type: "end", data: json});
  //   } catch (error) {
  //     dispatch({type: "error", error});
  //   }
  // }, []);

  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  if (isLoading/* state.loading */) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データはカラです</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
            </Link>
            </li>
          );
      })}
    </ol>
  );
};
