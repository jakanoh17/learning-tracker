import { lazy, Suspense, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';
import HeaderDropdown from '../components/HeaderDropdown';
import PageToggle from '../components/PageToggle';
import PageSpinner from '../components/PageSpinner';
import Tasks from '../pages/Tasks/Tasks';
import TabFilterContext, {
  ActiveTab,
  type ActiveTabType,
} from '../utils/hooks/TabFilterContext';

const Stats = lazy(() => import('../pages/Stats/Stats'));
const Flashcards = lazy(() => import('../pages/Flashcards/Flashcards'));

const pages = {
  tasks: { title: 'Task List', Component: Tasks, showWeek: true },
  stats: { title: 'Stats', Component: Stats, showWeek: false },
  flashcards: { title: 'Flashcards', Component: Flashcards, showWeek: true },
} as const;

type PageType = keyof typeof pages;
const pageNames = Object.keys(pages) as PageType[];

export default function App() {
  const [page, setPage] = useState<PageType>('tasks');
  // Kept here, not in Tasks, so the tab and search survive switching pages
  const [activeTab, setActiveTab] = useState<ActiveTabType>(ActiveTab.tab1);
  const [search, setSearch] = useState('');
  const { title, Component, showWeek } = pages[page];

  return (
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
                  <h2 className="my-4">{title}</h2>
                  <PageToggle pages={pageNames} page={page} setPage={setPage} />
                  {showWeek && <HeaderDropdown />}
                </div>
                <TabFilterContext
                  value={{ activeTab, setActiveTab, search, setSearch }}
                >
                  <Suspense fallback={<PageSpinner label={title} />}>
                    <Component />
                  </Suspense>
                </TabFilterContext>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
