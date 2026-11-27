const COUNT = new Intl.NumberFormat('en-US');

/** 1284 -> "1,284". Counts never carry decimals. */
export function formatCount(value: number): string {
  return COUNT.format(value);
}

/** A missing value is a dash, a real zero is printed. */
export function orDash(value: number | null | undefined): string {
  return value === null || value === undefined ? '–' : formatCount(value);
}

/** "2026-11-18 14:05" in UTC, fixed width so columns line up. */
export function formatDateTime(iso: string): string {
  return new Date(iso).toISOString().slice(0, 16).replace('T', ' ');
}

/** Short relative time for recency: "just now", "5 min ago", "3 h ago", "2 d ago". */
export function formatAgo(iso: string, now: Date = new Date()): string {
  const seconds = Math.max(0, Math.round((now.getTime() - new Date(iso).getTime()) / 1000));
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} h ago`;
  return `${Math.floor(seconds / 86400)} d ago`;
}

/** IDs are shown truncated, the full value stays in the title attribute. */
export function shortId(id: string): string {
  return id.slice(0, 8);
}

/** 3725 -> "1 h 2 m". Used for uptime. */
export function formatDuration(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (hours > 0) return `${hours} h ${minutes} m`;
  if (minutes > 0) return `${minutes} m`;
  return `${totalSeconds} s`;
}

/** Time until a future moment: "due now", "in 5 min", "in 3 h", "in 2 d". */
export function formatUntil(iso: string, now: Date = new Date()): string {
  const seconds = Math.round((new Date(iso).getTime() - now.getTime()) / 1000);
  if (seconds <= 0) return 'due now';
  if (seconds < 60) return `in ${seconds} s`;
  if (seconds < 3600) return `in ${Math.floor(seconds / 60)} min`;
  if (seconds < 86400) return `in ${Math.floor(seconds / 3600)} h`;
  return `in ${Math.floor(seconds / 86400)} d`;
}

/** "https://api.example.com/hooks/orders" -> "api.example.com/hooks/orders", without the bare root path. */
export function describeUrl(url: string): string {
  try {
    const { host, pathname, search } = new URL(url);
    return `${host}${pathname === '/' ? '' : pathname}${search}`;
  } catch {
    return url;
  }
}
