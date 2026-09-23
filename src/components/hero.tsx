'use client';

import { motion } from 'framer-motion';
import { stats } from '@/content/site';
import { AgentConsole } from './agent-console';
import { ArrowRight } from './logo';
import { ease } from './reveal';

const rise = (delay: number) => ({
	initial: { opacity: 0, y: 28 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 1, delay, ease },
});

const marquee = [
	'AI Agent 定制开发',
	'FDE 驻场交付',
	'企业 AI 陪跑',
	'GraphRAG 知识库',
	'MCP 集成',
	'私有化部署',
	'工作流自动化',
	'多模态内容生产',
	'小程序 / Web / 桌面端',
];

export function Hero() {
	return (
		<section id='top' className='grain relative overflow-hidden pt-[68px]'>
			{/* 背景：网格 + 青色光晕 */}
			<div className='grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,black,transparent)]' />
			<div className='pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-qing-2/25 blur-[120px]' />
			<div className='pointer-events-none absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full bg-[#e8d9b8]/60 blur-[120px]' />

			<div className='container-site relative grid gap-14 pb-16 pt-14 md:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:pb-24'>
				<div className='flex flex-col justify-center'>
					<motion.div {...rise(0.05)} className='flex flex-wrap items-center gap-2'>
						<span className='inline-flex items-center gap-2 rounded-full border border-line bg-white/60 py-1 pl-1 pr-3 text-[12px] text-ink-2 backdrop-blur-sm'>
							<span className='rounded-full bg-qing px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider text-white'>
								OPC
							</span>
							AI 原生的一人公司 · 杭州
						</span>
					</motion.div>

					<motion.h1
						{...rise(0.15)}
						className='mt-7 font-serif text-[34px] font-black leading-[1.15] tracking-[-0.01em] text-ink sm:text-[56px] lg:text-[58px] xl:text-[66px]'>
						以一人之力，
						<br />
						交付一支
						<span className='relative inline-block text-qing'>
							团队
							<svg
								className='absolute -bottom-2 left-0 w-full text-qing-2'
								viewBox='0 0 200 12'
								preserveAspectRatio='none'
								aria-hidden>
								<motion.path
									d='M2 8 C 50 2, 120 2, 198 7'
									stroke='currentColor'
									strokeWidth='3'
									fill='none'
									strokeLinecap='round'
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{ duration: 1.2, delay: 0.9, ease }}
								/>
							</svg>
						</span>
						的产出。
					</motion.h1>

					<motion.p
						{...rise(0.28)}
						className='mt-7 max-w-[560px] text-[16px] leading-[1.85] text-ink-2 md:text-[17px]'>
						青庸科技是一家由 AI 智能体驱动的 OPC 公司。我们自研并运营
						<b className='font-medium text-ink'> Revornix、WeSmile、Mosael </b>
						三款产品，也把同样的能力带进你的企业——以
						<b className='font-medium text-ink'> FDE 驻场交付 </b>
						可上线的智能体，以
						<b className='font-medium text-ink'> 企业陪跑 </b>
						帮助团队真正完成 AI 转型。
					</motion.p>

					<motion.div {...rise(0.4)} className='mt-9 flex flex-wrap items-center gap-3'>
						<a
							href='#contact'
							className='group inline-flex items-center gap-2 rounded-full bg-ink py-3.5 pl-6 pr-5 text-[14px] font-medium text-paper shadow-[0_10px_30px_-10px_rgba(17,22,21,0.6)] transition-transform active:scale-95'>
							预约一次免费诊断
							<span className='flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5'>
								<ArrowRight className='h-3.5 w-3.5' />
							</span>
						</a>
						<a
							href='#cases'
							className='inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/50 px-6 py-3.5 text-[14px] font-medium text-ink backdrop-blur-sm transition-colors hover:bg-white'>
							查看智能体交付案例
						</a>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 40, rotate: 1.5 }}
					animate={{ opacity: 1, y: 0, rotate: 0 }}
					transition={{ duration: 1.2, delay: 0.3, ease }}
					className='relative lg:mt-6'>
					<div className='absolute -inset-3 rounded-[30px] border border-line bg-white/30 backdrop-blur-xs' />
					<div className='relative'>
						<AgentConsole />
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 1.1, ease }}
						className='absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-[0_20px_40px_-20px_rgba(17,22,21,0.35)] sm:flex lg:-left-10'>
						<span className='flex h-9 w-9 items-center justify-center rounded-full bg-qing-soft text-qing'>
							<svg viewBox='0 0 16 16' className='h-4 w-4' fill='none' aria-hidden>
								<path d='M3 8.5l3 3 7-7' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</span>
						<span className='flex flex-col'>
							<span className='text-[13px] font-medium text-ink'>智能体已在客户现场交付</span>
							<span className='font-mono text-[10.5px] text-ink-3'>知识库 · 内容生产 · 运营审核</span>
						</span>
					</motion.div>
				</motion.div>
			</div>

			{/* 数据条 */}
			<div className='container-site relative'>
				<motion.dl
					{...rise(0.55)}
					className='grid grid-cols-2 border-y border-line md:grid-cols-4'>
					{stats.map((s, i) => (
						<div
							key={s.label}
							className={`flex flex-col-reverse py-7 md:px-8 ${i % 2 === 1 ? 'pl-5 md:pl-8' : ''} ${
								i > 0 ? 'md:border-l md:border-line' : ''
							} ${i % 2 === 1 ? 'border-l border-line md:border-l' : ''} ${
								i < 2 ? 'border-b border-line md:border-b-0' : ''
							} ${i === 0 ? 'md:pl-0' : ''}`}>
							<dt className='mt-2 text-[13px] text-ink-3'>{s.label}</dt>
							<dd className='font-serif text-[40px] font-black leading-none tracking-tight text-ink md:text-[48px]'>
								{s.value}
								<span className='ml-1 font-sans text-[16px] font-medium text-qing'>{s.unit}</span>
							</dd>
						</div>
					))}
				</motion.dl>
			</div>

			{/* 能力跑马灯 */}
			<div className='relative mt-10 overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
				<div className='animate-marquee flex w-max gap-10'>
					{[...marquee, ...marquee].map((m, i) => (
						<span key={i} className='flex items-center gap-10 whitespace-nowrap text-[15px] text-ink-3'>
							{m}
							<span className='text-seal/70'>✦</span>
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
