import React, { useState } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
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

  const handleClick = (value) => {
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
            <MDBCard>
              <MDBCardBody className="p-5">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <MDBInput
                    type="text"
                    id="form1"
                    label="New task..."
                    wrapperClass="flex-fill"
                  />
                  <MDBBtn type="submit" color="info" className="ms-2">
                    Add
                  </MDBBtn>
                </div>
                <MDBTabs className="mb-4 pb-2">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick('tab1')}
                      active={active === 'tab1'}
                    >
                      All
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick('tab2')}
                      active={active === 'tab2'}
                    >
                      Active
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick('tab3')}
                      active={active === 'tab3'}
                    >
                      Completed
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
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Cras justo odio</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Dapibus ac facilisis in</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Morbi leo risus
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Porta ac consectetur ac
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
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
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Morbi leo risus
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Porta ac consectetur ac
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
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
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Cras justo odio</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        {' '}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
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
