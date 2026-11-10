import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateCurrentWeek() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCurrentWeek,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentWeek'] });
    },
  });
}

function updateCurrentWeek(updatedWeek: number): Promise<{ currentWeek: number }> {
  return fetch(`http://localhost:3000/currentWeek`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentWeek: updatedWeek }),
  }).then((res) => {
    if (!res.ok) throw new Error(`PUT /currentWeek failed: ${res.status}`);
    return res.json();
  });
}
