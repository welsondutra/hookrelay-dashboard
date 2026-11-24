'use client';

import type { ReactNode } from 'react';
import { Actions, Header, Subline, Title } from './styles';

interface PageHeaderProps {
  title: string;
  subline?: ReactNode;
  actions?: ReactNode;
}

export function PageHeader({ title, subline, actions }: PageHeaderProps) {
  return (
    <Header>
      <div>
        <Title>{title}</Title>
        {subline && <Subline>{subline}</Subline>}
      </div>
      {actions && <Actions>{actions}</Actions>}
    </Header>
  );
}
