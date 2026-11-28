import { describeUrl, formatAgo, formatDateTime, formatUntil, shortId } from './format';
import type { Delivery, DeliveryStatus, Endpoint } from './types';

export interface DeliveryRow {
  id: string;
  shortId: string;
  endpoint: string;
  status: DeliveryStatus;
  attempts: number;
  response: string;
  next: string;
  created: string;
}

const STATUSES: DeliveryStatus[] = ['pending', 'delivered', 'failed'];

/** Reads a status from a query string, ignoring anything that is not a known status. */
export function parseStatus(value: string | undefined): DeliveryStatus | undefined {
  return STATUSES.find((status) => status === value);
}

export function endpointLabels(endpoints: Endpoint[]): Record<string, string> {
  return Object.fromEntries(endpoints.map((endpoint) => [endpoint.id, describeUrl(endpoint.url)]));
}

/** Everything is formatted on the server, so the client renders strings and never disagrees about the time. */
export function toDeliveryRow(delivery: Delivery, labels: Record<string, string>, now: Date = new Date()): DeliveryRow {
  const response =
    delivery.lastStatusCode !== null ? String(delivery.lastStatusCode) : delivery.lastError ? 'no response' : '–';
  const next =
    delivery.status === 'pending' && delivery.nextAttemptAt
      ? formatUntil(delivery.nextAttemptAt, now)
      : delivery.status === 'delivered' && delivery.deliveredAt
        ? formatDateTime(delivery.deliveredAt)
        : '–';

  return {
    id: delivery.id,
    shortId: shortId(delivery.id),
    endpoint: labels[delivery.endpointId] ?? 'Deleted endpoint',
    status: delivery.status,
    attempts: delivery.attempts,
    response,
    next,
    created: formatAgo(delivery.createdAt, now),
  };
}
