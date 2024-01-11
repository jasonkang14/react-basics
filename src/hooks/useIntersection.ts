import { useEffect, useRef, useState } from "react";

const useIntersection = (targetRef, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      setIsIntersecting(entry.isIntersecting);
    });
  };

  const observer = useRef(
    new IntersectionObserver(intersectionCallback, options)
  );

  useEffect(() => {
    const target = targetRef.current;

    if (target) {
      observer.current.observe(target);

      return () => {
        observer.current.disconnect();
      };
    }
  }, [targetRef, options]);

  return isIntersecting;
};

export default useIntersection;
