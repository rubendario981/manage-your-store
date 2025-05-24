export const lightTheme = {
  mode: 'light' as const,
  colors: {
    background: '#F5F5F5',
    card: '#FFFFFF',
    text: '#212121',
    primary: '#0D47A1',
    secondary: '#1976D2',
    tertiary: '#BBDEFB',
    danger: '#D32F2F',
    success: '#388E3C',
    dark: '#3c3c3c',
  },
  buttons: {
    primary: {
      background: '#0D47A1',
      color: '#fff',
    },
    secondary: {
      background: '#1976D2',
      color: '#fff',
    },
    danger: {
      background: '#D32F2F',
      color: '#fff',
    },
    success: {
      background: '#388E3C',
      color: '#fff',
    }
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    baseSize: '16px',
    headingSize: '2rem',
    textSize: '1rem',
    smallText: '0.875rem',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  boxShadow: {
    soft: '0 0 6px rgba(0, 0, 0, 0.1)',
    hard: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
  },
};

export const darkTheme = {
  ...lightTheme,
  mode: 'dark' as const,
  colors: {
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFFFFF',
    primary: '#90CAF9',
    secondary: '#64B5F6',
    tertiary: '#42A5F5',
    danger: '#EF5350',
    success: '#81C784',
    dark: '#3c3c3c',
  },
  buttons: {
    primary: {
      background: '#90CAF9',
      color: '#121212',
    },
    secondary: {
      background: '#64B5F6',
      color: '#121212',
    },
    danger: {
      background: '#EF5350',
      color: '#121212',
    },
    success: {
      background: '#81C784',
      color: '#121212',
    }
  },
};


// export type Theme = typeof lightTheme;
export type Theme = typeof lightTheme;