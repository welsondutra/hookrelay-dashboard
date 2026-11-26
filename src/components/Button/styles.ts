import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'ghost';

export const buttonStyles = css<{ $variant?: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: ${({ theme }) => theme.size.control};
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radius.control};
  border: 1px solid ${({ $variant, theme }) => ($variant === 'primary' ? theme.colors.text : theme.colors.control)};
  background: ${({ $variant, theme }) => ($variant === 'primary' ? theme.colors.text : 'transparent')};
  color: ${({ $variant, theme }) => ($variant === 'primary' ? '#0b0b0c' : theme.colors.text)};
  font-size: ${({ theme }) => theme.font.body};
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;

  &:disabled { opacity: 0.5; cursor: not-allowed; }
  &:hover:not(:disabled) { border-color: ${({ theme }) => theme.colors.accent}; }
`;

export const StyledButton = styled.button<{ $variant?: ButtonVariant }>`
  ${buttonStyles}
`;
