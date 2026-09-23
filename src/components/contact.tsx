'use client';

import { useState } from 'react';
import { company, contact, nav, products } from '@/content/site';
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
					<div className='grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16'>
						<div>
							<Reveal>
								<span className='eyebrow !text-white/60 before:!bg-white'>Contact · 开始合作</span>
								<h2 className='mt-6 font-serif text-[36px] font-black leading-[1.18] md:text-[56px]'>
									聊聊你的业务，
									<br />
									一起找到第一个智能体。
								</h2>
								<p className='mt-6 max-w-[560px] text-[16px] leading-[1.85] text-white/75'>
									首次诊断沟通免费。告诉我们你的行业、团队规模与最想解决的问题，我们会给出是否适合用 AI 解决、以及如何开始的建议。
								</p>
							</Reveal>

							<Reveal delay={0.15}>
								<div className='mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center'>
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

						<Reveal delay={0.2}>
							<div className='grid grid-cols-2 gap-3 sm:gap-4'>
								{[{ ...contact.wechat, name: '' }, contact.official].map((c) => (
									<figure
										key={c.label}
										className='rounded-[22px] border border-white/15 bg-white/[0.07] p-3 backdrop-blur sm:p-4'>
										<div className='overflow-hidden rounded-2xl bg-white p-3'>
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img
												src={c.qr}
												alt={`${c.label}二维码`}
												width={480}
												height={480}
												loading='lazy'
												className='aspect-square w-full'
											/>
										</div>
										<figcaption className='mt-3 px-1'>
											<p className='text-[14px] font-medium text-white'>
												{c.label}
												{c.name && <span className='block text-white/60 sm:ml-1 sm:inline'>「{c.name}」</span>}
											</p>
											<p className='mt-1 text-[12px] leading-snug text-white/55'>{c.hint}</p>
										</figcaption>
									</figure>
								))}
							</div>
						</Reveal>
					</div>

					<Reveal delay={0.1}>
						<div className='mt-14 flex flex-wrap gap-2 border-t border-white/15 pt-8'>
							<span className='mr-2 self-center font-mono text-[11px] uppercase tracking-[0.16em] text-white/45'>
								Elsewhere
							</span>
							{contact.socials.map((s) => (
								<a
									key={s.href}
									href={s.href}
									target='_blank'
									rel='noopener noreferrer'
									className='group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] text-white/85 transition-colors hover:bg-white hover:text-ink'>
									{s.label}
									<span className='font-mono text-[11px] text-white/45 group-hover:text-ink-3'>{s.handle}</span>
								</a>
							))}
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
							{ label: `公众号「${contact.official.name}」`, href: '#contact' },
							...contact.socials
								.filter((s) => ['GitHub', '哔哩哔哩', '小红书'].includes(s.label))
								.map((s) => ({ label: s.label, href: s.href, external: true })),
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
