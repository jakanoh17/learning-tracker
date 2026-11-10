import { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import { Status } from '../utils/topics';
import TaskList from '../components/TaskList/TaskList';
import SearchBox from '../components/SearchBox/SearchBox';
import returnFilteredTasks from '../utils/returnFilteredTasks';
import Tabs from '../components/Tabs';
import TabFilterContext, {
  ActiveTab,
  type ActiveTabType,
} from '../utils/hooks/TabFilterContext';
import HeaderDropdown from '../components/HeaderDropdown';

import { useTopicsContext } from '../utils/hooks/TopicsContext';

export default function App() {
  const [active, setActive] = useState<ActiveTabType>(ActiveTab.tab1);
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const { topics, currentWeek
   } = useTopicsContext();

  return (
    <TabFilterContext
      value={{
        activeTab: active,
        setActiveTab: setActive,
      }}
    >
      <section className="gradient-custom min-vh-100">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol xl="10">
              <MDBCard className="mask-custom">
                <MDBCardBody className="p-5">
                  <div className="text-center pt-3 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                      alt="Check"
                      width="60"
                    />
                    <h2 className="my-4">Task List</h2>
                    <HeaderDropdown />
                  </div>
                  <SearchBox
                    value={searchBoxValue}
                    setValue={setSearchBoxValue}
                  />
                  <Tabs />
                  <MDBTabsContent>
                    <MDBTabsPane open={active === ActiveTab.tab1}>
                      <TaskList
                        tasks={returnFilteredTasks(
                          topics,
                          searchBoxValue,
                        ).filter(
                          (t) =>
                            t.status === Status.Todo && t.week === currentWeek,
                        )}
                      />
                    </MDBTabsPane>
                    <MDBTabsPane open={active === ActiveTab.tab2}>
                      <TaskList
                        tasks={returnFilteredTasks(
                          topics,
                          searchBoxValue,
                        ).filter(
                          (t) =>
                            t.status === Status.InProgress &&
                            t.week === currentWeek,
                        )}
                      />
                    </MDBTabsPane>
                    <MDBTabsPane open={active === ActiveTab.tab3}>
                      <TaskList
                        tasks={returnFilteredTasks(
                          topics,
                          searchBoxValue,
                        ).filter(
                          (t) =>
                            t.status === Status.Done && t.week === currentWeek,
                        )}
                      />
                    </MDBTabsPane>
                    <MDBTabsPane open={active === ActiveTab.tab4}>
                      <TaskList
                        tasks={returnFilteredTasks(
                          topics,
                          searchBoxValue,
                        ).filter((t) => t.status === Status.Done)}
                      />
                    </MDBTabsPane>
                  </MDBTabsContent>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </TabFilterContext>
  );
}
