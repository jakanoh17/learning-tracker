import { MDBListGroup } from 'mdb-react-ui-kit';
import TopicCard from '../TopicCard/TopicCard';
import { TopicType } from '../../utils/topics';

export default function TaskList({ tasks }: { tasks: TopicType[] }) {
  return (
    <MDBListGroup className="mb-0">
      {tasks.map((task) => (
        <TopicCard key={task.id} topic={task}>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <TopicCard.Header />
            <TopicCard.Status />
          </div>
          <TopicCard.Notes />
        </TopicCard>
      ))}
    </MDBListGroup>
  );
}
