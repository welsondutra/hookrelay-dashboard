'use client';

import { Frame, Hint, Title } from './styles';

/** An empty section keeps its frame and says what to do next. */
export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <Frame $tone="empty">
      <Title>{title}</Title>
      {hint && <Hint>{hint}</Hint>}
    </Frame>
  );
}

export function ErrorState({ message }: { message: string }) {
  return (
    <Frame $tone="error" role="alert">
      <Title>Something went wrong</Title>
      <Hint>{message}</Hint>
    </Frame>
  );
}
