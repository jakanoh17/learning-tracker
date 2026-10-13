import { MDBListGroup } from 'mdb-react-ui-kit';
import TaskItem from './TaskItem/TaskItem';
import { TopicType } from '../utils/topics';

export default function TaskList({ tasks }: { tasks: TopicType[] }) {
  return (
    <MDBListGroup className="mb-0">
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          <div className="fw-bold">{task.title}</div>
          <div className="text-muted text-xs">{task.notes}</div>
        </TaskItem>
      ))}
    </MDBListGroup>
  );
}
