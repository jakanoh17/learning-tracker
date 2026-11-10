import { act, fireEvent, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import App from './app';
import { TopicsProvider } from '../utils/hooks/TopicsContext';
import type { TopicType } from '../utils/topics';

const topics: TopicType[] = [
  { id: '0', title: 'Context', week: 1, status: 'TODO', notes: '' },
  { id: '1', title: 'Error boundaries', week: 1, status: 'TODO', notes: '' },
];

function renderApp() {
  vi.spyOn(globalThis, 'fetch').mockImplementation(async (input) => {
    const url = String(input);
    const body = url.endsWith('/currentWeek') ? { currentWeek: 1 } : topics;
    return new Response(JSON.stringify(body), { status: 200 });
  });

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<p>Loading topics…</p>}>
        <TopicsProvider>
          <App />
        </TopicsProvider>
      </Suspense>
    </QueryClientProvider>,
  );
}

describe('App', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('should render the task list for the current week', async () => {
    renderApp();
    expect(
      await screen.findByRole('heading', { name: 'Task List' }),
    ).toBeTruthy();
    expect(screen.getByText('Context')).toBeTruthy();
    expect(screen.getByText('Error boundaries')).toBeTruthy();
  });

  it('should filter topics by the search text after the debounce', async () => {
    renderApp();
    await screen.findByText('Context');
    vi.useFakeTimers();

    fireEvent.change(screen.getByLabelText('Search Topics'), {
      target: { value: 'error' },
    });
    // Input shows the text right away; the list waits for the debounce
    expect(screen.getByDisplayValue('error')).toBeTruthy();
    expect(screen.getByText('Context')).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(screen.queryByText('Context')).toBeNull();
    expect(screen.getByText('Error boundaries')).toBeTruthy();
  });
});
