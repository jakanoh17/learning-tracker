import { MDBBtn } from 'mdb-react-ui-kit';
import { useQueryClient } from '@tanstack/react-query';
import { simulateTopicsFetchError } from '../utils/hooks/useTopics';

// Demo-only: clears cached topics and makes the refetch fail,
// so the error boundary's "Try again" flow can be shown
export default function SimulateErrorButton() {
  const queryClient = useQueryClient();

  const handleClick = () => {
    simulateTopicsFetchError();
    queryClient.resetQueries({ queryKey: ['topics'] });
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <MDBBtn size="sm" color="danger" outline onClick={handleClick}>
        Simulate fetch error
      </MDBBtn>
    </div>
  );
}
