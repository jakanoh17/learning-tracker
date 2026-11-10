import { createContext, useContext, type ReactNode } from 'react';
import type { TopicType } from '../topics';
import { useTopics } from './useTopics';

type TopicsContextType = {
  topics: TopicType[];
};

const TopicsContext = createContext<TopicsContextType | undefined>(undefined);

export default TopicsContext;

export function TopicsProvider({ children }: { children: ReactNode }) {
  const { data: topics } = useTopics();

  return <TopicsContext value={{ topics }}>{children}</TopicsContext>;
}

export const useTopicsContext = () => {
  const context = useContext(TopicsContext);
  if (!context) {
    throw new Error('useTopicsContext must be used within a TopicsProvider');
  }
  return context;
};
