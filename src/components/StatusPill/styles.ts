import styled from 'styled-components';
import type { DeliveryStatus } from '@/lib/types';

const TONE = { delivered: 'positive', pending: 'neutral', failed: 'negative' } as const;

export const Pill = styled.span<{ $status: DeliveryStatus }>`
  display: inline-flex;
  align-items: center;
  flex: none;
  height: 20px;
  padding: 0 9px;
  border-radius: ${({ theme }) => theme.radius.control};
  background: ${({ $status, theme }) => theme.colors.pill[TONE[$status]].bg};
  color: ${({ $status, theme }) => theme.colors.pill[TONE[$status]].ink};
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;
