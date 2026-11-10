import type { TopicType } from './topics';

// At this point this is just here as an example
const TopicsReducer = (topicsState: TopicType[], action: any) => {
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
    default:
      console.log(`Unknown action type: ${action.type}`);
      return topicsState;
  }
};
