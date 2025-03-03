import { RefObject, useEffect, useState } from "react";

export const useAnimationHook = (
  ms: number,
  ref: RefObject<HTMLDivElement>,
) => {
  const [animationClassName, setAnimationClassName] = useState(
    "translate-y-10 opacity-0",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(
            () => setAnimationClassName("translate-y-0 opacity-100"),
            ms,
          );
        } else {
          setTimeout(
            () => setAnimationClassName("translate-y-10 opacity-0"),
            0,
          );
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ms, ref]);

  return { animationClassName };
};
