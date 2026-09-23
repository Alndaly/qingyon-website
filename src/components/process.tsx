import { opc, process } from '@/content/site';
import { SectionHead } from './products';
import { Reveal } from './reveal';

export function Process() {
	return (
		<section id='process' className='relative border-t border-line bg-paper-2/60 py-24 md:py-32'>
			<div className='container-site'>
				<SectionHead
					eyebrow='Method · 合作方式'
					title='四步，从想法到上线。'
					desc='每一步都有可见的产出物，你随时可以判断是否继续。小步快跑，用真实数据说话。'
				/>

				<div className='relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6'>
					<div className='absolute left-0 right-0 top-[22px] hidden h-px bg-linear-to-r from-qing via-qing/40 to-transparent md:block' />
					{process.map((p, i) => (
						<Reveal key={p.step} delay={i * 0.1}>
							<div className='relative'>
								<div className='flex items-center gap-4'>
									<span className='relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-qing/30 bg-paper font-mono text-[13px] font-medium text-qing'>
										{String(i + 1).padStart(2, '0')}
									</span>
									<span className='font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3 md:hidden'>
										{p.en}
									</span>
								</div>
								<h3 className='mt-6 flex items-baseline gap-3 font-serif text-[26px] font-black text-ink'>
									{p.step}
									<span className='hidden font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-ink-3 md:inline'>
										{p.en}
									</span>
								</h3>
								<p className='mt-3 text-[14.5px] leading-[1.85] text-ink-2'>{p.body}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

export function About() {
	return (
		<section id='about' className='relative py-24 md:py-32'>
			<div className='container-site grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20'>
				<Reveal>
					<span className='eyebrow'>About · 关于我们</span>
					<h2 className='mt-5 font-serif text-[34px] font-black leading-[1.25] text-ink md:text-[48px]'>
						一人公司，
						<br />
						不是小，而是<span className='text-qing'>快</span>与<span className='text-qing'>专</span>。
					</h2>
					<p className='mt-7 text-[15.5px] leading-[1.95] text-ink-2'>
						青庸科技（杭州）有限公司是一家 OPC（One Person Company）。创始人亲自负责架构、研发与交付，
						由一组 AI 智能体承担调研、编码、测试、设计与运营等协作工作——这让我们能以极低的沟通成本，
						交付通常需要一个团队才能完成的系统。
					</p>
					<p className='mt-4 text-[15.5px] leading-[1.95] text-ink-2'>
						我们相信 AI 时代的组织形态正在被重写。我们先在自己身上验证，再把验证过的方法交给客户。
					</p>

					<div className='mt-10 flex items-center gap-4 rounded-2xl border border-line bg-white/50 p-4'>
						<span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-seal font-serif text-[20px] font-black text-[#fbf3ea]'>
							青
						</span>
						<div className='min-w-0'>
							<p className='truncate text-[14px] font-medium text-ink'>青庸科技（杭州）有限公司</p>
							<p className='truncate font-mono text-[11px] text-ink-3'>Qingyon Technology (Hangzhou) Co., Ltd.</p>
						</div>
					</div>
				</Reveal>

				<div className='space-y-4'>
					{opc.map((o, i) => (
						<Reveal key={o.title} delay={i * 0.1}>
							<div className='group grid grid-cols-[auto_1fr] gap-6 rounded-[24px] border border-line bg-white/40 p-7 transition-colors duration-500 hover:bg-white md:p-8'>
								<span className='font-serif text-[40px] font-black leading-none text-qing/25 transition-colors group-hover:text-qing'>
									{String(i + 1).padStart(2, '0')}
								</span>
								<div>
									<h3 className='font-serif text-[22px] font-bold text-ink'>{o.title}</h3>
									<p className='mt-2.5 text-[14.5px] leading-[1.85] text-ink-2'>{o.body}</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
