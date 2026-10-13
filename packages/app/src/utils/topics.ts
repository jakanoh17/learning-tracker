export const Status = {
  Todo: 'TODO',
  InProgress: 'INPROGRESS',
  Done: 'DONE',
} as const;

type StatusType = (typeof Status)[keyof typeof Status];
export type TopicType={
  id: number;
  title: string;
  week: number | Date | string;
  status: StatusType;
  notes: string;
}

export const topics: TopicType[] = [
  // TEMPLATE:
  // {
  //     id: -1,
  //     title: "",
  //     week: 1,
  //     status: Status.Done,
  //     notes:""
  // },
  {
    id: 0,
    title: 'Rendering and re-renders',
    week: 1,
    status: Status.Done,
    notes:
      "Crazy how \'prop chnages\' are not why React components re-render and it's actually due to state changes. Apparently prop chnages is a common misconception. Most times when a component's prop changes, it's because the parent's state changed and that's what's actually causing the re-render",
  },
  {
    id: 1,
    title: 'Effects, and when not to use them',
    week: 1,
    status: Status.InProgress,
    notes:
      'Only watched the video and not the reading. Still learned that useEffects should not be a go to for everything. They should be used when you need to do something after a render, like fetching data or updating the DOM. If you can do it during render, then do it during render like event-specific logic.',
  },
  {
    id: 2,
    title: 'Refs, reducers, and custom hooks',
    week: 1,
    status: Status.Done,
    notes:
      'useReducer can be used to manage state and state actions in a modular way. (Refer to screenshot "useReducerExample.png") useRef can be used to store mutable values that do not cause re-renders when updated. Custom hooks can be used to extract and reuse logic across components.',
  },
  {
    id: 3,
    title: 'Context',
    week: 1,
    status: Status.Done,
    notes:
      'Can be used to pass data down the component tree without having to pass props down manually at every level. It can be used for global state management, theming, and more. You can use useReducer with useContext (create a context that holds state and one that holds dispatch).',
  },
  {
    id: 4,
    title: 'Memoization and the React Compiler',
    week: 1,
    status: Status.Done,
    notes:
      'There was an update in Dec 2024 to the React compiler so that your code iss automatically memoized upon build. This means that you no longer have to use React.memo or useMemo in most cases. The compiler will automatically memoize your components and hooks for you. This is a huge performance improvement and will make your code faster and more efficient.',
  },
  {
    id: 5,
    title: "What's new in React 19",
    week: 1,
    status: Status.Done,
    notes:
      'React 19 includes a lot of support for async rendering, including Suspense and use() for data fetching, useAction() for handling data fetching actions, and a new concurrent mode that allows React to interrupt rendering to work on other tasks. This will make your app more responsive and improve the user experience. Could go back and look into this more.',
  },
  {
    id: 6,
    title: 'Compound components, controlled vs. uncontrolled',
    week: 2,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 7,
    title: 'Error boundaries',
    week: 2,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 8,
    title: 'Suspense and code splitting',
    week: 2,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 9,
    title: 'Server data with TanStack Query',
    week: 2,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 10,
    title: 'Choosing where state lives',
    week: 2,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 11,
    title: 'Finding slow components',
    week: 2,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 12,
    title: 'The Nx tutorial series',
    week: 3,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 13,
    title: 'Project graph, generators, and executors',
    week: 3,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 14,
    title: 'Caching and "affected"',
    week: 3,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 15,
    title: 'Module boundaries',
    week: 3,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 16,
    title: 'Nx Console',
    week: 3,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 17,
    title: 'React Testing Library',
    week: 4,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 18,
    title: 'Jest and jsdom',
    week: 4,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 19,
    title: 'Mocking in Jest',
    week: 4,
    status: Status.Todo,
    notes: '',
  },
  {
    id: 20,
    title: 'Mocking the network, and testing hooks',
    week: 4,
    status: Status.Todo,
    notes: '',
  },
];
