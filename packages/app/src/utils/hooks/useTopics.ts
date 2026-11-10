import { useSuspenseQuery } from '@tanstack/react-query';
import { TopicType } from '../topics';

export function useTopics() {
  const { data } = useSuspenseQuery({
    queryKey: ['topics'],
    queryFn: getTopics,
  });
  return { data };
}

async function getTopics(): Promise<TopicType[]> {
  const response = await fetch('http://localhost:3000/topics');
  const data = await response.json();
  return data;
}
