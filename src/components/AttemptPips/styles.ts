import styled from 'styled-components';
import type { PipState } from '@/lib/attempts';

export const Row = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
`;

export const Pip = styled.span<{ $state: PipState }>`
  width: 6px;
  height: 12px;
  border-radius: 1px;
  background: ${({ $state, theme }) =>
    $state === 'used' ? theme.colors.text : $state === 'failed' ? theme.colors.negative : theme.colors.control};
  opacity: ${({ $state }) => ($state === 'empty' ? 0.45 : 1)};
`;
