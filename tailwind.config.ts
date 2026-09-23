import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				paper: 'rgb(var(--paper) / <alpha-value>)',
				'paper-2': 'rgb(var(--paper-2) / <alpha-value>)',
				ink: 'rgb(var(--ink) / <alpha-value>)',
				'ink-2': 'rgb(var(--ink-2) / <alpha-value>)',
				'ink-3': 'rgb(var(--ink-3) / <alpha-value>)',
				line: 'var(--line)',
				qing: 'rgb(var(--qing) / <alpha-value>)',
				'qing-2': 'rgb(var(--qing-2) / <alpha-value>)',
				'qing-soft': 'rgb(var(--qing-soft) / <alpha-value>)',
				seal: 'rgb(var(--seal) / <alpha-value>)',
				night: 'rgb(var(--night) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
				serif: ['var(--font-serif)', 'Songti SC', 'STSong', 'serif'],
				mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
			},
			maxWidth: {
				site: '1240px',
			},
		},
	},
	plugins: [],
};
export default config;
