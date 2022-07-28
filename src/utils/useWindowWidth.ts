import { useEffect, useState } from 'react';

/**
 * Because `window` is unreachable, we hook to window after `app` has loaded
 * @returns width of window
 */
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    function handleWindowResized() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResized);
    handleWindowResized();

    return () => {
      window.removeEventListener('resize', handleWindowResized);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
