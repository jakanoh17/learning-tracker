import {
  MDBProgress,
  MDBProgressBar,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import { WEEKS } from '../../utils/constants';
import { Status } from '../../utils/topics';
import { useTopicsContext } from '../../utils/hooks/TopicsContext';

export default function Stats() {
  const { topics, currentWeek } = useTopicsContext();

  const weeklyStats = WEEKS.map((week) => {
    const weekTopics = topics.filter((t) => t.week === week);
    const done = weekTopics.filter((t) => t.status === Status.Done).length;
    const total = weekTopics.length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    return { week, done, total, percent };
  });

  return (
    <MDBTable align="middle" borderless>
      <MDBTableHead>
        <tr>
          <th scope="col">Week</th>
          <th scope="col">Done</th>
          <th scope="col" className="w-50">
            Progress
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {weeklyStats.map(({ week, done, total, percent }) => (
          <tr key={week} className={week === currentWeek ? 'fw-bold' : ''}>
            <td>Week {week}</td>
            <td>
              {total === 0 ? (
                <span className="text-muted">No topics</span>
              ) : (
                `${done} / ${total}`
              )}
            </td>
            <td>
              <div className="d-flex align-items-center gap-2">
                <MDBProgress height="8" className="flex-grow-1 rounded">
                  <MDBProgressBar
                    bgColor={percent === 100 ? 'success' : 'primary'}
                    width={percent}
                    valuemin={0}
                    valuemax={100}
                  />
                </MDBProgress>
                <span className="text-xs">{percent}%</span>
              </div>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
