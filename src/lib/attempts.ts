import type { DeliveryStatus } from './types';

export type PipState = 'used' | 'failed' | 'empty';

export const DEFAULT_MAX_ATTEMPTS = 6;

/**
 * One pip per attempt slot. Used attempts are filled, a failed delivery marks its last attempt,
 * and unused slots stay empty. The row grows past the default when a delivery has more attempts.
 */
export function pipStates(attempts: number, status: DeliveryStatus, max: number = DEFAULT_MAX_ATTEMPTS): PipState[] {
  const slots = Math.max(max, attempts);
  return Array.from({ length: slots }, (_, index) => {
    if (index >= attempts) return 'empty';
    return status === 'failed' && index === attempts - 1 ? 'failed' : 'used';
  });
}
