export const Status = {
  Todo: 'TODO',
  InProgress: 'INPROGRESS',
  Done: 'DONE',
} as const;

type StatusType = (typeof Status)[keyof typeof Status];
export type TopicType = {
  id: string;
  title: string;
  week: number;
  status: StatusType;
  notes: string;
};

