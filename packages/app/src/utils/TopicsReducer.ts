const TopicsReducer = (topicsState: any, action: any) => {
  switch (action.type) {
    case 'SET_STATUS':
      return topicsState.map((topic: any) =>
        topic.id === action.payload.id
          ? { ...topic, status: action.payload.status }
          : topic,
      );
    case 'SET_NOTES':
      return topicsState.map((topic: any) =>
        topic.id === action.payload.id
          ? { ...topic, notes: action.payload.notes }
          : topic,
      );
    default:
      console.log(`Unknown action type: ${action.type}`);
      return topicsState;
  }
};
