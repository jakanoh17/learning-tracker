import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import TopicsErrorBoundary from './TopicsErrorBoundary';
import { useTopics } from '../../utils/hooks/useTopics';

function TopicTitles() {
  const { data } = useTopics();
  return <div>{data.map((t) => t.title).join(', ')}</div>;
}

describe('TopicsErrorBoundary', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows "Try again" when topics fail to load and refetches on click', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    // Fail the initial fetch and all 3 retries, then succeed
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockImplementation(async () =>
        fetchMock.mock.calls.length <= 4
          ? new Response(null, { status: 500 })
          : new Response(JSON.stringify([{ id: '0', title: 'Context' }]), {
              status: 200,
            }),
      );

    const queryClient = new QueryClient({
      defaultOptions: { queries: { retryDelay: 0 } },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <TopicsErrorBoundary>
          <Suspense fallback={<p>Loading…</p>}>
            <TopicTitles />
          </Suspense>
        </TopicsErrorBoundary>
      </QueryClientProvider>,
    );

    expect(await screen.findByText("Couldn't load topics")).toBeTruthy();
    expect(screen.getByText('GET /topics failed: 500')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));

    expect(await screen.findByText('Context')).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(5);
  });
});
