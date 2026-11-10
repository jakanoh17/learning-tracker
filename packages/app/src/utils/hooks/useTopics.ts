import { useSuspenseQuery } from '@tanstack/react-query';
import { TopicType } from '../topics';

// Demo-only: lets the UI force the next topics fetch to fail
class SimulatedFetchError extends Error {}
let simulateNextError = false;

export function simulateTopicsFetchError() {
  simulateNextError = true;
}

export function useTopics() {
  const { data } = useSuspenseQuery({
    queryKey: ['topics'],
    queryFn: getTopics,
    // Skip retries for the simulated error so the boundary shows right away
    retry: (failureCount, error) =>
      !(error instanceof SimulatedFetchError) && failureCount < 3,
  });
  return { data };
}

async function getTopics(): Promise<TopicType[]> {
  if (simulateNextError) {
    simulateNextError = false;
    throw new SimulatedFetchError('GET /topics failed: simulated error');
  }
  const response = await fetch('http://localhost:3000/topics');
  if (!response.ok) throw new Error(`GET /topics failed: ${response.status}`);
  const data = await response.json();
  return data;
}
