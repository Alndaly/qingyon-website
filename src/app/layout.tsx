import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Noto_Serif_SC } from 'next/font/google';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-mono',
	weight: '100 900',
});
const serif = Noto_Serif_SC({
	weight: ['500', '700', '900'],
	variable: '--font-serif',
	display: 'swap',
	preload: false,
});

export const metadata: Metadata = {
	metadataBase: new URL('https://qingyon.com'),
	title: '青庸科技 · AI 原生的一人公司 | FDE 驻场交付 · 企业 AI 陪跑',
	description:
		'青庸科技（杭州）有限公司是一家 AI 原生的 OPC 一人公司，自研 Revornix、WeSmile、Mosael 三款产品，提供 FDE 前线部署工程与企业 AI 陪跑服务，已有多个智能体交付案例。',
	keywords: ['青庸科技', 'Qingyon', 'OPC', '一人公司', 'FDE', '智能体', 'AI Agent', '企业陪跑', 'Revornix', 'WeSmile', 'Mosael'],
	openGraph: {
		title: '青庸科技 Qingyon',
		description: '以一人之力，交付一支团队的产出。FDE 驻场交付 · 企业 AI 陪跑 · 智能体落地。',
		url: 'https://qingyon.com',
		siteName: '青庸科技',
		locale: 'zh_CN',
		type: 'website',
	},
};

export const viewport: Viewport = {
	themeColor: '#f5f3ec',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='zh-CN'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
