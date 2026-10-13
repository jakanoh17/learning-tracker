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

export default function App() {
  const [active, setActive] = useState('tab1');
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const [storedTopics, setStoredTopics] = useLocalStorage<TopicType[]>(
    'myKey',
    topics,
  );

  return (
    <TabFilterContext
      value={{
        activeTab: active as ActiveTabType,
        setActiveTab: setActive as any,
      }}
    >
      <section className="gradient-custom">
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
                          (t) => t.status === Status.Todo && t.week === 1,
                        )}
                      />
                    </MDBTabsPane>
                    <MDBTabsPane open={active === ActiveTab.tab2}>
                      <TaskList
                        tasks={returnFilteredTasks(
                          storedTopics,
                          searchBoxValue,
                        ).filter(
                          (t) => t.status === Status.InProgress && t.week === 1,
                        )}
                      />
                    </MDBTabsPane>
                    <MDBTabsPane open={active === ActiveTab.tab3}>
                      <TaskList
                        tasks={returnFilteredTasks(
                          storedTopics,
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
