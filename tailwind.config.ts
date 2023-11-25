import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      basic: {
        dark: '#EAECED',
        DEFAULT: '#F3F4F5',
        light: '#FCFCFD',
      },
      main: {
        dark: '#1D3B64',
        DEFAULT: '#254A7E',
        light: '#2D5998',
      },
      accent: {
        dark: '#D47200',
        DEFAULT: '#F68400',
        light: '#FF9419',
      },
      font: {
        dark: '#0F172A',
        DEFAULT: '#334155',
        light: '#CBD5E1',
        link: '#2563EB',
      },
      system: {
        success: '#35C27B',
        warning: '#CC9400',
        error: '#FF2020',
      },
    },
  },
};

export default config;
