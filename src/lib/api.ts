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
