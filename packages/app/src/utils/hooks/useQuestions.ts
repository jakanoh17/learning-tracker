import { useSuspenseQuery } from '@tanstack/react-query';
import type { QuestionType } from '../questions';

export function useQuestions(week: number) {
  const { data } = useSuspenseQuery({
    queryKey: ['questions', week],
    queryFn: () => getQuestions(week),
  });
  return { data };
}

async function getQuestions(week: number): Promise<QuestionType[]> {
  const response = await fetch(`http://localhost:3000/questions?week=${week}`);
  if (!response.ok)
    throw new Error(`GET /questions?week=${week} failed: ${response.status}`);
  const data = await response.json();
  return data;
}
