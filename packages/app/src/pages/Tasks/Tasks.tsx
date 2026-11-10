import { MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Status, type TopicType } from '../../utils/topics';
import TaskList from '../../components/TaskList/TaskList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Tabs from '../../components/Tabs';
import SimulateErrorButton from '../../components/SimulateErrorButton';
import { useDebounce } from '../../components/SearchBox/useDebounce';
import returnFilteredTasks from '../../utils/returnFilteredTasks';
import {
  ActiveTab,
  type ActiveTabType,
  useTabFilterContext,
} from '../../utils/hooks/TabFilterContext';
import { useTopicsContext } from '../../utils/hooks/TopicsContext';

// Which topics each tab shows
const tabFilters: Record<
  ActiveTabType,
  (topic: TopicType, currentWeek: number) => boolean
> = {
  [ActiveTab.tab1]: (t, week) => t.status === Status.Todo && t.week === week,
  [ActiveTab.tab2]: (t, week) =>
    t.status === Status.InProgress && t.week === week,
  [ActiveTab.tab3]: (t, week) => t.status === Status.Done && t.week === week,
  [ActiveTab.tab4]: (t) => t.status === Status.Done,
};

export default function Tasks() {
  const { activeTab, search, setSearch } = useTabFilterContext();
  const { topics, currentWeek } = useTopicsContext();

  // Filter on the debounced text so the list doesn't re-filter on every keystroke
  const debouncedSearch = useDebounce(search, 500);
  const searchedTopics = returnFilteredTasks(topics, debouncedSearch);

  return (
    <>
      <SearchBox value={search} setValue={setSearch} />
      <Tabs />
      <MDBTabsContent>
        {Object.values(ActiveTab).map((tab) => (
          <MDBTabsPane key={tab} open={activeTab === tab}>
            <TaskList
              tasks={searchedTopics.filter((t) =>
                tabFilters[tab](t, currentWeek),
              )}
            />
          </MDBTabsPane>
        ))}
      </MDBTabsContent>
      <SimulateErrorButton />
    </>
  );
}
