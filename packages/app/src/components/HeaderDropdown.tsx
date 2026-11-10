import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import { WEEKS } from '../utils/constants';
import { useTopicsContext } from '../utils/hooks/TopicsContext';
import { useUpdateCurrentWeek } from '../utils/hooks/useUpdateCurrentWeek';

export default function HeaderDropdown() {
  const { currentWeek } = useTopicsContext();
  const { mutate: updateWeek } = useUpdateCurrentWeek();

  const handleWeekChange = (week: number) => {
    updateWeek(week);
  };
  
  return (
    <MDBDropdown group className="shadow-0">
      <MDBDropdownToggle color="link">Week {currentWeek}</MDBDropdownToggle>
      <MDBDropdownMenu>
        {WEEKS.map((week) => (
          <MDBDropdownItem
            key={week}
            link
            onClick={() => handleWeekChange(week)}
          >
            Week {week}
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
