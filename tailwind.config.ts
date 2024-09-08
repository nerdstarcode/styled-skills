import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      },
      fontFamily: {
        'inter': 'Inter, sans-serif',
        'noto-sans': 'Noto Sans, sans-serif',
        'noto-serif': 'Noto Serif, serif'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'animated-bg': 'url(../../public/use-svg-as-background-image-particle-strokes.svg)',
        'animated-bg-white': 'url(../../public/use-svg-as-background-image-particle-strokes-white.svg)'
      },
      colors: {
        // Light theme:
        'brand-primary': "#0072bc",
        'brand-primary-dark': "#070f26",
        'brand-primary-future-blue': '#0072bc',
        'brand-primary-future-blue-150': '#005b96',
        'brand-primary-future-blue-50': '#19a3fc',
        'brand-secondary-turquoise': '#00dfed',
        'brand-secondary-turquoise-100': '#009aa4',
        'brand-secondary-turquoise-50': '#7bf7ff',
        'brand-secondary-green': '#00cb5d',
        'brand-secondary-green-150': '#068941',
        'brand-secondary-green-50': '#38f990',
        'brand-attention-yellow': '#ffc400',
        'brand-attention-yellow-100': '#ffdb66',
        'brand-attention-yellow-50': '#ffedb2',
        'brand-attention-orange': '#ff7a00',
        'brand-attention-orange-100': '#e42600',
        'brand-attention-orange-150': '#b22000',
        'brand-contrast-gray': '#2e404d',
        'brand-contrast-gray-50': '#e8e8e8',
        'brand-secondary': "#455565",
        'brand-white': "#ffffff",
        'brand-black': "#000000",
        'brand-primary-dark:': "#001973",

        'brand-info': "#19a3fc",
        'brand-success': "#00cb5d",
        'brand-warning': "#ffc400",
        'brand-alert': "#ff7a00",
        'brand-danger': "#e42600",

        'brand-gray-base': "#040914",
        'brand-gray-darkest': "#151d2c",
        'brand-gray-middle': "#1f2a3a",
        'brand-gray-darker': "#213543",
        'brand-gray-dark': "#2e404d",
        'brand-gray-blue': "#586671",
        'brand-gray': "#828c94",
        'brand-gray-light': "#abb3b8",
        'brand-gray-lightly': "#c0c6ca",
        'brand-gray-lighter': "#d5d9db",
        'brand-gray-lightest': "#ececec",
        'brand-gray-uber-light': "#f8f8f8",


        // Complementary colours also have variables, but are seldom used.
        'brand-complementary-1': "#753bbd",
        'brand-complementary-2': "#2cd5b6",
        'brand-complementary-3': "#d92373",

        'error-input-background': "#FFCCCC"
      },
    },
  },
  plugins: [],
};
export default config;
