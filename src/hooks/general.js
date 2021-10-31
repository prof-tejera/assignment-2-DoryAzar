import { useEffect, useRef, useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  return [value, () => setValue(!value)];
};

export const useListener = (event, handler) => {
  useEffect(() => {
    window.addEventListener(event, handler);
    return () => window.removeEventListener(event, handler);
  }, [event, handler]);
};

export const useInterval  = (callback, delay) => {
  const interval = useRef();
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (!delay) {
      return () => {};
    }

    interval.current = setInterval(() => { 
      savedCallback.current && savedCallback.current();
    }, delay);
    return () => clearInterval(interval.current);
  }, [delay]);

  return interval.current;
}
