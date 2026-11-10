import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import FlipCard from './FlipCard';
import { useQuestions } from '../../utils/hooks/useQuestions';
import { useTopicsContext } from '../../utils/hooks/TopicsContext';

export default function Flashcards() {
  const { currentWeek } = useTopicsContext();
  const { data: questions } = useQuestions(currentWeek);

  if (questions.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        No questions for week {currentWeek} yet.
      </div>
    );
  }

  return (
    <>
      <div className="text-center text-muted text-xs mb-3">
        Click a card to flip it
      </div>
      <MDBRow className="g-3">
        {questions.map((question) => (
          <MDBCol md="6" key={question.id}>
            <FlipCard question={question} />
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
}
