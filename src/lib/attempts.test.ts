import { describe, expect, it } from 'vitest';
import { pipStates } from './attempts';

describe('pipStates', () => {
  it('fills the attempts used and leaves the rest empty', () => {
    expect(pipStates(2, 'pending', 4)).toEqual(['used', 'used', 'empty', 'empty']);
  });

  it('marks the last attempt of a failed delivery', () => {
    expect(pipStates(3, 'failed', 3)).toEqual(['used', 'used', 'failed']);
  });

  it('does not mark a delivered one as failed', () => {
    expect(pipStates(1, 'delivered', 3)).toEqual(['used', 'empty', 'empty']);
  });

  it('shows no used pips before the first attempt', () => {
    expect(pipStates(0, 'pending', 3)).toEqual(['empty', 'empty', 'empty']);
  });

  it('grows past the default when a delivery has more attempts', () => {
    expect(pipStates(8, 'failed')).toHaveLength(8);
  });
});
