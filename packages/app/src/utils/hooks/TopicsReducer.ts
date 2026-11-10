import type { StatusType, TopicType } from '../topics';

type TopicsAction =
  | { type: 'SET_STATUS'; payload: { id: string; status: StatusType } }
  | { type: 'SET_NOTES'; payload: { id: string; notes: string } };

// At this point this is just here as an example
const TopicsReducer = (
  topicsState: TopicType[],
  action: TopicsAction,
): TopicType[] => {
  switch (action.type) {
    case 'SET_STATUS':
      return topicsState.map((topic) =>
        topic.id === action.payload.id
          ? { ...topic, status: action.payload.status }
          : topic,
      );
    case 'SET_NOTES':
      return topicsState.map((topic) =>
        topic.id === action.payload.id
          ? { ...topic, notes: action.payload.notes }
          : topic,
      );
  }
};

export default TopicsReducer;
