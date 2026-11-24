import styled from 'styled-components';

export const Box = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.card};
  padding: 20px 24px;
`;

export const Heading = styled.h2`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.muted};
`;
