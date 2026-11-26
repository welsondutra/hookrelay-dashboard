import styled from 'styled-components';

export const Frame = styled.div<{ $tone: 'empty' | 'error' }>`
  padding: 36px 24px;
  border: 1px dashed ${({ $tone, theme }) => ($tone === 'error' ? theme.colors.negative : theme.colors.control)};
  border-radius: ${({ theme }) => theme.radius.card};
  text-align: center;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const Hint = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.muted};
`;
