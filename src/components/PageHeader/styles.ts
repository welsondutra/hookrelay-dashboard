import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: ${({ theme }) => theme.space.gap};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.title};
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
`;

export const Subline = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  flex: none;
`;
