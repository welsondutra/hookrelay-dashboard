'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Icon, type IconName } from '@/components/Icon';
import { Canvas, Frame, Mark, NavLink, Rail } from './styles';

const NAV: { href: string; label: string; icon: IconName }[] = [
  { href: '/', label: 'Overview', icon: 'overview' },
  { href: '/endpoints', label: 'Endpoints', icon: 'endpoints' },
  { href: '/deliveries', label: 'Deliveries', icon: 'deliveries' },
  { href: '/events', label: 'Send event', icon: 'events' },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <Frame>
      <Rail aria-label="Main">
        <Mark aria-hidden="true">hr</Mark>
        {NAV.map((item) => (
          <NavLink key={item.href} as={Link} href={item.href} $active={isActive(item.href)} title={item.label} aria-label={item.label} aria-current={isActive(item.href) ? 'page' : undefined}>
            <Icon name={item.icon} />
          </NavLink>
        ))}
      </Rail>
      <Canvas>{children}</Canvas>
    </Frame>
  );
}
