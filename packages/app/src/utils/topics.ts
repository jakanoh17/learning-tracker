export const Status = {
  Todo: 'TODO',
  InProgress: 'INPROGRESS',
  Done: 'DONE',
} as const;

type StatusType = (typeof Status)[keyof typeof Status];
export type TopicType = {
  id: number | string;
  title: string;
  week: number | Date | string;
  status: StatusType;
  notes: string;
};

