import { createContext, useContext, type ReactNode } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import TaskItem from '../TaskList/TaskItem/TaskItem';
import { Status, type StatusType, type TopicType } from '../../utils/topics';
import { useUpdateTopics } from '../../utils/hooks/useUpdateTopics';

type TopicCardContextType = {
  topic: TopicType;
  setStatus: (status: StatusType) => void;
};

const TopicCardContext = createContext<TopicCardContextType | undefined>(
  undefined,
);

const useTopicCardContext = () => {
  const context = useContext(TopicCardContext);
  if (!context) {
    throw new Error('TopicCard.* components must be used within a TopicCard');
  }
  return context;
};

function TopicCard({
  topic,
  children,
}: {
  topic: TopicType;
  children: ReactNode;
}) {
  const updateMutation = useUpdateTopics();

  const setStatus = (status: StatusType) => {
    updateMutation.mutate({ ...topic, status });
  };

  return (
    <TopicCardContext value={{ topic, setStatus }}>
      <TaskItem>{children}</TaskItem>
    </TopicCardContext>
  );
}

function Header() {
  const { topic } = useTopicCardContext();
  return <div className="fw-bold">{topic.title}</div>;
}

const statusIcons = [
  {
    status: Status.Todo,
    icon: 'circle',
    far: true,
    activeClass: 'text-primary',
  },
  {
    status: Status.InProgress,
    icon: 'adjust',
    fas: true,
    activeClass: 'text-warning',
  },
  {
    status: Status.Done,
    icon: 'check-circle',
    fas: true,
    activeClass: 'text-success',
  },
] as const;

function StatusIcons() {
  const { topic, setStatus } = useTopicCardContext();

  return (
    <div className="progress-icons d-flex gap-1">
      {statusIcons.map(({ status, activeClass, ...iconProps }) => (
        <MDBIcon
          key={status}
          {...iconProps}
          className={topic.status === status ? activeClass : ''}
          type="button"
          onClick={() => setStatus(status)}
        />
      ))}
    </div>
  );
}

function Notes() {
  const { topic } = useTopicCardContext();
  return <div className="text-muted text-xs">{topic.notes}</div>;
}

TopicCard.Header = Header;
TopicCard.Status = StatusIcons;
TopicCard.Notes = Notes;

export default TopicCard;
