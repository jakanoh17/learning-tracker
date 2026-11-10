import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TopicType } from '../topics';

export function useUpdateTopics() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateToDo,
    // Optimistically apply the change so the UI updates immediately
    onMutate: async (updatedTopic) => {
      // Stop in-flight refetches from overwriting the optimistic update
      await queryClient.cancelQueries({ queryKey: ['topics'] });

      const previousTopics = queryClient.getQueryData<TopicType[]>(['topics']);

      queryClient.setQueryData<TopicType[]>(['topics'], (old) =>
        old?.map((topic) =>
          topic.id === updatedTopic.id ? updatedTopic : topic,
        ),
      );

      return { previousTopics };
    },
    // Roll back to the snapshot if the save fails
    onError: (_error, _updatedTopic, context) => {
      if (context?.previousTopics) {
        queryClient.setQueryData(['topics'], context.previousTopics);
      }
    },
    // Resync with the server either way
    onSettled: () => {
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
