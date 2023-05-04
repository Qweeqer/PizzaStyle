import { useEffect } from "react";

const useAdjustMarginTop = (ref, selector) => {
  useEffect(() => {
    const elementToAdjust = document.querySelector(selector);
    if (elementToAdjust && ref.current) {
      const elementHeight = elementToAdjust.offsetHeight;
      ref.current.style.marginTop = `calc(${elementHeight}px + 0rem)`;
    }
  }, [ref, selector]);
};

export default useAdjustMarginTop;
