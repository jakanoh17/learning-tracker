import React, { useState } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from 'mdb-react-ui-kit';

export default function App() {
  const [active, setActive] = useState('tab1');

  const handleClick = (value: string) => {
    if (value === active) {
      return;
    }

    setActive(value);
  };

  return (
    <section className="gradient-custom vh-100">
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
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        Cras justo odio
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        Dapibus ac facilisis in
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        Morbi leo risus
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        Porta ac consectetur ac
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        Vestibulum at eros
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBTabsPane>
                  <MDBTabsPane open={active === 'tab2'}>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        Morbi leo risus
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        Porta ac consectetur ac
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        Vestibulum at eros
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBTabsPane>
                  <MDBTabsPane open={active === 'tab3'}>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        <s>Cras justo odio</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        <s>Dapibus ac facilisis in</s>
                      </MDBListGroupItem>
                    </MDBListGroup>
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
