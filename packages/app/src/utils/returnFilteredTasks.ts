import type { TopicType } from '../utils/topics';

export default function returnFilteredTasks(
  tasks: TopicType[],
  searchValue: string,
): TopicType[] {
  if (!tasks || !Array.isArray(tasks)) {
    console.error('Invalid tasks array:', tasks);
    return [];
  }

  if (!searchValue) {
    return tasks;
  }

  return tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      task.notes.toLowerCase().includes(searchValue.toLowerCase()),
  );
}
