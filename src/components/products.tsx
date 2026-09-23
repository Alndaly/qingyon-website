import { products, type Product } from '@/content/site';
import { ArrowUpRight } from './logo';
import { MosaelVisual, RevornixVisual, WeSmileVisual } from './product-visuals';
import { Reveal } from './reveal';

const visuals: Record<Product['key'], React.ComponentType> = {
	revornix: RevornixVisual,
	wesmile: WeSmileVisual,
	mosael: MosaelVisual,
};

export function SectionHead({
	eyebrow,
	title,
	desc,
	light = false,
}: {
	eyebrow: string;
	title: React.ReactNode;
	desc?: string;
	light?: boolean;
}) {
	return (
		<div className='grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end'>
			<Reveal>
				<span className={`eyebrow ${light ? 'text-white/50!' : ''}`}>{eyebrow}</span>
				<h2
					className={`mt-5 font-serif text-[34px] font-black leading-[1.2] tracking-[-0.01em] md:text-[48px] ${
						light ? 'text-white' : 'text-ink'
					}`}>
					{title}
				</h2>
			</Reveal>
			{desc && (
				<Reveal delay={0.1}>
					<p className={`text-[15.5px] leading-[1.85] md:pb-2 ${light ? 'text-white/60' : 'text-ink-2'}`}>{desc}</p>
				</Reveal>
			)}
		</div>
	);
}

export function Products() {
	return (
		<section id='products' className='relative py-24 md:py-32'>
			<div className='container-site'>
				<SectionHead
					eyebrow='Products · 自研产品'
					title={
						<>
							三款在线运行的产品，
							<br className='hidden md:block' />
							是交付能力最好的证明。
						</>
					}
					desc='从开源的 AI 信息工作台，到服务真实校园用户的社区系统，再到本地优先的 AI 视频工作室——我们在自己的产品上打磨 Agent 工程方法，再把它交付给客户。'
				/>

				<div className='mt-16 space-y-6'>
					{products.map((p, i) => {
						const Visual = visuals[p.key];
						return (
							<Reveal key={p.key} delay={0.05}>
								<article className='group grid overflow-hidden rounded-[28px] border border-line bg-white/55 p-3 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(17,22,21,0.25)] md:grid-cols-2 md:p-4'>
									<div
										className={`flex flex-col justify-between gap-10 p-5 md:p-8 ${
											i % 2 === 1 ? 'md:order-2' : ''
										}`}>
										<div>
											<div className='flex items-center justify-between gap-4'>
												<span className='font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3'>
													{String(i + 1).padStart(2, '0')} — {p.category}
												</span>
											</div>
											<h3 className='mt-6 flex items-baseline gap-3'>
												<span className='text-[34px] font-semibold tracking-[-0.03em] text-ink md:text-[40px]'>
													{p.name}
												</span>
												{p.nameZh && (
													<span className='font-serif text-[20px] font-bold text-ink-3'>{p.nameZh}</span>
												)}
											</h3>
											<p className='mt-3 font-serif text-[20px] font-bold leading-snug text-qing md:text-[22px]'>
												{p.title}
											</p>
											<p className='mt-5 text-[15px] leading-[1.85] text-ink-2'>{p.description}</p>
											<ul className='mt-6 space-y-2.5'>
												{p.points.map((pt) => (
													<li key={pt} className='flex items-start gap-3 text-[14px] text-ink'>
														<span className='mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-qing' />
														{pt}
													</li>
												))}
											</ul>
										</div>

										<div>
											<div className='flex flex-wrap gap-1.5'>
												{p.tags.map((t) => (
													<span
														key={t}
														className='rounded-full border border-line px-2.5 py-1 text-[11.5px] text-ink-2'>
														{t}
													</span>
												))}
											</div>
											<div className='mt-6 flex flex-wrap items-center gap-2'>
												<a
													href={p.url}
													target='_blank'
													rel='noopener noreferrer'
													className='inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-paper transition-transform active:scale-95'>
													访问 {p.domain}
													<ArrowUpRight className='h-3.5 w-3.5' />
												</a>
												{p.extra && (
													<a
														href={p.extra.href}
														target='_blank'
														rel='noopener noreferrer'
														className='inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-white'>
														{p.extra.label}
														<ArrowUpRight className='h-3.5 w-3.5' />
													</a>
												)}
											</div>
										</div>
									</div>
									<div className={`min-h-[340px] ${i % 2 === 1 ? 'md:order-1' : ''}`}>
										<div className='h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]'>
											<Visual />
										</div>
									</div>
								</article>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
