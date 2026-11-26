'use client';

import type { ButtonHTMLAttributes } from 'react';
import { StyledButton, type ButtonVariant } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'ghost', ...props }: ButtonProps) {
  return <StyledButton $variant={variant} {...props} />;
}
