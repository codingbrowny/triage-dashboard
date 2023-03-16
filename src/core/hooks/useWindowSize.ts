import { useEffect, useState } from "react";

interface windowSizeInterface {
  width: number;
  height: number;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSizeInterface>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });

    function handleWindowResize() {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
};
