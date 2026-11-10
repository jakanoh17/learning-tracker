import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TopicType } from '../topics';

export function useUpdateTopics() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateToDo,
    onSuccess: (savedTopic, updatedTopic) => {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
    },
  });
}

function updateToDo(updatedTopic: TopicType): Promise<TopicType> {
  return fetch(`http://localhost:3000/topics/${updatedTopic.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTopic),
  }).then((res) => {
    if (!res.ok)
      throw new Error(`PUT /topics/${updatedTopic.id} failed: ${res.status}`);
    return res.json();
  });
}
