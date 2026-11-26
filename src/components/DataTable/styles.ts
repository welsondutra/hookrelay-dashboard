import styled from 'styled-components';

export const Wrap = styled.div`
  overflow-x: auto;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.card};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.font.body};
`;

export const Th = styled.th<{ $numeric?: boolean }>`
  height: 36px;
  padding: 0 16px;
  text-align: ${({ $numeric }) => ($numeric ? 'right' : 'left')};
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.small};
  font-weight: 400;
  white-space: nowrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Td = styled.td<{ $numeric?: boolean; $mono?: boolean; $muted?: boolean }>`
  height: ${({ theme }) => theme.size.row};
  padding: 0 16px;
  text-align: ${({ $numeric }) => ($numeric ? 'right' : 'left')};
  color: ${({ $muted, theme }) => ($muted ? theme.colors.muted : theme.colors.text)};
  font-family: ${({ $mono }) => ($mono ? 'var(--font-figures), monospace' : 'inherit')};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors.rule};
`;

export const Tr = styled.tr`
  &:last-child > td { border-bottom: 0; }
`;

export const Truncate = styled.span`
  display: block;
  max-width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
