import { MDBIcon, MDBListGroup } from 'mdb-react-ui-kit';
import TaskItem from './TaskItem/TaskItem';
import { TopicType } from '../../utils/topics';
import { useUpdateTopics } from '../../utils/hooks/useUpdateTopics';

export default function TaskList({ tasks }: { tasks: TopicType[] }) {
  const updateMutation = useUpdateTopics();

  return (
    <MDBListGroup className="mb-0">
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="fw-bold">{task.title}</div>
            <div className="progress-icons d-flex gap-1">
              <MDBIcon
                far
                className={`${task.status === 'TODO' ? 'text-primary' : ''}`}
                type="button"
                icon="circle"
                onClick={() => {
                  updateMutation.mutate({ ...task, status: 'TODO' });
                }}
              />
              <MDBIcon
                fas
                className={task.status === 'INPROGRESS' ? 'text-warning' : ''}
                type="button"
                icon="adjust"
                onClick={() => {
                  updateMutation.mutate({ ...task, status: 'INPROGRESS' });
                }}
              />
              <MDBIcon
                fas
                className={task.status === 'DONE' ? 'text-success' : ''}
                type="button"
                icon="check-circle"
                onClick={() => {
                  updateMutation.mutate({ ...task, status: 'DONE' });
                }}
              />
            </div>
          </div>
          <div className="text-muted text-xs">{task.notes}</div>
        </TaskItem>
      ))}
    </MDBListGroup>
  );
}
