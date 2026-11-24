import { describe, expect, it } from 'vitest';
import { formatAgo, formatCount, formatDateTime, formatDuration, orDash, shortId } from './format';

describe('format', () => {
  it('adds thousands separators to counts', () => {
    expect(formatCount(1284)).toBe('1,284');
    expect(formatCount(0)).toBe('0');
  });

  it('prints a dash for missing values and a real zero for zero', () => {
    expect(orDash(null)).toBe('–');
    expect(orDash(undefined)).toBe('–');
    expect(orDash(0)).toBe('0');
  });

  it('formats timestamps in UTC with a fixed width', () => {
    expect(formatDateTime('2026-11-18T14:05:59.000Z')).toBe('2026-11-18 14:05');
  });

  it('describes recency in words', () => {
    const now = new Date('2026-11-18T12:00:00Z');
    expect(formatAgo('2026-11-18T11:59:40Z', now)).toBe('just now');
    expect(formatAgo('2026-11-18T11:55:00Z', now)).toBe('5 min ago');
    expect(formatAgo('2026-11-18T09:00:00Z', now)).toBe('3 h ago');
    expect(formatAgo('2026-11-16T12:00:00Z', now)).toBe('2 d ago');
  });

  it('shortens ids and durations', () => {
    expect(shortId('553785e8-82e2-4bce-9683-876dc66b107b')).toBe('553785e8');
    expect(formatDuration(3725)).toBe('1 h 2 m');
    expect(formatDuration(95)).toBe('1 m');
    expect(formatDuration(12)).toBe('12 s');
  });
});
