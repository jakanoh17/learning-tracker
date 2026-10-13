import { MDBListGroup } from 'mdb-react-ui-kit';
import TaskItem from './TaskItem/TaskItem';
import { TopicType } from '../utils/topics';

export default function TaskList({tasks}: {tasks: TopicType[]}) {
  return (
    <MDBListGroup className="mb-0">
      {tasks.map((task) => (
        <TaskItem key={task.id}>{task.title}</TaskItem>
      ))}
    </MDBListGroup>
  );
}
