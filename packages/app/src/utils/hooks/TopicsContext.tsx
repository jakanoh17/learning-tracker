import { createContext, useContext, type ReactNode } from 'react';
import type { TopicType } from '../topics';
import { useTopics } from './useTopics';
import { useCurrentWeek } from './useCurrentWeek';

type TopicsContextType = {
  topics: TopicType[];
  currentWeek: number;
};

const TopicsContext = createContext<TopicsContextType | undefined>(undefined);

export default TopicsContext;

export function TopicsProvider({ children }: { children: ReactNode }) {
  const { data: topics } = useTopics();
  const { data: currentWeek } = useCurrentWeek();

  return (
    <TopicsContext value={{ topics, currentWeek }}>{children}</TopicsContext>
  );
}

export const useTopicsContext = () => {
  const context = useContext(TopicsContext);
  if (!context) {
    throw new Error('useTopicsContext must be used within a TopicsProvider');
  }
  return context;
};
