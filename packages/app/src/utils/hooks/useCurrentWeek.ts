import { useSuspenseQuery } from '@tanstack/react-query';

export function useCurrentWeek() {
  const { data } = useSuspenseQuery({
    queryKey: ['currentWeek'],
    queryFn: getCurrentWeek,
  });
  return { data };
}

async function getCurrentWeek(): Promise<number> {
  const response = await fetch('http://localhost:3000/currentWeek');
  if (!response.ok) throw new Error(`GET /currentWeek failed: ${response.status}`);
  const data: { currentWeek: number } = await response.json();
  return data.currentWeek;
}
