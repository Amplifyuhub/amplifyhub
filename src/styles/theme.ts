export const theme = {
  colors: {
    primary: '#ff5d1d',
    background: '#ffffff',
  }
} as const;

export type Theme = typeof theme; 