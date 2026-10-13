import { createContext } from 'react';

export const ActiveTab = {
  tab1: 'TAB1',
  tab2: 'TAB2',
  tab3: 'TAB3',
} as const;

export type ActiveTabType = (typeof ActiveTab)[keyof typeof ActiveTab];

const TabFilterContext = createContext({
  activeTab: ActiveTab.tab1 as ActiveTabType,
  setActiveTab: (value: ActiveTabType) => {},
});

export default TabFilterContext;
