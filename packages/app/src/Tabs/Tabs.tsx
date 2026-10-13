import { MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import TabFilterContext from '../utils/TabFilterContext';
import { ActiveTab, type ActiveTabType } from '../utils/TabFilterContext';

export default function Tabs() {
  const { activeTab, setActiveTab } = useContext(TabFilterContext);

  const handleClick = (value: ActiveTabType) => {
    if (value === activeTab) {
      return;
    }
    setActiveTab(value);
  };

  return (
    <MDBTabs className="mb-4 pb-2">
      {/* Todo for the week */}
      <MDBTabsItem>
        <MDBTabsLink
          onClick={() => handleClick(ActiveTab.tab1)}
          active={activeTab === ActiveTab.tab1}
        >
          To do
          <p>for the week</p>
        </MDBTabsLink>
      </MDBTabsItem>
      {/* In progress for the week */}
      <MDBTabsItem>
        <MDBTabsLink
          onClick={() => handleClick(ActiveTab.tab2)}
          active={activeTab === ActiveTab.tab2}
        >
          In Progress
          <p>for the week</p>
        </MDBTabsLink>
      </MDBTabsItem>
      {/* Done for all time */}
      <MDBTabsItem>
        <MDBTabsLink
          onClick={() => handleClick(ActiveTab.tab3)}
          active={activeTab === ActiveTab.tab3}
        >
          Done
          <p>all time</p>
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>
  );
}
