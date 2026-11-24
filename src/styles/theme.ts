// Tokens for a dark, dense operations UI. Colour lives on data, selection is a 1px accent line.
export const theme = {
  colors: {
    ground: '#171719',
    surface: '#131217',
    raised: '#212023',
    border: '#222224',
    rule: '#1b1a1f',
    control: '#3a3a3e',
    text: '#ffffff',
    muted: '#8a8c92',
    accent: '#4a8ad6',
    positive: '#44a282',
    negative: '#e5566f',
    warning: '#d9a441',
    pill: {
      positive: { bg: '#1b2828', ink: '#5fc39c' },
      negative: { bg: '#2c1a20', ink: '#e5566f' },
      warning: { bg: '#2a2416', ink: '#d9a441' },
      neutral: { bg: '#212023', ink: '#bdbdc0' },
    },
  },
  radius: { card: '6px', control: '999px' },
  space: { gap: '24px', pad: '32px' },
  size: { rail: '50px', row: '42px', control: '34px' },
  font: { title: '26px', section: '20px', kpi: '20px', body: '13px', small: '12px' },
} as const;

export type AppTheme = typeof theme;
