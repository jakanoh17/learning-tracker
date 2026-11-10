import '@testing-library/jest-dom';
import { vi } from 'vitest';

// jsdom has no IntersectionObserver, but MDB components use it
class IntersectionObserverStub {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}
globalThis.IntersectionObserver ??=
  IntersectionObserverStub as unknown as typeof IntersectionObserver;
