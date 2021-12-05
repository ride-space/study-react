import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const HandleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
    }
    setText(e.target.value.trim());
  }, []);

  const HandleAdd = useCallback(
    function () {
      setArray((prevArray) => {
        if (prevArray.some((item) => item === text)) {
          alert("同じ要素が存在します。");
        }
        return [...prevArray, text];
      });
    },
    [text]
  );

  return { text, array, HandleChange, HandleAdd };
};
