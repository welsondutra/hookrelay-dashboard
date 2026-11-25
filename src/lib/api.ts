import type { CreatedEndpoint, Delivery, DeliveryStatus, Endpoint, IngestedEvent } from './types';

const BASE_URL = process.env.HOOKRELAY_API_URL ?? 'http://localhost:3000';

export interface Health {
  status: 'ok';
  database: 'up';
  uptimeSeconds: number;
}

export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string };

export function apiUrl(path: string): string {
  return `${BASE_URL.replace(/\/$/, '')}${path}`;
}

/** Calls the hookrelay API and turns every failure into a value, so pages can render an honest error state. */
export async function request<T>(path: string, init?: RequestInit): Promise<ApiResult<T>> {
  try {
    const response = await fetch(apiUrl(path), { cache: 'no-store', ...init });
    if (!response.ok) {
      return { ok: false, error: `The API answered with HTTP ${response.status}` };
    }
    if (response.status === 204) return { ok: true, data: undefined as T };
    return { ok: true, data: (await response.json()) as T };
  } catch {
    return { ok: false, error: `Could not reach the API at ${BASE_URL}` };
  }
}

export const getHealth = () => request<Health>('/health');

const JSON_HEADERS = { 'content-type': 'application/json' };

export interface DeliveryFilters {
  status?: DeliveryStatus;
  endpointId?: string;
  limit?: number;
}

export function getDeliveries(filters: DeliveryFilters = {}) {
  const query = new URLSearchParams();
  if (filters.status) query.set('status', filters.status);
  if (filters.endpointId) query.set('endpointId', filters.endpointId);
  if (filters.limit) query.set('limit', String(filters.limit));
  const suffix = query.size > 0 ? `?${query}` : '';
  return request<Delivery[]>(`/deliveries${suffix}`);
}

export const redeliver = (id: string) => request<Delivery>(`/deliveries/${id}/redeliver`, { method: 'POST' });

export const getEndpoints = () => request<Endpoint[]>('/endpoints');

export const createEndpoint = (body: { url: string; description?: string }) =>
  request<CreatedEndpoint>('/endpoints', { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify(body) });

export const updateEndpoint = (id: string, body: { url?: string; description?: string; enabled?: boolean }) =>
  request<Endpoint>(`/endpoints/${id}`, { method: 'PATCH', headers: JSON_HEADERS, body: JSON.stringify(body) });

export const deleteEndpoint = (id: string) => request<void>(`/endpoints/${id}`, { method: 'DELETE' });

export const sendEvent = (body: { type: string; payload: Record<string, unknown> }) =>
  request<IngestedEvent>('/events', { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify(body) });
