import { createContext, useContext } from 'react';

export const ActiveTab = {
  tab1: 'TAB1',
  tab2: 'TAB2',
  tab3: 'TAB3',
  tab4: 'TAB4',
} as const;

export type ActiveTabType = (typeof ActiveTab)[keyof typeof ActiveTab];

type TabFilterContextType = {
  activeTab: ActiveTabType;
  setActiveTab: (value: ActiveTabType) => void;
  search: string;
  setSearch: (value: string) => void;
};

const TabFilterContext = createContext<TabFilterContextType | undefined>(
  undefined,
);

export default TabFilterContext;

export const useTabFilterContext = () => {
  const context = useContext(TabFilterContext);
  if (!context) {
    throw new Error(
      'useTabFilterContext must be used within a TabFilterContext provider',
    );
  }
  return context;
};
