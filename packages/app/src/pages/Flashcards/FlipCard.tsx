import { useState } from 'react';
import type { QuestionType } from '../../utils/questions';

export default function FlipCard({ question }: { question: QuestionType }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${question.question} ${flipped ? 'Showing answer' : 'Click to show answer'}`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-face" aria-hidden={flipped}>
          <div className="flip-card-label text-primary">Question</div>
          <div className="fw-bold">{question.question}</div>
        </div>
        <div className="flip-card-face flip-card-back" aria-hidden={!flipped}>
          <div className="flip-card-label text-success">Answer</div>
          <div>{question.answer}</div>
        </div>
      </div>
    </button>
  );
}
