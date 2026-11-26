'use client';

import type { DeliveryStatus } from '@/lib/types';
import { Pill } from './styles';

const LABEL: Record<DeliveryStatus, string> = { delivered: 'Delivered', pending: 'Pending', failed: 'Failed' };

export function StatusPill({ status }: { status: DeliveryStatus }) {
  return <Pill $status={status}>{LABEL[status]}</Pill>;
}
