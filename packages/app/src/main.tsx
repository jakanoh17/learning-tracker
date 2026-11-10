import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TopicsProvider } from './utils/hooks/TopicsContext';
import TopicsErrorBoundary from './components/TopicsErrorBoundary/TopicsErrorBoundary';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TopicsErrorBoundary>
        <Suspense fallback={<p>Loading topics…</p>}>
          <TopicsProvider>
            <App />
          </TopicsProvider>
        </Suspense>
      </TopicsErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
);
