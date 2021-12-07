import { useRouter } from "next/dist/client/router";
import {useEffect, useMemo} from "react";

export const useBgColor = () => {
  const router = useRouter();
  const BgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue":"beige";
  },[router.pathname]);

  useEffect(() => {
    // console.log("マウント時");
    document.body.style.backgroundColor = BgColor;
    return () => {
      // console.log("アンマウント時");
      document.body.style.borderColor = "";
    };
  }, [BgColor]);
};
