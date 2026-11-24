import type { Metadata } from 'next';
import { JetBrains_Mono, Public_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { Shell } from '@/components/Shell';
import StyledComponentsRegistry from '@/lib/registry';

const text = Public_Sans({ subsets: ['latin'], variable: '--font-text', display: 'swap' });
const figures = JetBrains_Mono({ subsets: ['latin'], variable: '--font-figures', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'hookrelay', template: '%s · hookrelay' },
  description: 'Dashboard for hookrelay: endpoints, deliveries and redelivery of failed webhooks.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${text.variable} ${figures.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Shell>{children}</Shell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
