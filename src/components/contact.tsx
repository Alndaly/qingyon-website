'use client';

import { useState } from 'react';
import { company, nav, products } from '@/content/site';
import { ArrowUpRight, Logo } from './logo';
import { Reveal } from './reveal';

export function Contact() {
	const [copied, setCopied] = useState(false);
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(company.email);
			setCopied(true);
			setTimeout(() => setCopied(false), 1800);
		} catch {
			window.location.href = `mailto:${company.email}`;
		}
	};

	return (
		<section id='contact' className='relative px-3 pb-3 md:px-4 md:pb-4'>
			<div className='relative overflow-hidden rounded-[32px] bg-qing text-white'>
				<div className='pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#8fd6c6]/40 blur-[120px]' />
				<div className='pointer-events-none absolute -bottom-40 left-10 h-[420px] w-[420px] rounded-full bg-[#0c1211]/40 blur-[120px]' />
				<div className='pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]' />

				<div className='container-site relative py-20 md:py-28'>
					<Reveal>
						<span className='eyebrow !text-white/60 before:!bg-white'>Contact · 开始合作</span>
						<h2 className='mt-6 max-w-[900px] font-serif text-[38px] font-black leading-[1.18] md:text-[64px]'>
							聊聊你的业务，
							<br />
							我们一起找到第一个智能体。
						</h2>
						<p className='mt-6 max-w-[560px] text-[16px] leading-[1.85] text-white/75'>
							首次诊断沟通免费。告诉我们你的行业、团队规模与最想解决的问题，我们会给出是否适合用 AI 解决、以及如何开始的建议。
						</p>
					</Reveal>

					<Reveal delay={0.15}>
						<div className='mt-12 flex flex-col gap-3 sm:flex-row sm:items-center'>
							<a
								href={`mailto:${company.email}?subject=${encodeURIComponent('合作咨询 · 来自官网')}`}
								className='group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-ink shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] transition-transform active:scale-95'>
								发送邮件咨询
								<ArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
							</a>
							<button
								type='button'
								onClick={copy}
								className='inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-4 font-mono text-[14px] text-white/90 transition-colors hover:bg-white/10'>
								{company.email}
								<span className='rounded-full bg-white/15 px-2 py-0.5 font-sans text-[11px]'>
									{copied ? '已复制 ✓' : '复制'}
								</span>
							</button>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

export function Footer() {
	return (
		<footer className='relative pb-10 pt-16'>
			<div className='container-site'>
				<div className='grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]'>
					<div className='col-span-2 md:col-span-1'>
						<Logo />
						<p className='mt-5 max-w-[300px] text-[13.5px] leading-[1.85] text-ink-2'>
							AI 原生的一人公司。自研产品，FDE 驻场交付，企业 AI 陪跑。
						</p>
					</div>
					<FooterCol title='产品' links={products.map((p) => ({ label: p.nameZh ? `${p.name} ${p.nameZh}` : p.name, href: p.url, external: true }))} />
					<FooterCol title='导航' links={nav.map((n) => ({ label: n.label, href: n.href }))} />
					<FooterCol
						title='联系'
						links={[
							{ label: '邮件咨询', href: `mailto:${company.email}` },
							{ label: 'GitHub', href: company.github, external: true },
							{ label: company.city, href: '#about' },
						]}
					/>
				</div>

				<div className='mt-16 flex flex-col gap-3 border-t border-line pt-6 text-[12px] text-ink-3 md:flex-row md:items-center md:justify-between'>
					<p>
						© {new Date().getFullYear()} {company.legalName} · {company.legalNameEn}
					</p>
					<a href={company.icpUrl} target='_blank' rel='noopener noreferrer' className='transition-colors hover:text-ink'>
						{company.icp}
					</a>
				</div>
			</div>
		</footer>
	);
}

function FooterCol({
	title,
	links,
}: {
	title: string;
	links: { label: string; href: string; external?: boolean }[];
}) {
	return (
		<div>
			<p className='font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3'>{title}</p>
			<ul className='mt-5 space-y-3'>
				{links.map((l) => (
					<li key={l.label}>
						<a
							href={l.href}
							{...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
							className='text-[14px] text-ink-2 transition-colors hover:text-qing'>
							{l.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
