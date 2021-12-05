import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCounter = useMemo(() => {
    return count * 2;
  })

  const HandleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const HandleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, doubleCounter, isShow, HandleClick, HandleDisplay };
};
