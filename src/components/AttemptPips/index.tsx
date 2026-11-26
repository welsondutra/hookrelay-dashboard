'use client';

import { pipStates } from '@/lib/attempts';
import type { DeliveryStatus } from '@/lib/types';
import { Pip, Row } from './styles';

interface AttemptPipsProps {
  attempts: number;
  status: DeliveryStatus;
  max?: number;
}

/** The retry ladder: one mark per attempt slot, so a delivery's history reads at a glance. */
export function AttemptPips({ attempts, status, max }: AttemptPipsProps) {
  const states = pipStates(attempts, status, max);
  return (
    <Row role="img" aria-label={`${attempts} of ${states.length} attempts used`}>
      {states.map((state, index) => (
        <Pip key={index} $state={state} />
      ))}
    </Row>
  );
}
