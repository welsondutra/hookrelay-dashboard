'use client';

import type { ReactNode } from 'react';
import { Box, Heading } from './styles';

export function Panel({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <Box>
      {title && <Heading>{title}</Heading>}
      {children}
    </Box>
  );
}
