import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import TaskItem from '../TaskList/TaskItem/TaskItem';
import { topics, Status } from '../utils/topics';
import TaskList from '../TaskList/TaskList';

export default function App() {
  const [active, setActive] = useState('tab1');

  const handleClick = (value: string) => {
    if (value === active) {
      return;
    }

    setActive(value);
  };

  return (
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
                <MDBTabs className="mb-4 pb-2">
                  {/* Todo for the week */}
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick('tab1')}
                      active={active === 'tab1'}
                    >
                      To do
                      <p>for the week</p>
                    </MDBTabsLink>
                  </MDBTabsItem>
                  {/* In progress for the week */}
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick('tab2')}
                      active={active === 'tab2'}
                    >
                      In Progress
                      <p>for the week</p>
                    </MDBTabsLink>
                  </MDBTabsItem>
                  {/* Done for all time */}
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick('tab3')}
                      active={active === 'tab3'}
                    >
                      Done
                      <p>all time</p>
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                  <MDBTabsPane open={active === 'tab1'}>
                    <TaskList
                      tasks={topics.filter(
                        (t) => t.status === Status.Todo && t.week === 1,
                      )}
                    />
                  </MDBTabsPane>
                  <MDBTabsPane open={active === 'tab2'}>
                    <TaskList
                      tasks={topics.filter(
                        (t) => t.status === Status.InProgress && t.week === 1,
                      )}
                    />
                  </MDBTabsPane>
                  <MDBTabsPane open={active === 'tab3'}>
                    <TaskList
                      tasks={topics.filter((t) => t.status === Status.Done)}
                    />
                  </MDBTabsPane>
                </MDBTabsContent>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
