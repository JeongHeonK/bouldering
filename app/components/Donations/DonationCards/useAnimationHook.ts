import { useEffect, useState } from "react";

export const useAnimationHook = (ms: number) => {
  const [animationClassName, setAnimationClassName] = useState(
    "translate-y-10 opacity-0",
  );

  useEffect(() => {
    setTimeout(() => setAnimationClassName("translate-y-0 opacity-100"), ms);
  }, [ms]);

  return { animationClassName };
};
