import { useEffect } from 'react';
export const useMount = function (callback: () => void) {
  useEffect(() => {
    callback();
  }, []);
};
