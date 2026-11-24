import styled from 'styled-components';

export const Frame = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.size.rail} minmax(0, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
  }
`;

export const Rail = styled.nav`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 14px 0;
  background: ${({ theme }) => theme.colors.ground};
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 720px) {
    position: static;
    height: auto;
    flex-direction: row;
    justify-content: flex-start;
    padding: 8px 16px;
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Mark = styled.span`
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  margin-bottom: 14px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.accent};
  color: #0b0b0c;
  font-family: var(--font-figures), monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 720px) {
    margin: 0 12px 0 0;
  }
`;

export const NavLink = styled.a<{ $active: boolean }>`
  position: relative;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 6px;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.muted)};

  &:hover { color: ${({ theme }) => theme.colors.text}; }

  /* The one selection mark: a 1px accent line on the nearest edge. */
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 7px;
    bottom: 7px;
    width: 1px;
    background: ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  }

  @media (max-width: 720px) {
    &::before { left: 7px; right: 7px; top: auto; bottom: -9px; width: auto; height: 1px; }
  }
`;

export const Canvas = styled.main`
  min-width: 0;
  padding: 28px ${({ theme }) => theme.space.pad} 48px;

  @media (max-width: 720px) {
    padding: 20px 16px 40px;
  }
`;
