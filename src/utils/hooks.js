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


export const useInterval = (callback, delay) => {
  const interval = useRef();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    interval.current = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(interval.current);
  }, [delay]);

  return interval.current;
};