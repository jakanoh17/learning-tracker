import { useRef, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      intervalRef.current && clearInterval(intervalRef.current);
      return;
    }, delay);
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, [value]);

  return value;
}
