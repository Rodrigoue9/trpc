import type { AnyRouter } from '@trpc/server/unstable-core-do-not-import';
import { describe, expect, test, vi } from 'vitest';
import { httpBatchLink } from './httpBatchLink';
import { httpLink } from './httpLink';
import type { Operation } from './types';

const operation: Operation = {
  id: 1,
  type: 'query',
  input: undefined,
  path: 'hello',
  context: {},
  signal: null,
};

describe('HTTP link cancellation', () => {
  test('aborts an in-flight httpLink request when unsubscribed', async () => {
    const fetchMock = vi.fn(
      (_url: RequestInfo | URL, _init?: RequestInit) =>
        new Promise<never>(() => {}),
    );
    const link = httpLink<AnyRouter>({
      url: 'https://example.com',
      fetch: fetchMock,
    })({});

    const subscription = link({
      op: operation,
      next: () => {
        throw new Error('not reached');
      },
    }).subscribe({});

    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    const signal = fetchMock.mock.calls[0]?.[1]?.signal;

    expect(signal).toBeInstanceOf(AbortSignal);
    expect(signal?.aborted).toBe(false);

    subscription.unsubscribe();

    expect(signal?.aborted).toBe(true);
  });

  test('aborts an in-flight httpBatchLink request when unsubscribed', async () => {
    const fetchMock = vi.fn(
      (_url: RequestInfo | URL, _init?: RequestInit) =>
        new Promise<never>(() => {}),
    );
    const link = httpBatchLink<AnyRouter>({
      url: 'https://example.com',
      fetch: fetchMock,
    })({});

    const subscription = link({
      op: operation,
      next: () => {
        throw new Error('not reached');
      },
    }).subscribe({});

    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    const signal = fetchMock.mock.calls[0]?.[1]?.signal;

    expect(signal).toBeInstanceOf(AbortSignal);
    expect(signal?.aborted).toBe(false);

    subscription.unsubscribe();

    expect(signal?.aborted).toBe(true);
  });
});
