import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import { topics, Status, type TopicType } from '../utils/topics';
import { useLocalStorage } from '../utils/useLocalStorage';
import TaskList from '../TaskList/TaskList';
import SearchBox from '../SearchBox/SearchBox';
import returnFilteredTasks from '../utils/returnFilteredTasks';
import Tabs from '../Tabs/Tabs';
import TabFilterContext, {
  ActiveTab,
  type ActiveTabType,
} from '../utils/TabFilterContext';

const CURRENT_WEEK = 2;

export default function App() {
  const [active, setActive] = useState<ActiveTabType>(ActiveTab.tab1);
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const [storedTopics, setStoredTopics] = useLocalStorage<TopicType[]>(
    'myKey',
    topics,
  );

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
                          storedTopics,
                          searchBoxValue,
                        ).filter(
                          (t) =>
                            t.status === Status.Todo && t.week === CURRENT_WEEK,
                        )}
                      />
                    </MDBTabsPane>
                    <MDBTabsPane open={active === ActiveTab.tab2}>
                      <TaskList
                        tasks={returnFilteredTasks(
                          storedTopics,
                          searchBoxValue,
                        ).filter(
                          (t) =>
                            t.status === Status.InProgress &&
                            t.week === CURRENT_WEEK,
                        )}
                      />
                    </MDBTabsPane>
                    <MDBTabsPane open={active === ActiveTab.tab3}>
                      <p className="mb-3 fs-6 fw-bold text-uppercase">
                        For the week
                      </p>
                      <TaskList
                        tasks={returnFilteredTasks(
                          storedTopics,
                          searchBoxValue,
                        ).filter(
                          (t) =>
                            t.status === Status.Done && t.week === CURRENT_WEEK,
                        )}
                      />
                      <hr className="hr hr-blurry" />
                      <p className="mb-3 fs-6 fw-bold text-uppercase">
                        Past weeks
                      </p>
                      <TaskList
                        tasks={returnFilteredTasks(
                          storedTopics,
                          searchBoxValue,
                        ).filter(
                          (t) =>
                            t.status === Status.Done && t.week !== CURRENT_WEEK,
                        )}
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
