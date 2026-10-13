import type { TopicType } from '../utils/topics';

export default function returnFilteredTasks(
  tasks: TopicType[],
  searchValue: string,
): TopicType[] {
  if (!searchValue) {
    return tasks;
  }

  return tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      task.notes.toLowerCase().includes(searchValue.toLowerCase()),
  );
}