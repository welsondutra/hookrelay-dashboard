import { afterEach, describe, expect, it, vi } from 'vitest';
import { getDeliveries, request } from './api';

function mockFetch(response: Partial<Response> | Error) {
  const fetchMock = vi.fn<(url: string, init?: RequestInit) => Promise<Response>>(async () => {
    if (response instanceof Error) throw response;
    return response as Response;
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

afterEach(() => vi.unstubAllGlobals());

describe('request', () => {
  it('returns the parsed body on success', async () => {
    mockFetch({ ok: true, status: 200, json: async () => ({ hello: 'world' }) });
    expect(await request('/health')).toEqual({ ok: true, data: { hello: 'world' } });
  });

  it('turns a non-2xx answer into an error value', async () => {
    mockFetch({ ok: false, status: 503 });
    expect(await request('/health')).toEqual({ ok: false, error: 'The API answered with HTTP 503' });
  });

  it('turns a network failure into an error value instead of throwing', async () => {
    mockFetch(new Error('ECONNREFUSED'));
    const result = await request('/health');
    expect(result.ok).toBe(false);
  });

  it('accepts empty 204 answers', async () => {
    mockFetch({ ok: true, status: 204 });
    expect(await request('/endpoints/1', { method: 'DELETE' })).toEqual({ ok: true, data: undefined });
  });
});

describe('getDeliveries', () => {
  it('sends the filters as query parameters', async () => {
    const fetchMock = mockFetch({ ok: true, status: 200, json: async () => [] });
    await getDeliveries({ status: 'failed', limit: 25 });
    expect(fetchMock.mock.calls[0][0]).toContain('/deliveries?status=failed&limit=25');
  });

  it('omits the query string when no filter is set', async () => {
    const fetchMock = mockFetch({ ok: true, status: 200, json: async () => [] });
    await getDeliveries();
    expect(String(fetchMock.mock.calls[0][0]).endsWith('/deliveries')).toBe(true);
  });
});
